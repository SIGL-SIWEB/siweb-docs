---
layout: "default"
title: "Environnement commun"
section: "services"
status: "Brouillon"
owner: "SiWeb"
reviewed: "2026-10-09"
reference: "local-environment 571938d ; sources examinées le 2026-10-09"
verification: "Lecture des sources ; parcours applicatif non exécuté"
description: "Sous-modules, compositions et coordination du développement."
---

# Environnement commun

## Rôle et responsabilité

`local-environment` rassemble les révisions des services, les scripts de démarrage, les compositions locales et la source documentaire. Chaque sous-module reste un dépôt indépendant.

## Carte du code

`.gitmodules`, `package.json`, `docker-compose.yml`, `docker-compose.all.yml`, `docs/`, `scripts/` et `.github/workflows/` sont les principaux points d’entrée.

## Exécution et configuration

Le [démarrage](../developpement/demarrage.md) distingue npm, Docker et lancement séparé d’Annuaire. Stages n’est pas exécutable au pointeur examiné ; site-vitrine est développé séparément. La [configuration](../developpement/configuration.md) explique les dépendances absentes des compositions.

## Données et cycle de vie

MySQL et Redis sont déclarés dans la composition. Les SQL d’initialisation ne sont pas certifiés synthétiques. Décrire les volumes, l’initialisation et les données de test avant un essai depuis un volume vide.

## Contrats et autorisation

La racine coordonne les versions mais n’est pas une API ni un fournisseur d’identité. Voir la [carte des services](../architecture/services.md) et l’[authentification](../developpement/authentification.md).

## Parcours métier

Choisir les composants nécessaires au parcours ; suivre la [validation locale](../developpement/validation-locale.md).

## Tâches et effets externes

Les lanceurs démarrent les services et leurs éventuelles tâches ; un script racine ne neutralise pas les emails, les timers ou les mutations amont.

## Vérifications

La racine ne lance pas tous les tests applicatifs. Les scripts documentaires se vérifient avec `python3 -m unittest discover -s scripts -p 'test_*.py' -v` et le [validateur de publication](../transmission/maintenir-documentation.md).

## Livraison et récupération

[Contribuer](../developpement/contribution.md) explique les pointeurs de sous-module. Le workflow de promotion ouvre des PR, sans les fusionner ni déployer. La publication documentaire suit une [chaîne distincte](../transmission/maintenir-documentation.md).

## Sources et couverture restante

Référence applicative examinée : [571938d](https://github.com/SIGL-SIWEB/local-environment/tree/571938d425472227e11d006f141de4b1120cf948). Confirmer les versions réellement déployées, les configurations et l’exercice de démarrage. Les révisions plus récentes de CI doivent être examinées avant une livraison applicative.
