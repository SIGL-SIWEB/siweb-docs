---
layout: "default"
title: "Maintenir et publier la documentation"
section: "transmission"
status: "Brouillon"
owner: "SiWeb"
reviewed: "2026-10-09"
reference: "local-environment 571938d ; sources examinées le 2026-10-09"
verification: "Lecture des sources ; parcours applicatif non exécuté"
description: "Modifier, vérifier, publier et récupérer la documentation."
---

# Maintenir et publier la documentation

## Modifier au bon endroit

Éditer `local-environment/docs/` dans le dépôt privé. Le dépôt public `SIGL-SIWEB/siweb-docs` est un miroir de publication ; il ne doit pas recevoir de modifications manuelles des chapitres.

Pour une page existante, corriger le texte et les métadonnées dans la même contribution que le changement applicatif. Pour une nouvelle page publique, relire le contenu, l’ajouter à l’allowlist de `scripts/stage-docs-site.py`, puis à son groupe dans `docs/_data/navigation.json`.

## Navigation et métadonnées

La navigation JSON est lue par Jekyll et validée avec la bibliothèque standard Python. Chaque chapitre publié, sauf l’accueil, apparaît une seule fois. Les chemins `path` désignent les sources Markdown ; `url` désigne le résultat Jekyll (`.html`, ou `/section/` pour un index). Voir la [documentation Jekyll des données](https://jekyllrb.com/docs/datafiles/).

Conserver les chemins des pages existantes. Les assets et liens du layout utilisent le filtre [relative_url](https://jekyllrb.com/docs/liquid/filters/) pour fonctionner sous `/siweb-docs`.

Les métadonnées de chaque chapitre indiquent : `title`, `section`, `status`, `owner`, `reviewed`, `reference` et `verification`. Mettre à jour la preuve de vérification, pas seulement la date. Les sujets non écrits restent des lignes **À rédiger** sur les pages de section, sans lien vers un fichier absent.

## Vérifier avant publication

Depuis la racine du dépôt source :

```bash
python3 -m unittest discover -s scripts -p 'test_*.py' -v
python3 scripts/stage-docs-site.py /tmp/siweb-docs-check
```

Le staging contrôle les fichiers autorisés, leurs liens locaux, la navigation et les références de templates/assets. Il ne publie rien. Vérifier ensuite le rendu Jekyll et ses liens sous le base path ; contrôler une page longue et le menu sur écran étroit.

## Chaîne de publication

1. Ouvrir une PR de documentation dans `local-environment` et attendre les contrôles.
2. Intégrer la modification sur `main` après revue.
3. `publish-docs.yml` prépare le sous-ensemble autorisé, vérifie la révision source et synchronise le miroir public.
4. `pages.yml` dans `siweb-docs` construit Jekyll et déploie GitHub Pages.
5. Contrôler l’accueil, la navigation et les pages modifiées sur le [site public](https://sigl-siweb.github.io/siweb-docs/).

Une branche seule ne met pas à jour Pages. Le pipeline documentaire est distinct du déploiement des applications.

## En cas d’échec

Consulter d’abord le workflow source : fichier absent, lien vers une page privée, navigation incohérente ou problème de synchronisation. S’il réussit, consulter le workflow Pages du miroir : construction Jekyll puis déploiement. Corriger dans la source et republier ; éviter une correction manuelle du miroir qui serait écrasée à la prochaine synchronisation.

Pour revenir à une version documentaire précédente, préparer une PR qui rétablit les changements concernés dans la source, passer les contrôles et republier. Ne pas rétablir les changements applicatifs indépendants. Les problèmes d’accès à la publication se traitent avec les responsables du dépôt et les procédures privées.

## Ce qui reste privé

Inventaire détaillé, feuille de route interne, proposition d’architecture, anciens plans et procédures d’accès production ne font pas partie de l’allowlist publique. Ne pas copier de credentials ou de valeurs réelles de `.env` dans les chapitres ; indiquer leur emplacement géré.
