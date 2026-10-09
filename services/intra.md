---
layout: "default"
title: "Intra"
section: "services"
status: "Brouillon"
owner: "SiWeb"
reviewed: "2026-10-09"
reference: "intra 6da716908c2b12f5865d56ef3b2039f0ca112421"
verification: "Lecture des sources ; parcours applicatif non exécuté"
description: "Frontend React de l’intranet ; navigation, clients API, vues par rôle et exports."
---

# Intra

## Rôle et responsabilité

Frontend React de l’intranet ; navigation, clients API, vues par rôle et exports. SiWeb maintient l’application ; SiOps exploite l’infrastructure. La version réellement déployée reste à confirmer.

Dépôt : [SIGL-SIWEB/intra](https://github.com/SIGL-SIWEB/intra). Référence : `6da716908c2b12f5865d56ef3b2039f0ca112421`.

## Carte du code

`src/index.tsx`, `src/pages/`, `src/components/`, `src/services/` et `src/interfaces/`.

## Exécution et configuration

La commande déclarée de lancement est `npm run start`, depuis le dépôt du service et après installation/configuration. Lire le [démarrage](../developpement/demarrage.md), la [configuration](../developpement/configuration.md) et la [validation locale](../developpement/validation-locale.md) avant un essai. Les prérequis exacts de runtime restent à valider.

## Données et cycle de vie

Le front consomme les API ; les données persistantes et leurs sources de vérité doivent être détaillées par domaine.

## Contrats et autorisation

Vérifier les routes, les clients API et les groupes affichés. La visibilité d’une vue ne remplace pas l’autorisation dans l’API. Voir les premiers repères d’[authentification](../developpement/authentification.md).

## Parcours métier

Notes/PAE, absences, scolarité, syllabus, yearbook, annuaire et ressources Cassiopée. Stages n’est pas câblé dans la révision racine examinée. La [section métier](../metier/index.md) recense les règles à faire valider.

## Tâches et effets externes

Téléversements et exports dépendent du parcours ; recenser les appels externes associés.

## Vérifications

Scripts présents dans le `package.json` de cette référence : `npm run lint` ; `npm run build` ; `npm run test`. Ils n’ont pas été exécutés dans cette passe documentaire. Consulter la [matrice de vérification](../agents/verification.md) pour distinguer présence d’un script et résultat d’un contrôle.

## Livraison et récupération

Lire le workflow du service à la révision concernée : les workflows examinés comportent un relais vers le dépôt d’infrastructure SiOps. Ne pas en déduire l’image actuellement déployée. Les contrôles après livraison, le rollback et la récupération restent à compléter avec les responsables. Voir [Livrer et exploiter](../exploitation/index.md).

## Sources et couverture restante

[Arbre à la révision examinée](https://github.com/SIGL-SIWEB/intra/tree/6da716908c2b12f5865d56ef3b2039f0ca112421) ; `package.json`, points d’entrée et configuration. Cette fiche est un repère de code, pas une référence complète des règles métier.

À compléter : contrats par endpoint, matrice des droits, modèle de données, exemples métier, vérifications exécutées, versions déployées et procédures de reprise.
