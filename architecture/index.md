---
layout: "default"
title: "Architecture"
section: "architecture"
status: "Brouillon"
owner: "SiWeb"
reviewed: "2026-10-09"
reference: "local-environment 571938d ; sources examinées le 2026-10-09"
verification: "Lecture des sources ; parcours applicatif non exécuté"
description: "Comprendre les frontières du système, ses dépendances et ses données."
---

# Architecture

Comprendre les frontières du système, ses dépendances et ses données.

## Disponible

- [Services et dépendances](services.md)

## Chapitres à rédiger

| Chapitre | Couverture attendue | État |
| --- | --- | --- |
| Périmètre SiWeb / SiOps | Mécanismes de livraison par service, environnements et responsabilité du relais. | À rédiger |
| Flux applicatifs | Requêtes représentatives, synchronisation, contrats et défaillances entre services. | À rédiger |
| Propriété et cycle de vie des données | Tables SQL, attributs Keycloak, clés Redis, objets S3, identifiants, conservation et suppression. | À rédiger |
| Permissions | Matrice rôle/action ; visibilité du front et contrôles API. | À rédiger |
| Intégrations | Keycloak/OIDC, MySQL, Redis, MinIO/S3, email/Google, API SiOps et hébergement. | À rédiger |
| Décisions et limites | Décisions actuelles, contraintes et distinction avec les anciens plans. | À rédiger |

## Référence actuelle

La carte existante décrit le développement local et le relais CI observé. Elle ne constitue pas un inventaire de production. Les versions déployées et les détails de plateforme doivent être confirmés avec SiOps.

[Suivre la couverture et l’ordre de travail](../transmission/couverture.md).
