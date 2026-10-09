---
layout: "default"
title: "Stages"
section: "services"
status: "Brouillon"
owner: "SiWeb"
reviewed: "2026-10-09"
reference: "stages_back 5a56cfdd ; main observé f36a160e"
verification: "Lecture des sources ; parcours applicatif non exécuté"
description: "Statut de l’intégration et couverture attendue du service Stages."
---

# Stages

## Rôle et responsabilité

Dépôt [SIGL-SIWEB/stages_back](https://github.com/SIGL-SIWEB/stages_back), dans le périmètre applicatif SiWeb. L’implémentation porte sur les offres de stage, recherche/filtres, contacts et fichiers associés.

## Carte du code et référence

Le commit racine enregistré, `5a56cfdd88bdf7b0a51ac7cf1e980ee8c28e7ae0`, ne contient qu’un README. Il ne permet pas de documenter un lancement exécutable. Une implémentation existe sur le `main` propre au service, observé à `f36a160eb376ad2687a3bbaa78955b20cbbc5746` le 9 octobre 2026. Choisir et intégrer la référence avant de produire une carte détaillée du code.

## Exécution et configuration

Stages n’est lancé ni par les scripts npm racines, ni par la composition complète à la référence examinée. Le port `3006` de l’implémentation observée entre en conflit avec le port hôte de Cassiopée ; le raccordement front/API et le choix du port restent à valider.

## Données et cycle de vie

À documenter à la référence choisie : offres, contacts, fichiers/PDF, initialisation SQL, buckets et préfixes partagés ; comportement d’une suppression partielle SQL/fichier.

## Contrats et autorisation

À documenter : création, recherche, dépôt, suppression individuelle et purge ; droits du déposant et du personnel.

## Parcours métier

La [section métier](../metier/index.md) recense les parcours offres/dépôt/recherche et les règles à valider.

## Tâches et effets externes

Documenter les téléversements et suppressions dans le stockage avant de tester avec une intégration réelle.

## Vérifications

Aucun script exécutable au commit enregistré dans la racine. Relever les commandes et prérequis de la référence implémentée après décision d’intégration ; ne pas copier les commandes d’un autre backend.

## Livraison et récupération

Le workflow du `main` propre à Stages observé le 9 octobre comporte un relais vers SiOps. Cela ne certifie pas son déploiement ni son intégration dans l’environnement commun.

## Sources et couverture restante

[Référence enregistrée](https://github.com/SIGL-SIWEB/stages_back/tree/5a56cfdd88bdf7b0a51ac7cf1e980ee8c28e7ae0) ; [implémentation observée](https://github.com/SIGL-SIWEB/stages_back/tree/f36a160eb376ad2687a3bbaa78955b20cbbc5746). Priorité : confirmer la référence, le port, le raccordement front et les versions déployées.
