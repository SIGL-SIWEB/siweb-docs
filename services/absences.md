---
layout: "default"
title: "Présences et absences"
section: "services"
status: "Brouillon"
owner: "SiWeb"
reviewed: "2026-10-09"
reference: "absence_back e9206dc7b638d519c1922f8f448cd810915b6883"
verification: "Lecture des sources ; parcours applicatif non exécuté"
description: "API de présence, déclarations et justifications d’absence."
---

# Présences et absences

## Rôle et responsabilité

API de présence, déclarations et justifications d’absence. SiWeb maintient l’application ; SiOps exploite l’infrastructure. La version réellement déployée reste à confirmer.

Dépôt : [SIGL-SIWEB/absence_back](https://github.com/SIGL-SIWEB/absence_back). Référence : `e9206dc7b638d519c1922f8f448cd810915b6883`.

## Carte du code

`src/index.ts`, `src/app.ts`, `src/controllers/`, `src/services/attendanceService.ts`, `src/models/`, `src/redis.ts` et `src/routes/`.

## Exécution et configuration

La commande déclarée de lancement est `npm run dev`, depuis le dépôt du service et après installation/configuration. Lire le [démarrage](../developpement/demarrage.md), la [configuration](../developpement/configuration.md) et la [validation locale](../developpement/validation-locale.md) avant un essai. Les prérequis exacts de runtime restent à valider.

## Données et cycle de vie

SQL et état de présence dans Redis. Décrire les états, la persistance et la reprise après redémarrage.

## Contrats et autorisation

Dépendances Scolarité/Notes déclarées dans la composition ; vérifier les endpoints et permissions par transition d’état. Voir les premiers repères d’[authentification](../developpement/authentification.md).

## Parcours métier

Ouvrir, enregistrer et fermer une présence ; déclarer et justifier une absence. La [section métier](../metier/index.md) recense les règles à faire valider.

## Tâches et effets externes

État Redis et notifications ; documenter les échéances, destinataires et reprises.

## Vérifications

Scripts présents dans le `package.json` de cette référence : `npm run lint` ; `npm run build` ; `npm run test`. Ils n’ont pas été exécutés dans cette passe documentaire. Consulter la [matrice de vérification](../agents/verification.md) pour distinguer présence d’un script et résultat d’un contrôle.

## Livraison et récupération

Lire le workflow du service à la révision concernée : les workflows examinés comportent un relais vers le dépôt d’infrastructure SiOps. Ne pas en déduire l’image actuellement déployée. Les contrôles après livraison, le rollback et la récupération restent à compléter avec les responsables. Voir [Livrer et exploiter](../exploitation/index.md).

## Sources et couverture restante

[Arbre à la révision examinée](https://github.com/SIGL-SIWEB/absence_back/tree/e9206dc7b638d519c1922f8f448cd810915b6883) ; `package.json`, points d’entrée et configuration. Cette fiche est un repère de code, pas une référence complète des règles métier.

À compléter : contrats par endpoint, matrice des droits, modèle de données, exemples métier, vérifications exécutées, versions déployées et procédures de reprise.
