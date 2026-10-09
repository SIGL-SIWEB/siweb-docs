---
layout: "default"
title: "Yearbook"
section: "services"
status: "Brouillon"
owner: "SiWeb"
reviewed: "2026-10-09"
reference: "yearbook_back 3d617e8fe3b57bc20899028677a56f8303ed9bde"
verification: "Lecture des sources ; parcours applicatif non exécuté"
description: "API des profils et contenus liés à une promotion : événements, photos, prix et votes."
---

# Yearbook

## Rôle et responsabilité

API des profils et contenus liés à une promotion : événements, photos, prix et votes. SiWeb maintient l’application ; SiOps exploite l’infrastructure. La version réellement déployée reste à confirmer.

Dépôt : [SIGL-SIWEB/yearbook_back](https://github.com/SIGL-SIWEB/yearbook_back). Référence : `3d617e8fe3b57bc20899028677a56f8303ed9bde`.

## Carte du code

`src/index.ts`, `src/app.ts`, `src/controllers/`, `src/services/`, `src/models/`, `src/contract/` et `src/routes/`.

## Exécution et configuration

La commande déclarée de lancement est `npm run dev`, depuis le dépôt du service et après installation/configuration. Lire le [démarrage](../developpement/demarrage.md), la [configuration](../developpement/configuration.md) et la [validation locale](../developpement/validation-locale.md) avant un essai. Les prérequis exacts de runtime restent à valider.

## Données et cycle de vie

SQL, profils et contenus par promotion ; préciser l’isolation, les snapshots, fichiers et suppressions en cascade.

## Contrats et autorisation

Dépendances Scolarité/Notes et identité ; documenter synchronisation, modération et permissions. Voir les premiers repères d’[authentification](../developpement/authentification.md).

## Parcours métier

Profils, événements, prix, votes, modération et export du yearbook. La [section métier](../metier/index.md) recense les règles à faire valider.

## Tâches et effets externes

En production, la présence de `PROMO` peut déclencher création/synchronisation au démarrage. Revoir les échéances et procédures de passage de promotion.

## Vérifications

Scripts présents dans le `package.json` de cette référence : `npm run lint` ; `npm run build` ; `npm run test`. Ils n’ont pas été exécutés dans cette passe documentaire. Consulter la [matrice de vérification](../agents/verification.md) pour distinguer présence d’un script et résultat d’un contrôle.

## Livraison et récupération

Lire le workflow du service à la révision concernée : les workflows examinés comportent un relais vers le dépôt d’infrastructure SiOps. Ne pas en déduire l’image actuellement déployée. Les contrôles après livraison, le rollback et la récupération restent à compléter avec les responsables. Voir [Livrer et exploiter](../exploitation/index.md).

## Sources et couverture restante

[Arbre à la révision examinée](https://github.com/SIGL-SIWEB/yearbook_back/tree/3d617e8fe3b57bc20899028677a56f8303ed9bde) ; `package.json`, points d’entrée et configuration. Cette fiche est un repère de code, pas une référence complète des règles métier.

À compléter : contrats par endpoint, matrice des droits, modèle de données, exemples métier, vérifications exécutées, versions déployées et procédures de reprise.
