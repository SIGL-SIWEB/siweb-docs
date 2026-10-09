---
layout: "default"
title: "Vérifier une contribution"
section: "agents"
status: "Brouillon"
owner: "SiWeb"
reviewed: "2026-10-09"
reference: "local-environment 571938d ; sources examinées le 2026-10-09"
verification: "Lecture des sources ; parcours applicatif non exécuté"
description: "Les commandes présentes et les preuves attendues par dépôt."
---

# Vérifier une contribution

## Commandes déclarées, résultats à distinguer

Cette table relève les scripts existants à la référence examinée. Elle ne rapporte pas un succès d’exécution. Choisir les checks utiles au changement, installer le runtime/dependencies compatibles et lire le script avant de le lancer. Les tests navigateur peuvent nécessiter Chrome et rester en mode surveillance.

| Dépôt | Référence | Scripts déclarés |
| --- | --- | --- |
| `intra` | `6da71690` | `npm run lint` ; `npm run build` ; `npm run test` |
| `note_back` | `72754d94` | `npm run lint` ; `npm run build` ; `npm run test` |
| `absence_back` | `e9206dc7` | `npm run lint` ; `npm run build` ; `npm run test` |
| `scolarite_back` | `5978411d` | `npm run lint` ; `npm run build` ; `npm run test` |
| `syllabus_back` | `99355211` | `npm run lint` ; `npm run build` ; `npm run test` |
| `yearbook_back` | `3d617e8f` | `npm run lint` ; `npm run build` ; `npm run test` |
| `annuaire` | `899c50c7` | `npm run lint` ; `npm run build` ; `npm run test` |
| `cassiopee_back` | `2006b248` | `npm run lint` ; `npm run build` ; `npm run test` |
| `stages_back` | `5a56cfdd` | Aucun package exécutable à ce pointeur. |
| `site-vitrine` | `8028e4ff` | `npm run lint` ; `npm run build` ; `npm run test` ; `npm run e2e` |

## Préparer l’environnement de vérification

Lire la [configuration](../developpement/configuration.md) et la [validation locale](../developpement/validation-locale.md). Les SQL racines ne sont pas certifiés synthétiques ; `MAIL_RECEIVERS` n’est pas un override global ; certains timers et initialisations sont activés par le lancement du service. Séparer les tests de contrat, d’autorisation et d’intégration selon leurs prérequis.

## Documenter la preuve

Pour chaque contrôle : noter le dépôt/commit, la commande exacte, les prérequis, les dépendances simulées ou réelles, le résultat et les limites. Un build ne valide pas un parcours métier ; un test avec bypass d’authentification ne valide pas les permissions.

## Vérifier la documentation

La [procédure de maintien](../transmission/maintenir-documentation.md) décrit la copie autorisée, les liens et la construction Pages. Exécuter ces checks quand les chapitres, menus ou assets changent.
