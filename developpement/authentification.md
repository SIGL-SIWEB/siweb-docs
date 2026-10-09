---
layout: "default"
title: "Accès et authentification"
section: "commencer"
status: "Brouillon"
owner: "SiWeb"
reviewed: "2026-10-09"
reference: "local-environment 571938d ; services aux commits enregistrés"
verification: "Lecture des sources ; parcours applicatif non exécuté"
---

# Accès et authentification

Lecture du 9 octobre 2026, référence `local-environment` à `571938d` et sous-modules enregistrés. Cette page explique le parcours d'authentification observé ; la matrice complète des droits par endpoint reste à établir dans les fiches des services.

## Accès nécessaires

Obtenir un compte de développement et le client/realm Keycloak adaptés au parcours testé. Faire confirmer les groupes/claims attendus et les comptes techniques par leurs propriétaires. SiWeb définit l'usage applicatif ; SiOps et les propriétaires des intégrations confirment les accès à la plateforme.

Le site vitrine est un site public distinct. Aucun parcours Keycloak n'est observé dans le code de sa référence examinée ; les accès à son hébergement et à ses éventuelles intégrations restent des accès d'exploitation.

## Parcours intranet

1. `intra/src/index.tsx` configure `react-oidc-context` avec l'autorité, le client et l'URI de retour. Les noms consommés sont `REACT_APP_KEYCLOACK_AUTHORITY`, `REACT_APP_KEYCLOACK_CLIENT_ID` et `REACT_APP_KEYCLOACK_REDIRECT_URI`.
2. Le navigateur effectue la connexion auprès de Keycloak puis revient à l'URI configurée. Cette URI doit correspondre à une URI autorisée pour le client et à l'adresse réellement utilisée localement.
3. Le front stocke la session OIDC via `WebStorageStateStore` dans `localStorage`, active le renouvellement silencieux et nettoie l'URL après le retour de connexion.
4. Les appels aux API transmettent le token dans `Authorization: Bearer <token>`. Les backends vérifient le token puis les droits du parcours, selon leur implémentation.
5. Les services qui doivent lire/modifier des données Keycloak utilisent leur propre configuration et leurs comptes techniques. La connexion du navigateur ne provisionne pas ces comptes.

## Identité et groupes

Le front lit les groupes dans le claim `group` (`useUserGroup.ts`). Les noms déclarés dans son enum sont `admin`, `MajorLeader`, `Student`, `Teacher`, `Representative`, `PaeSponsor` et `PaeCoach`. Respecter leur casse. Le claim `preferred_username` est utilisé par plusieurs API pour identifier le login.

Notes déclare également le rôle `API` pour certains échanges de services. Ne pas supposer que la liste du front représente tous les droits backend. Les vérifications observées ne sont pas toutes basées sur `realm_access.roles` : le mapping Keycloak doit produire les claims consommés par la version de code concernée.

La visibilité d'un écran dépend du front ; l'autorisation d'une opération dépend de son API. Pour documenter un droit, suivre la route et son contrôleur/service, pas seulement le menu qui l'affiche.

## Particularités des backends

| Service / famille | Comportement observé |
| --- | --- |
| Notes | Sécurité générée par TSOA, `src/authentication.ts`, vérification JWT RS256 et groupes ; `expressAuthentication` court-circuite ses contrôles si `NODE_ENV=development` |
| Absences, Scolarité, Syllabus, Yearbook | Helpers `src/authentification.ts`, vérification JWT RS256 avec `AUTH_KEY`, puis contrôles de groupes selon les routes/parcours |
| Annuaire | Guard Nest qui extrait le Bearer et vérifie le token avec `AUTH_KEY` ; la désinscription newsletter bénéficie d'une exception explicite dans ce guard |
| Cassiopée | Passerelle avec vérification applicative et transmission du token vers l'API SiOps ; le service amont possède ses propres contrôles |

Le script `dev` de Notes force `NODE_ENV=production`, tandis que son code de sécurité possède une exception en mode `development`. Le mode choisi doit être consigné lorsque l'on teste les droits. Un résultat obtenu en court-circuitant la sécurité ne valide pas une permission réelle.

## Vérification du premier parcours connecté

- Vérifier que le front pointe vers le client/realm de développement et les APIs locales voulues.
- Se connecter avec un utilisateur fictif dont le login et les groupes sont connus ; vérifier le retour vers l'URL locale.
- Vérifier la présence des claims `group` et `preferred_username` attendus sans copier le token dans un ticket ou une page.
- Effectuer une lecture métier autorisée puis le même parcours avec un compte sans le droit requis ; consigner le résultat attendu du service concerné.
- Vérifier le renouvellement de session et le comportement après expiration/déconnexion. Ce dernier parcours reste à exécuter dans la validation locale.

## Diagnostic

| Symptôme | Contrôles utiles |
| --- | --- |
| Retour de connexion incorrect ou boucle de connexion | Autorité, client, URI de retour, configuration autorisée dans Keycloak, adresse/port du front et session navigateur |
| Token refusé par une API | Présence du Bearer, expiration, clé de vérification de l'environnement, version de l'API et traitement de l'erreur |
| Connexion réussie mais écran/action refusé | Claim `group`, casse des noms, permissions de la route, identité du login et éventuelles conditions liées aux données |
| Parcours utilisateur réussi, appel de service en échec | Compte technique, URL d'administration/token et droits de l'intégration concernée |

Les codes d'erreur varient : certains helpers utilisent `401` pour un mauvais groupe, d'autres `403`. Vérifier le contrat du service avant de conclure qu'un statut identifie une cause unique.

Sources : `intra/src/index.tsx`, `useUserGroup.ts`, enum `Group`, helpers d'authentification des services et guard d'Annuaire aux commits enregistrés. Pour les variables, consulter [Configuration](configuration.md) ; pour la preuve de fonctionnement, consulter [Validation locale](validation-locale.md).

[Retour à l'index](../index.md)
