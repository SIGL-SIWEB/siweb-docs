---
layout: "default"
title: "Cassiopée"
section: "services"
status: "Brouillon"
owner: "SiWeb"
reviewed: "2026-10-09"
reference: "cassiopee_back 2006b248279a082389487c651d091193836b83d9"
verification: "Lecture des sources ; parcours applicatif non exécuté"
description: "Passerelle SiWeb vers une API SiOps de ressources : applications, bases et endpoints."
---

# Cassiopée

## Rôle et responsabilité

Passerelle SiWeb vers une API SiOps de ressources : applications, bases et endpoints. SiWeb maintient l’application ; SiOps exploite l’infrastructure. La version réellement déployée reste à confirmer.

Dépôt : [SIGL-SIWEB/cassiopee_back](https://github.com/SIGL-SIWEB/cassiopee_back). Référence : `2006b248279a082389487c651d091193836b83d9`.

## Carte du code

`src/index.ts`, `src/app.ts`, `src/controllers/`, `src/services/`, `src/routes/`, `src/config.ts` et `src/keycloak.ts`.

## Exécution et configuration

La commande déclarée de lancement est `npm run dev`, depuis le dépôt du service et après installation/configuration. Lire le [démarrage](../developpement/demarrage.md), la [configuration](../developpement/configuration.md) et la [validation locale](../developpement/validation-locale.md) avant un essai. Les prérequis exacts de runtime restent à valider.

## Données et cycle de vie

L’API amont SiOps gère les ressources ; identifier le contrat, les droits et les effets des mutations.

## Contrats et autorisation

Contrat amont, transmission de jetons, contrôles d’accès et traduction des erreurs à détailler avec SiOps. Voir les premiers repères d’[authentification](../developpement/authentification.md).

## Parcours métier

Consulter les ressources et effectuer les opérations autorisées de création, modification et suppression. La [section métier](../metier/index.md) recense les règles à faire valider.

## Tâches et effets externes

Les mutations touchent une plateforme externe ; utiliser une cible de test pour les vérifier.

## Vérifications

Scripts présents dans le `package.json` de cette référence : `npm run lint` ; `npm run build` ; `npm run test`. Ils n’ont pas été exécutés dans cette passe documentaire. Consulter la [matrice de vérification](../agents/verification.md) pour distinguer présence d’un script et résultat d’un contrôle.

## Livraison et récupération

Lire le workflow du service à la révision concernée : les workflows examinés comportent un relais vers le dépôt d’infrastructure SiOps. Ne pas en déduire l’image actuellement déployée. Les contrôles après livraison, le rollback et la récupération restent à compléter avec les responsables. Voir [Livrer et exploiter](../exploitation/index.md).

## Sources et couverture restante

[Arbre à la révision examinée](https://github.com/SIGL-SIWEB/cassiopee_back/tree/2006b248279a082389487c651d091193836b83d9) ; `package.json`, points d’entrée et configuration. Cette fiche est un repère de code, pas une référence complète des règles métier.

À compléter : contrats par endpoint, matrice des droits, modèle de données, exemples métier, vérifications exécutées, versions déployées et procédures de reprise.
