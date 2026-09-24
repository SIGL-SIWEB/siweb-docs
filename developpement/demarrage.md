---
layout: default
---

# Démarrer le projet localement

## Prérequis

Le dépôt racine utilise npm pour lancer les services et Docker Compose pour MySQL et Redis. Il faut disposer de Node.js, npm, Docker avec Compose, d'un accès Git aux sous-modules privés et des fichiers `.env` nécessaires aux services utilisés. Les modèles de configuration sont indiqués dans les README des services ; les valeurs réelles sont gérées hors du dépôt.

## Installation

```bash
git clone --recursive git@github.com:SIGL-SIWEB/local-environment.git
cd local-environment
npm install
```

Le script `postinstall` de la racine exécute `npm ci` dans `scolarite_back`, `absence_back`, `note_back`, `intra`, `syllabus_back` et `yearbook_back`. Il n'installe pas automatiquement tous les sous-modules. Préparer les `.env` requis avant de démarrer les services correspondants.

## Démarrage hybride

```bash
npm run start:setup-services
npm run start
```

La première commande lance MySQL et Redis avec `docker-compose.yml`. `npm run start` lance le front et les backends Absences, Notes, Scolarité, Syllabus et Yearbook selon `package.json`. Les scripts `npm run start:front-end` et `npm run start:back-end` permettent de les lancer séparément. Ni Annuaire ni Stages ne figurent dans le script `start:back-end` actuel.

## Démarrage Docker

```bash
npm run start:docker
```

Cette commande utilise `docker-compose.all.yml` et construit les services qu'il déclare. Préparer les `.env` attendus par chaque service avant de l'exécuter. Pour arrêter cette composition :

```bash
npm run stop:docker
```

Le service `stages_back` n'est pas déclaré dans la composition complète à la révision examinée. Consulter son dépôt pour son démarrage propre.

Sources vérifiées : scripts de `package.json`, `README.md`, `docker-compose.yml` et `docker-compose.all.yml` à la racine.

[Retour à l'index](../index.md)
