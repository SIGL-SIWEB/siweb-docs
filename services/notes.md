---
layout: "default"
title: "Notes et PAE"
section: "services"
status: "Brouillon"
owner: "SiWeb"
reviewed: "2026-10-09"
reference: "note_back 72754d94bed4727e802a2fc74cf302c18d6b8375"
verification: "Lecture des sources ; parcours applicatif non exécuté"
description: "API des notes, statistiques, classements et parcours PAE."
---

# Notes et PAE

## Rôle et responsabilité

API des notes, statistiques, classements et parcours PAE. SiWeb maintient l’application ; SiOps exploite l’infrastructure. La version réellement déployée reste à confirmer.

Dépôt : [SIGL-SIWEB/note_back](https://github.com/SIGL-SIWEB/note_back). Référence : `72754d94bed4727e802a2fc74cf302c18d6b8375`.

## Carte du code

`src/server.ts`, `src/app.ts`, `src/controllers/`, `src/services/`, `src/models/`, `src/repositories/` et `src/authentication.ts`.

## Exécution et configuration

La commande déclarée de lancement est `npm run dev`, depuis le dépôt du service et après installation/configuration. Le script `dev` de Notes force `NODE_ENV=production` dans cette référence. Lire le [démarrage](../developpement/demarrage.md), la [configuration](../developpement/configuration.md) et la [validation locale](../developpement/validation-locale.md) avant un essai. Les prérequis exacts de runtime restent à valider.

## Données et cycle de vie

Données de notes et PAE, reliées aux personnes et cours. Les formules, relations et sources de vérité restent à décrire.

## Contrats et autorisation

Examiner les contrôleurs et la sécurité TSOA. Le mode development de la sécurité générée peut contourner l’authentification : il ne valide pas les droits. Voir les premiers repères d’[authentification](../developpement/authentification.md).

## Parcours métier

Saisie/import/export des notes, classements et PAE ; les coefficients, échéances et cas limites demandent une validation métier. La [section métier](../metier/index.md) recense les règles à faire valider.

## Tâches et effets externes

`src/pae-auto-duplication.cron.ts`, `src/pae-reminder.cron.ts` et `src/send-reminder-mails.cron.ts`. Désactiver la duplication ne désactive pas tous les rappels ; `MAIL_RECEIVERS` ne redirige pas tous les envois.

## Vérifications

Scripts présents dans le `package.json` de cette référence : `npm run lint` ; `npm run build` ; `npm run test`. Ils n’ont pas été exécutés dans cette passe documentaire. Consulter la [matrice de vérification](../agents/verification.md) pour distinguer présence d’un script et résultat d’un contrôle.

## Livraison et récupération

Lire le workflow du service à la révision concernée : les workflows examinés comportent un relais vers le dépôt d’infrastructure SiOps. Ne pas en déduire l’image actuellement déployée. Les contrôles après livraison, le rollback et la récupération restent à compléter avec les responsables. Voir [Livrer et exploiter](../exploitation/index.md).

## Sources et couverture restante

[Arbre à la révision examinée](https://github.com/SIGL-SIWEB/note_back/tree/72754d94bed4727e802a2fc74cf302c18d6b8375) ; `package.json`, points d’entrée et configuration. Cette fiche est un repère de code, pas une référence complète des règles métier.

À compléter : contrats par endpoint, matrice des droits, modèle de données, exemples métier, vérifications exécutées, versions déployées et procédures de reprise.
