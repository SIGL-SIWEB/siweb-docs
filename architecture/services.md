---
layout: "default"
title: "Services et dépendances"
section: "architecture"
status: "Brouillon"
owner: "SiWeb"
reviewed: "2026-10-09"
reference: "local-environment 571938d ; services aux commits enregistrés"
verification: "Lecture des sources ; parcours applicatif non exécuté"
---

# Services et dépendances

`local-environment` rassemble un front et des services distincts sous forme de sous-modules Git. Référence examinée le 9 octobre 2026 : `571938d`. Les ports de la table sont ceux exposés sur l'hôte par `docker-compose.all.yml` ; ils ne décrivent pas le déploiement de production.

| Sous-module | Rôle | Port local |
| --- | --- | ---: |
| `intra` | Front intranet | 3004 |
| `note_back` | API des notes | 3000 |
| `absence_back` | API des absences | 3001 |
| `scolarite_back` | API de scolarité et données communes | 3002 |
| `syllabus_back` | API des syllabus | 3003 |
| `yearbook_back` | API du yearbook | 3005 |
| `annuaire` | API de l'annuaire | 1234 |
| `cassiopee_back` | Passerelle vers l'API SiOps/Cassiopée : applications, bases et endpoints | 3006 |

La composition complète lance aussi MySQL (`db`, port 3306) et Redis (`cache`, port 6379). Cassiopée écoute sur le port `3005` dans son conteneur, exposé sur le port `3006` de l'hôte ; Yearbook utilise un conteneur distinct et le port hôte `3005`.

## Périmètre SiWeb / SiOps

SiWeb développe le front, les API, les contrats et les règles métier. Sa documentation couvre les dépendances attendues, les variables nécessaires, les vérifications, la construction des images et leur livraison. SiOps exploite l'infrastructure qui héberge ces applications. Les procédures de plateforme, les accès et la confirmation des images réellement déployées doivent être validés avec SiOps.

Les workflows de services aux commits enregistrés construisent des images dans GHCR et comportent un job qui met à jour des références d'images dans le dépôt d'infrastructure SiOps. La lecture complémentaire des branches `main` des neuf services le 9 octobre 2026 confirme la présence de ce relais, y compris pour Stages dans son propre dépôt. Le workflow partagé `local-environment/.github/workflows/reusable-backend.yml` construit et publie des images, sans job de déploiement. Ces deux mécanismes existent dans les sources examinées : vérifier le workflow utilisé par le service et l'environnement avant de décrire la livraison réelle. Le workflow de promotion du dépôt racine ouvre des pull requests ; il ne les fusionne pas et ne déploie pas.

## Dépendances locales

Les variables de `docker-compose.all.yml` déclarent notamment les liens Absences → Scolarité/Notes, Syllabus → Scolarité/Notes et Yearbook → Scolarité/Notes. Le front dépend des API listées dans la composition. Ces déclarations ne remplacent pas les contrats et les appels du code des services.

MySQL stocke les données SQL. Redis est utilisé notamment pour l'état de présence et la file de newsletter. Keycloak/OIDC, l'envoi d'email, le stockage compatible S3/MinIO et l'API SiOps/Cassiopée sont des dépendances externes ; les compositions racines ne les installent pas. Leur configuration reste nécessaire pour les fonctionnalités qui les utilisent.

## Couverture des modes de démarrage

- `docker-compose.yml` ne lance que MySQL et Redis.
- `docker-compose.all.yml` lance les huit applications de la table et les deux services de données.
- `npm run start` lance le front et les API Notes, Absences, Scolarité, Syllabus, Yearbook et Cassiopée. Annuaire nécessite une installation et un lancement séparés.
- Le pointeur `stages_back` de cette référence (`5a56cfdd`) ne contient qu'un README. Il ne dispose ni de `package.json`, ni de code exécutable ; il n'est lancé par aucun des modes ci-dessus. L'implémentation existe sur le `main` propre à Stages (`f36a160e` observé le 9 octobre 2026), mais ce commit n'est pas enregistré dans cette référence racine.

Les entrées `site-vitrine` et `yearbook-back` existent dans `.gitmodules`, sans pointeur de sous-module dans l'arbre Git de cette référence. Le site vitrine fait bien partie de SiWeb, comme précisé ci-dessous ; le statut du chemin historique `yearbook-back` reste à confirmer. Pour les contrats précis d'un service enregistré, consulter son dépôt au commit indiqué par `local-environment`.

## Site public, développé séparément

L'équipe confirme que `site-vitrine` appartient au périmètre SiWeb. Son dépôt a été examiné à `8028e4ff` : site Angular 4 avec traductions français/anglais, développé séparément de la composition intranet. Son README décrit un hébergement Netlify à `sigl.epita.fr` ; les paramètres et responsables de cet hébergement restent à confirmer. Sa [fiche de service](../services/site-vitrine.md) détaille les sources, commandes et limites vérifiées.

Son absence de la composition et des pointeurs racines ne le retire pas du produit. Le statut de l'ancien chemin `yearbook-back` reste, lui, à résoudre.

Sources vérifiées : `.gitmodules`, arbre Git, `docker-compose.yml`, `docker-compose.all.yml`, `package.json`, configuration des services, workflows du dépôt racine et des services aux commits enregistrés, CI des branches `main` de services observées le 9 octobre 2026. Les versions de production restent à confirmer avec SiOps.

[Retour à l'index](../index.md)
