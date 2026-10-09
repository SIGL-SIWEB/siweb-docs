---
layout: "default"
title: "Valider un environnement local"
section: "commencer"
status: "Brouillon"
owner: "SiWeb"
reviewed: "2026-10-09"
reference: "local-environment 571938d ; services aux commits enregistrés"
verification: "Lecture des sources ; parcours applicatif non exécuté"
---

# Valider un environnement de développement

Cette procédure complète le [démarrage](demarrage.md), la [configuration](configuration.md) et l'[authentification](authentification.md). La lecture des scripts a été faite le 9 octobre 2026 ; les essais applicatifs ci-dessous restent à exécuter avec une configuration et des données de développement validées.

## Choisir un parcours et sa composition

| Objectif | Composition à préparer |
| --- | --- |
| Modifier le site public ou ses traductions | `site-vitrine` seul ; les médias/widgets externes et le formulaire ont leur propre comportement réseau |
| Lire les données de Scolarité depuis le front | `intra`, `scolarite_back`, MySQL, Keycloak ; tenir compte de l'initialisation stockage/email de Scolarité |
| Travailler sur Notes/PAE | Ajouter `note_back`, ses dépendances Keycloak/email et sa configuration de tâches automatiques |
| Travailler sur la présence | Ajouter `absence_back` et Redis ; vérifier les comptes et notifications du parcours |
| Préparer toute la composition Docker racine | Les huit applications déclarées, MySQL/Redis et les dépendances externes nécessaires ; Stages et le site vitrine restent séparés à cette référence |

La composition minimale est celle du parcours choisi. Lancer moins de services ne rend pas leurs effets externes fictifs : Scolarité vérifie/crée son bucket au démarrage, Notes importe ses jobs, et Yearbook peut créer/synchroniser une promotion selon son environnement.

## Préparer les données et effets externes

- [ ] Utiliser des bases, comptes Keycloak, objets et destinataires dédiés au développement ; documenter leurs propriétaires et la procédure de remise à zéro.
- [ ] Préparer un jeu de données fictif : utilisateurs et groupes, une promotion, un module/cours, les affectations et les données du module testé. Préserver les mêmes identifiants entre Keycloak et les API.
- [ ] Vérifier les destinataires calculés par les parcours testés. Dans Notes, `MAIL_RECEIVERS` ajoute des destinataires dans certains parcours et n'en remplace pas d'autres.
- [ ] Inventorier les tâches déclenchées à l'import ou au démarrage ; utiliser des mocks/tests isolés pour les intégrations non disponibles. Aucun interrupteur universel des jobs/emails n'est établi à cette référence.
- [ ] Pour Stages ou le site vitrine, vérifier les écritures externes et les endpoints avant tout essai de suppression, purge ou soumission de formulaire.

Le fichier `scripts/data.sql` contient des instructions `INSERT INTO` ; son contenu n'est pas certifié synthétique par cette passe documentaire. La composition le charge automatiquement lors de la création d'un volume MySQL vide. Faire valider ou remplacer le jeu de données avant de considérer cette initialisation comme une fixture partageable. Un générateur de fixtures transversal validé reste à construire.

## Vérifications de démarrage

Depuis la racine, examiner les révisions et la configuration des services avant de lancer le mode choisi. Le guide de démarrage décrit les commandes et leurs limites.

```bash
git submodule status
node --version
npm --version
docker compose ps
```

Ne pas lancer simultanément les modes Node et Docker sur les mêmes ports. Vérifier dans les journaux le port HTTP réellement ouvert et la connexion aux données. Les versions Node sont à relever par service, pas à déduire uniquement de la version du poste.

Pour Scolarité lancé sur l'hôte avec le port `3002`, son endpoint observé permet une première vérification HTTP :

```bash
curl --fail http://localhost:3002/healthz
```

Réponse attendue du code examiné : `{"api":"up"}`. Cet endpoint n'exécute pas une vérification complète des intégrations ; une réponse positive ne certifie pas le parcours métier.

Ensuite, avec un utilisateur de test, vérifier une lecture de cours/étudiant, un parcours du module concerné, un refus de droit attendu et les effets SQL/fichiers/email éventuels. Pour le site vitrine, vérifier l'accueil, la route `/modules`, les deux langues et le rechargement direct d'une route.

## Preuve à conserver lors du premier essai

| Élément | Valeur à consigner |
| --- | --- |
| Code | Commit racine et commits de tous les dépôts utilisés, dont les dépôts séparés |
| Runtime | OS, Node/npm, Docker/Compose et navigateur utilisés |
| Configuration | Modèle/version de configuration, endpoints de test et propriétaires ; aucune valeur de secret |
| Données | Fixture utilisée et procédure de réinitialisation |
| Parcours | Étapes, résultat attendu/observé, refus de droit et effets externes vérifiés |
| Résultat | Date, testeur, erreurs rencontrées et corrections documentaires |

Les checks documentaires du dépôt racine valident la copie, les liens et ses scripts. Les tests/build/lint des services valident un autre périmètre. Aucun de ces résultats ne remplace cet essai de démarrage et de parcours connecté.

Sources : compositions et SQL racines, `/healthz` de Scolarité, initialisations Scolarité/Notes/Yearbook aux commits enregistrés, source du site vitrine à `8028e4ff`.

[Retour à l'index](../index.md)
