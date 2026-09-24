---
layout: default
---

# Contribuer au projet

## Modifier un service

Les répertoires de services sont des sous-modules : chaque service possède son historique, ses dépendances et ses vérifications. Faire la modification dans le dépôt du service, exécuter ses contrôles documentés, puis intégrer la révision voulue en mettant à jour le pointeur du sous-module dans `local-environment`. Une modification non poussée dans le dépôt du service ne peut pas être récupérée par les autres contributeurs.

Le front `intra` suit la même règle. Les commandes de test, lint et build varient selon le dépôt ; vérifier son `package.json` et son README plutôt que de supposer qu'une commande racine les exécute tous.

## Maintenir la documentation

`local-environment` contient la vue d'ensemble et les procédures transversales. Lorsqu'une commande, une dépendance entre services ou une procédure change, mettre à jour la page correspondante dans la même pull request. Pour un contrat ou un modèle propre à un service, modifier d'abord la documentation du service et ajouter ici un lien ou un résumé utile à l'intégration.

Les pages publiées sur le site sont choisies explicitement par `scripts/stage-docs-site.py`. Les plans et spécifications de `docs/superpowers/` sont des archives de travail ; ils ne sont pas publiés. Après intégration sur `main`, `.github/workflows/publish-docs.yml` vérifie les pages puis synchronise le dépôt public `SIGL-SIWEB/siweb-docs`. Son workflow Pages construit et déploie le site. Ce dépôt ne doit pas être édité à la main. La synchronisation utilise une clé de déploiement limitée à ce dépôt public, conservée dans les secrets GitHub Actions du dépôt source.

Avant de proposer une modification documentaire, exécuter le validateur de copie et de liens :

```bash
python3 scripts/stage-docs-site.py /tmp/siweb-docs-check
```

Cette commande est exécutée depuis la racine du dépôt source. Elle ne publie rien ; elle prépare seulement les pages autorisées dans le dossier indiqué.

Sources vérifiées : `.gitmodules`, `package.json` et le workflow documentaire du dépôt source.

[Retour à l'index](../index.md)
