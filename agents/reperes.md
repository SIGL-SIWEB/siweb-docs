---
layout: "default"
title: "Repères dans les dépôts"
section: "agents"
status: "Brouillon"
owner: "SiWeb"
reviewed: "2026-10-09"
reference: "local-environment 571938d ; sources examinées le 2026-10-09"
verification: "Lecture des sources ; parcours applicatif non exécuté"
description: "Identifier le dépôt propriétaire, la révision et les fichiers à examiner."
---

# Repères dans les dépôts

## Frontières de modification

Chaque sous-module applicatif est un dépôt Git indépendant. Son commit doit être publié dans ce dépôt avant d’intégrer son pointeur dans `local-environment`. Le site vitrine a son propre dépôt même si aucun pointeur n’est enregistré dans la référence racine examinée.

La racine possède les compositions, lanceurs, workflows partagés et documentation transverse. Une modification de la racine ne livre pas automatiquement une modification d’API.

## Trouver les points d’entrée

Les [fiches de service](../services/index.md) indiquent les fichiers d’entrée, contrôleurs, services et modèles examinés. Lire le `package.json` de la révision courante, le README et la configuration du générateur avant de modifier un fichier de routes ou de contrat généré.

Pour une modification couvrant plusieurs dépôts : identifier le producteur et ses consommateurs, préparer la compatibilité des contrats, vérifier chaque dépôt, puis intégrer les versions dans l’ordre requis.

## Évaluer une référence

Comparer la révision du chapitre, le pointeur racine et la branche du service. Stages illustre la différence : un README au pointeur racine, une implémentation sur le `main` propre au service. Ne pas considérer ces états comme identiques.

Les plans sous `docs/superpowers/` sont historiques. L’inventaire et les procédures privées se consultent avec l’accès au dépôt source ; ils ne sont pas inclus dans le site public.
