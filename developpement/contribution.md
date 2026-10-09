---
layout: "default"
title: "Contribuer au projet"
section: "developpement"
status: "Brouillon"
owner: "SiWeb"
reviewed: "2026-10-09"
reference: "local-environment 571938d ; services aux commits enregistrés"
verification: "Lecture des sources ; parcours applicatif non exécuté"
---

# Contribuer au projet

## Modifier un service

Les répertoires de services sont des sous-modules : chaque service possède son historique, ses dépendances et ses vérifications. Faire la modification dans le dépôt du service, exécuter ses contrôles documentés, puis intégrer la révision voulue en mettant à jour le pointeur du sous-module dans `local-environment`. Une modification non poussée dans le dépôt du service ne peut pas être récupérée par les autres contributeurs.

Le front `intra` suit la même règle. Les commandes de test, lint et build varient selon le dépôt ; vérifier son `package.json` et son README plutôt que de supposer qu'une commande racine les exécute tous.

Un changement de pointeur doit être accompagné d'une vérification des contrats, de la configuration et des commandes communes. La présence d'un service dans un checkout de travail ne signifie pas que `local-environment/main` enregistre déjà cette version.

## Livrer une application et passer le relais à SiOps

SiWeb maintient le code, les tests, les Dockerfiles et les contrats de configuration. SiOps exploite l'infrastructure. Pour une livraison, documenter l'image produite, les variables requises, les migrations éventuelles, les contrôles applicatifs et les conditions de retour arrière, puis confirmer avec SiOps le mécanisme de déploiement de l'environnement concerné.

Les workflows des services aux commits enregistrés et le workflow réutilisable du dépôt racine n'ont pas tous le même périmètre. Vérifier celui effectivement appelé par le service ; ne pas déduire de la présence du workflow partagé que tous les services l'utilisent. Les détails de la plateforme et des accès restent dans la documentation privée appropriée.

## Maintenir la documentation

`local-environment` contient la vue d'ensemble et les procédures transversales. Lorsqu'une commande, une dépendance entre services ou une procédure change, mettre à jour la page correspondante dans la même pull request. Pour un contrat ou un modèle propre à un service, modifier d'abord la documentation du service et ajouter ici un lien ou un résumé utile à l'intégration.

Les pages publiées sur le site sont choisies explicitement par `scripts/stage-docs-site.py`. Les plans et spécifications de `docs/superpowers/` sont des archives de travail ; ils ne sont pas publiés. Après intégration sur `main`, `.github/workflows/publish-docs.yml` vérifie les pages puis synchronise le dépôt public `SIGL-SIWEB/siweb-docs`. Son workflow Pages construit et déploie le site. Ce dépôt ne doit pas être édité à la main. La synchronisation utilise une clé de déploiement limitée à ce dépôt public, conservée dans les secrets GitHub Actions du dépôt source.

Le README privé donne accès à l'inventaire, à la feuille de route et aux procédures de production non publiées. Ajouter une page de référence publique exige de modifier ensemble la liste de publication et la navigation après revue de son contenu. Un lien local depuis une page publiée doit lui-même cibler une page autorisée.

Avant de proposer une modification documentaire, exécuter le validateur de copie et de liens :

```bash
python3 scripts/stage-docs-site.py /tmp/siweb-docs-check
python3 -m unittest discover -s scripts -p 'test_*.py' -v
```

Cette commande est exécutée depuis la racine du dépôt source. Elle ne publie rien ; elle prépare seulement les pages autorisées dans le dossier indiqué.

Sources vérifiées à `571938d` : `.gitmodules`, `package.json`, scripts de validation, workflows documentaire et partagé du dépôt source, workflows des services aux commits enregistrés.

[Retour à l'index](../index.md)
