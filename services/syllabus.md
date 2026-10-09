---
layout: "default"
title: "Syllabus"
section: "services"
status: "Brouillon"
owner: "SiWeb"
reviewed: "2026-10-09"
reference: "syllabus_back 993552110eabcebacf719b4ac9279081f6f9272e"
verification: "Lecture des sources ; parcours applicatif non exécuté"
description: "API des syllabus par cours/promotion, propositions et validation."
---

# Syllabus

## Rôle et responsabilité

API des syllabus par cours/promotion, propositions et validation. SiWeb maintient l’application ; SiOps exploite l’infrastructure. La version réellement déployée reste à confirmer.

Dépôt : [SIGL-SIWEB/syllabus_back](https://github.com/SIGL-SIWEB/syllabus_back). Référence : `993552110eabcebacf719b4ac9279081f6f9272e`.

## Carte du code

`src/index.ts`, `src/app.ts`, `src/controllers/`, `src/services/`, `src/models/`, `src/repositories/` et `src/routes/`.

## Exécution et configuration

La commande déclarée de lancement est `npm run dev`, depuis le dépôt du service et après installation/configuration. Lire le [démarrage](../developpement/demarrage.md), la [configuration](../developpement/configuration.md) et la [validation locale](../developpement/validation-locale.md) avant un essai. Les prérequis exacts de runtime restent à valider.

## Données et cycle de vie

SQL et liens vers les cours/promotions. Recenser les versions et le passage d’année.

## Contrats et autorisation

Dépendances Scolarité/Notes déclarées ; documenter les droits enseignants et les états visibles par rôle. Voir les premiers repères d’[authentification](../developpement/authentification.md).

## Parcours métier

Éditer, proposer, valider et exporter un syllabus. La [section métier](../metier/index.md) recense les règles à faire valider.

## Tâches et effets externes

Recenser les notifications, leurs destinataires et les conditions de répétition.

## Vérifications

Scripts présents dans le `package.json` de cette référence : `npm run lint` ; `npm run build` ; `npm run test`. Ils n’ont pas été exécutés dans cette passe documentaire. Consulter la [matrice de vérification](../agents/verification.md) pour distinguer présence d’un script et résultat d’un contrôle.

## Livraison et récupération

Lire le workflow du service à la révision concernée : les workflows examinés comportent un relais vers le dépôt d’infrastructure SiOps. Ne pas en déduire l’image actuellement déployée. Les contrôles après livraison, le rollback et la récupération restent à compléter avec les responsables. Voir [Livrer et exploiter](../exploitation/index.md).

## Sources et couverture restante

[Arbre à la révision examinée](https://github.com/SIGL-SIWEB/syllabus_back/tree/993552110eabcebacf719b4ac9279081f6f9272e) ; `package.json`, points d’entrée et configuration. Cette fiche est un repère de code, pas une référence complète des règles métier.

À compléter : contrats par endpoint, matrice des droits, modèle de données, exemples métier, vérifications exécutées, versions déployées et procédures de reprise.
