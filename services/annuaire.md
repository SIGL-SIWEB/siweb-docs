---
layout: "default"
title: "Annuaire et newsletter"
section: "services"
status: "Brouillon"
owner: "SiWeb"
reviewed: "2026-10-09"
reference: "annuaire 899c50c713f62d3143b3da39aa8d4d8027b9e789"
verification: "Lecture des sources ; parcours applicatif non exécuté"
description: "API NestJS avec fonctionnalités de newsletter, abonnements et désinscription ; clarifier la frontière avec l’annuaire affiché par le front."
---

# Annuaire et newsletter

## Rôle et responsabilité

API NestJS avec fonctionnalités de newsletter, abonnements et désinscription ; clarifier la frontière avec l’annuaire affiché par le front. SiWeb maintient l’application ; SiOps exploite l’infrastructure. La version réellement déployée reste à confirmer.

Dépôt : [SIGL-SIWEB/annuaire](https://github.com/SIGL-SIWEB/annuaire). Référence : `899c50c713f62d3143b3da39aa8d4d8027b9e789`.

## Carte du code

`src/main.ts`, `src/app.module.ts`, `src/auth.guard.ts`, `src/newsletter/`, `src/dtos/` et `src/config.ts`.

## Exécution et configuration

La commande déclarée de lancement est `npm run start:dev`, depuis le dépôt du service et après installation/configuration. Lire le [démarrage](../developpement/demarrage.md), la [configuration](../developpement/configuration.md) et la [validation locale](../developpement/validation-locale.md) avant un essai. Les prérequis exacts de runtime restent à valider.

## Données et cycle de vie

Données de destinataires/abonnements et file Redis/Bull ; l’usage d’une variable SQL ne prouve pas la propriété d’une base.

## Contrats et autorisation

Vérification Bearer/JWT dans le guard et exception de désinscription. Documenter les sources des destinataires et consommateurs. Voir les premiers repères d’[authentification](../developpement/authentification.md).

## Parcours métier

Inscription, sélection des destinataires, envoi et désinscription. La [section métier](../metier/index.md) recense les règles à faire valider.

## Tâches et effets externes

File newsletter, temporisation et retries ; documenter les destinataires de test et la reprise de file.

## Vérifications

Scripts présents dans le `package.json` de cette référence : `npm run lint` ; `npm run build` ; `npm run test`. Ils n’ont pas été exécutés dans cette passe documentaire. Consulter la [matrice de vérification](../agents/verification.md) pour distinguer présence d’un script et résultat d’un contrôle.

## Livraison et récupération

Lire le workflow du service à la révision concernée : les workflows examinés comportent un relais vers le dépôt d’infrastructure SiOps. Ne pas en déduire l’image actuellement déployée. Les contrôles après livraison, le rollback et la récupération restent à compléter avec les responsables. Voir [Livrer et exploiter](../exploitation/index.md).

## Sources et couverture restante

[Arbre à la révision examinée](https://github.com/SIGL-SIWEB/annuaire/tree/899c50c713f62d3143b3da39aa8d4d8027b9e789) ; `package.json`, points d’entrée et configuration. Cette fiche est un repère de code, pas une référence complète des règles métier.

À compléter : contrats par endpoint, matrice des droits, modèle de données, exemples métier, vérifications exécutées, versions déployées et procédures de reprise.
