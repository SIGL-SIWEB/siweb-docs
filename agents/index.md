---
layout: "default"
title: "Guide pour les agents"
section: "agents"
status: "Brouillon"
owner: "SiWeb"
reviewed: "2026-10-09"
reference: "local-environment 571938d ; sources examinées le 2026-10-09"
verification: "Lecture des sources ; parcours applicatif non exécuté"
description: "Un ordre de lecture et de vérification pour les contributions agentiques."
---

# Guide pour les agents

Utiliser les mêmes références techniques que les développeurs. `AGENTS.md` contient les instructions du dépôt ; les chapitres partagés décrivent le système.

## Avant de modifier

1. Lire `AGENTS.md` du dépôt et les instructions applicables à son sous-dossier.
2. Comprendre le [périmètre et les dépendances](../architecture/services.md).
3. Identifier la [fiche du service](../services/index.md) et la révision à laquelle elle se rapporte.
4. Lire le parcours métier, les contrats, la configuration et les limites de vérification pertinentes.
5. Vérifier les [repères de dépôt](reperes.md) et la [matrice de commandes](verification.md).

## Pendant et après la modification

Faire le changement dans le dépôt qui possède le code. Respecter ses fichiers générés et ses contrats. Exécuter les contrôles pertinents ; consigner ceux qui n’ont pas pu être réalisés et pourquoi. Si nécessaire, mettre à jour le pointeur dans la racine après publication du commit de service.

Mettre à jour la documentation du comportement, de la configuration ou de la procédure modifiée. Une ancienne spécification n’est pas une preuve du comportement actuel ; vérifier les sources avant d’en reprendre une affirmation.

## À compléter

- Ajouter des `AGENTS.md` locaux quand un service demande des instructions spécifiques.
- Finaliser les contrats, modèles de données et règles métier dans leurs chapitres communs.
- Faire réaliser une petite contribution représentative, puis contrôler fichiers modifiés, vérifications et documentation.
