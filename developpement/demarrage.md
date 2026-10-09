---
layout: "default"
title: "Démarrer le projet"
section: "commencer"
status: "Brouillon"
owner: "SiWeb"
reviewed: "2026-10-09"
reference: "local-environment 571938d ; services aux commits enregistrés"
verification: "Lecture des sources ; parcours applicatif non exécuté"
---

# Démarrer le projet localement

## Prérequis

Le dépôt racine utilise npm pour lancer les services et Docker Compose pour MySQL et Redis. Il faut disposer de Node.js, npm, Docker avec Compose, d'un accès Git aux sous-modules privés et des fichiers `.env` nécessaires aux services utilisés. Les modèles de configuration sont indiqués dans les README des services ; les valeurs réelles sont gérées hors du dépôt.

Référence examinée le 9 octobre 2026 : `local-environment` à `571938d` et ses sous-modules enregistrés. Les versions de Node diffèrent entre services et workflows ; aucune version commune n'est certifiée par cette page. Vérifier le Dockerfile et le workflow du service concerné. Les commandes ci-dessous ont été rapprochées des scripts ; un démarrage complet avec configuration et connexion aux dépendances reste à valider.

Commencer par [Configuration et environnements](configuration.md) et [Accès et authentification](authentification.md). Choisir la composition du parcours testé dans [Validation locale](validation-locale.md), puis conserver les résultats du premier essai. Le [site vitrine](../services/site-vitrine.md) possède son propre checkout et ses propres commandes.

## Installation

```bash
git clone --recursive git@github.com:SIGL-SIWEB/local-environment.git
cd local-environment
npm install
```

Le script `postinstall` de la racine exécute `npm ci` dans `scolarite_back`, `absence_back`, `note_back`, `intra`, `syllabus_back`, `yearbook_back` et `cassiopee_back`. Il n'installe pas Annuaire. Préparer les `.env` requis avant de démarrer les services correspondants.

Les compositions racines ne fournissent ni Keycloak, ni le stockage S3/MinIO, ni les services email, ni l'API SiOps/Cassiopée. Prévoir leurs accès de développement ou les substituts adaptés aux fonctionnalités testées. Vérifier les destinataires et tâches automatiques avant un lancement : le script `dev` de Notes définit lui-même `NODE_ENV=production`.

## Démarrage hybride

```bash
npm run start:setup-services
npm run start
```

La première commande lance MySQL et Redis avec `docker-compose.yml`. `npm run start` lance le front et les backends Absences, Notes, Scolarité, Syllabus, Yearbook et Cassiopée selon `package.json`. Les scripts `npm run start:front-end` et `npm run start:back-end` permettent de les lancer séparément. Ni Annuaire ni Stages ne figurent dans le script `start:back-end` de cette référence.

Pour Cassiopée lancé par Node, définir `PORT=3006` dans son `.env` et `REACT_APP_CASSIOPEE_API_URL=http://localhost:3006` dans la configuration du front. Son port par défaut `3005` entrerait en conflit avec Yearbook. Cela concerne le lancement Node : Docker définit séparément le port interne `3005` de Cassiopée.

Pour utiliser Annuaire en mode hybride, dans un autre terminal :

```bash
cd annuaire
npm ci
npm run start:dev
```

Préparer sa configuration Keycloak, email et Redis avant le lancement. Son port par défaut est `1234` ; la configuration du front doit pointer vers le même port. Le port du serveur de développement React dépend de sa configuration ; le port `3004` de la carte des services concerne uniquement le front dans Docker.

## Démarrage Docker

```bash
npm run start:docker
```

Cette commande utilise `docker-compose.all.yml` et construit les services qu'il déclare. Préparer les `.env` attendus par chaque service avant de l'exécuter. Pour arrêter cette composition :

```bash
npm run stop:docker
```

Cette composition fournit huit applications et MySQL/Redis ; elle ne fournit pas les dépendances externes citées plus haut. MySQL exécute `scripts/data.sql` à la première initialisation d'un volume vide, pas à chaque redémarrage. Une mise à jour de ce fichier ne migre donc pas une base existante.

## Cas de Stages

Le service `stages_back` n'est pas déclaré dans la composition complète et le commit enregistré (`5a56cfdd`) ne contient qu'un README. Il n'est pas exécutable à cette référence. Choisir et intégrer une révision contenant l'implémentation avant d'ajouter ses commandes à ce guide.

L'implémentation de Stages sur son propre `main` (`f36a160e` observé le 9 octobre 2026) utilise par défaut le port `3006`, déjà occupé par Cassiopée sur l'hôte. Le front au commit enregistré par la référence racine n'expose pas encore de route Stages. Lors de l'intégration, choisir des révisions backend/front compatibles et des ports distincts, puis mettre à jour ensemble la configuration du backend, le mapping Docker éventuel et l'URL de l'API dans le front.

Sources vérifiées : scripts de `package.json`, `README.md`, compositions racines, `package.json` d'Annuaire, configuration de Cassiopée, script `dev` de Notes, routes du front et arbre Git de Stages aux commits enregistrés. Le port de l'implémentation Stages hors référence est relevé au commit `f36a160e` de son dépôt.

[Retour à l'index](../index.md)
