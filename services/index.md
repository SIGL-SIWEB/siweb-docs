---
layout: "default"
title: "Services"
section: "services"
status: "Brouillon"
owner: "SiWeb"
reviewed: "2026-10-09"
reference: "local-environment 571938d ; sources examinées le 2026-10-09"
verification: "Lecture des sources ; parcours applicatif non exécuté"
description: "Le catalogue des applications et de l’environnement commun."
---

# Services

Dix applications sont identifiées dans le périmètre SiWeb. Leur présence dans ce catalogue ne certifie pas un déploiement de production. Les premières fiches décrivent les sources et leurs limites.

## Applications

| Fiche | Dépôt | Documentation |
| --- | --- | --- |
| [Intra](intra.md) | `intra` | Brouillon |
| [Scolarité](scolarite.md) | `scolarite_back` | Brouillon |
| [Notes et PAE](notes.md) | `note_back` | Brouillon |
| [Présences et absences](absences.md) | `absence_back` | Brouillon |
| [Syllabus](syllabus.md) | `syllabus_back` | Brouillon |
| [Stages](stages.md) | `stages_back` | Brouillon |
| [Yearbook](yearbook.md) | `yearbook_back` | Brouillon |
| [Annuaire et newsletter](annuaire.md) | `annuaire` | Brouillon |
| [Cassiopée](cassiopee.md) | `cassiopee_back` | Brouillon |
| [Site vitrine](site-vitrine.md) | `site-vitrine` | Brouillon |

## Environnement et dépendances

L’[environnement commun](local-environment.md) coordonne les sous-modules et les lanceurs. La [carte des services](../architecture/services.md) décrit les ports et modes disponibles. Keycloak, SQL, Redis, stockage, email/Google et plateforme SiOps sont des sujets partagés de la [section architecture](../architecture/index.md).

## Format des fiches

Chaque fiche doit couvrir : rôle/responsabilités, carte du code, exécution/configuration, données, contrats/droits, parcours métier, tâches/effets externes, vérifications, livraison/récupération et sources/limites.

Le statut de références historiques telles que `yearbook-back` et les réservations reste à confirmer dans l’inventaire privé. Elles ne sont pas présentées ici comme applications actives.
