---
layout: "default"
title: "Vue d’ensemble du projet"
section: "commencer"
status: "Brouillon"
owner: "SiWeb"
reviewed: "2026-10-09"
reference: "local-environment 571938d ; sources examinées le 2026-10-09"
verification: "Lecture des sources ; parcours applicatif non exécuté"
description: "Le produit, ses utilisateurs et les responsabilités des équipes."
---

# Vue d’ensemble du projet

SiWeb développe les applications de la majeure SIGL : un intranet, des API par domaine et un site public de présentation. `local-environment` rassemble les révisions de plusieurs dépôts pour le développement commun.

## Applications et utilisateurs

L'intranet présente des parcours de scolarité, notes/PAE, présences/absences, syllabus, stages, yearbook, annuaire/newsletter et ressources Cassiopée. Les rôles présents dans le front incluent étudiants, enseignants, représentants, responsables de majeure, administrateurs et intervenants PAE. La matrice complète des droits et la validation métier restent à documenter.

Le site vitrine présente la majeure en français et en anglais, dans un dépôt Angular distinct.

## Responsabilités

| Équipe | Responsabilité confirmée |
| --- | --- |
| SiWeb | Développement des applications, dont site-vitrine ; code, contrats, vérifications et documentation applicative. |
| SiOps | Exploitation de l'infrastructure ; validation des paramètres, accès et versions réellement déployées. |

La [carte des services](../architecture/services.md) explique le relais observé dans les workflows. Les responsables individuels et référents métier restent à nommer.

## Où trouver l'information

- [Services](../services/index.md) : dépôt et fiche du composant.
- [Architecture](../architecture/index.md) : dépendances et sujets partagés.
- [Parcours métier](../metier/index.md) : comportement attendu et règles à faire valider.
- [Transmission](../transmission/index.md) : état de la reprise documentaire et passation.
