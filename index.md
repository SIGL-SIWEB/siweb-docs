---
layout: "default"
title: "Documentation SiWeb"
section: "accueil"
status: "Brouillon"
owner: "SiWeb"
reviewed: "2026-10-09"
reference: "local-environment 571938d ; sources examinées le 2026-10-09"
verification: "Lecture des sources ; parcours applicatif non exécuté"
description: "Le point de départ pour les équipes et les agents qui reprennent SiWeb."
---

# Documentation SiWeb

Comprendre le projet, reprendre une fonctionnalité et préparer la prochaine équipe. Cette documentation rassemble l'intranet, ses API et le site vitrine de la majeure SIGL.

<div class="reading-paths">
  <a href="{{ '/commencer/' | relative_url }}"><strong>Je rejoins SiWeb</strong><span>Comprendre le projet, préparer les accès et lancer un premier parcours.</span></a>
  <a href="{{ '/developpement/' | relative_url }}"><strong>Je modifie une fonctionnalité</strong><span>Trouver le service, lire ses contrats et vérifier le changement.</span></a>
  <a href="{{ '/exploitation/depannage.html' | relative_url }}"><strong>Je diagnostique un problème</strong><span>Contrôler le service, ses dépendances et le relais vers SiOps.</span></a>
</div>

## Explorer la documentation

| Section | Ce que vous y trouverez |
| --- | --- |
| [Commencer](commencer/index.md) | Projet, vocabulaire, configuration, authentification et démarrage. |
| [Architecture](architecture/index.md) | Carte des services, dépendances, responsabilités et fondations à documenter. |
| [Services](services/index.md) | Dix applications et l'environnement commun, avec une fiche par composant. |
| [Parcours métier](metier/index.md) | Règles et parcours à reconstruire avec les responsables métier. |
| [Développer](developpement/index.md) | Contribution, sous-modules, commandes et vérification. |
| [Livrer et exploiter](exploitation/index.md) | Dépannage, livraison et procédures de récupération à compléter. |
| [Agents](agents/index.md) | Ordre de lecture, frontières des dépôts et preuves attendues. |
| [Transmission](transmission/index.md) | Couverture documentaire, passation et maintien de la documentation. |

## Une référence en cours de reconstruction

Les premières fiches s'appuient sur la lecture du code. Les chapitres **Brouillon** ne certifient ni les versions en production, ni un démarrage applicatif réussi. Les sujets **À rédiger** sont recensés sur chaque page de section et dans le [suivi de couverture](transmission/couverture.md).

SiWeb développe les applications ; SiOps exploite l'infrastructure. Le site vitrine appartient aussi à SiWeb, avec un dépôt et une livraison distincts de l'intranet.

## Source de vérité

Les modifications se font dans le dépôt privé `SIGL-SIWEB/local-environment`, sous `docs/`. GitHub Pages est sa copie de lecture. L'inventaire de travail, la feuille de route interne et les procédures d'accès à la production restent dans le dépôt privé. [Comment maintenir et publier ces pages](transmission/maintenir-documentation.md).
