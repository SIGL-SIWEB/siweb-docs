---
layout: "default"
title: "Scolarité"
section: "services"
status: "Brouillon"
owner: "SiWeb"
reviewed: "2026-10-09"
reference: "scolarite_back 5978411da47e5826d375b66f6d208f0ded178772"
verification: "Lecture des sources ; parcours applicatif non exécuté"
description: "API des données communes : personnes, promotions, cours/modules, affectations, imports et photos."
---

# Scolarité

## Rôle et responsabilité

API des données communes : personnes, promotions, cours/modules, affectations, imports et photos. SiWeb maintient l’application ; SiOps exploite l’infrastructure. La version réellement déployée reste à confirmer.

Dépôt : [SIGL-SIWEB/scolarite_back](https://github.com/SIGL-SIWEB/scolarite_back). Référence : `5978411da47e5826d375b66f6d208f0ded178772`.

## Carte du code

`src/index.ts`, `src/app.ts`, `src/controllers/`, `src/services/`, `src/models/` et `src/keycloack.ts`.

## Exécution et configuration

La commande déclarée de lancement est `npm run dev`, depuis le dépôt du service et après installation/configuration. Lire le [démarrage](../developpement/demarrage.md), la [configuration](../developpement/configuration.md) et la [validation locale](../developpement/validation-locale.md) avant un essai. Les prérequis exacts de runtime restent à valider.

## Données et cycle de vie

Distinguer les identités gérées dans Keycloak, les données SQL et les fichiers/photos dans le stockage. Documenter leurs identifiants et synchronisations.

## Contrats et autorisation

Les autres services consomment des données de scolarité. Lister les contrats et les droits par endpoint. Voir les premiers repères d’[authentification](../developpement/authentification.md).

## Parcours métier

Personnes, promotions, cours, affectations et échanges de données. La [section métier](../metier/index.md) recense les règles à faire valider.

## Tâches et effets externes

L’initialisation vérifie/crée un bucket et prépare le transport email ; isoler les intégrations pendant les essais.

## Vérifications

Scripts présents dans le `package.json` de cette référence : `npm run lint` ; `npm run build` ; `npm run test`. Ils n’ont pas été exécutés dans cette passe documentaire. Consulter la [matrice de vérification](../agents/verification.md) pour distinguer présence d’un script et résultat d’un contrôle.

## Livraison et récupération

Lire le workflow du service à la révision concernée : les workflows examinés comportent un relais vers le dépôt d’infrastructure SiOps. Ne pas en déduire l’image actuellement déployée. Les contrôles après livraison, le rollback et la récupération restent à compléter avec les responsables. Voir [Livrer et exploiter](../exploitation/index.md).

## Sources et couverture restante

[Arbre à la révision examinée](https://github.com/SIGL-SIWEB/scolarite_back/tree/5978411da47e5826d375b66f6d208f0ded178772) ; `package.json`, points d’entrée et configuration. Cette fiche est un repère de code, pas une référence complète des règles métier.

À compléter : contrats par endpoint, matrice des droits, modèle de données, exemples métier, vérifications exécutées, versions déployées et procédures de reprise.
