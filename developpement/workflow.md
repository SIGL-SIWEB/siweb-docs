---
layout: "default"
title: "Flow de travail"
section: "developpement"
status: "Brouillon"
owner: "PO + tech lead SiWeb"
reviewed: "2026-11-04"
reference: "Flow décidé le 2026-11-02, amendé le 2026-11-04 (statut Validé PO, test en préprod, projets) ; espace Linear SIWeb-SIGL, équipe SIWEB"
verification: "Statuts, labels, template et cycles vérifiés dans Linear ; automatisations GitHub actives selon le PO (2026-11-04), mais le déplacement des seuls tickets cités vers Prod n'est pas encore exercé ; premier cycle non encore exercé"
description: "Le parcours d'un ticket, de l'idée à la production, avec Linear et un agent."
---

# Flow de travail

Chaque changement part d'un ticket Linear et le suit jusqu'en production. Les développeurs travaillent avec ou sans agent (Claude Code, Codex) ; l'auteur reste responsable du code produit. Ce flow complète les règles de [contribution](contribution.md) : ticket prêt, définition de terminé et contrôles par dépôt.

## Prérequis : Linear connecté

Chaque membre a un compte dans l'espace Linear **SIWeb-SIGL** et y connecte son agent par le serveur MCP de Linear (`https://mcp.linear.app/mcp`). C'est obligatoire : sans cette connexion, l'agent ne peut ni lire le ticket ni tracer son travail.

- **Claude Code** : le fichier `.mcp.json` du dépôt déclare le serveur `linear`. À la première ouverture du projet, accepter le serveur puis s'authentifier avec `/mcp`.
- **Codex** : `codex mcp add linear --url https://mcp.linear.app/mcp`, puis `codex mcp login linear`.

En début de session, l'agent appelle l'outil `whoami` du serveur Linear et vérifie que l'espace connecté est **SIWeb-SIGL**. Sinon, il s'arrête et indique comment se connecter. Une personne connectée à plusieurs espaces Linear choisit le serveur relié à SIWeb-SIGL.

## Statuts

| Statut | Signification | Qui l'y met |
| --- | --- | --- |
| Triage | Ticket proposé, pas encore accepté | Création (template « Ticket SiWeb ») |
| Backlog | Accepté et priorisé, pas planifié | PO, au triage |
| Todo | Planifié dans le cycle en cours | PO, à la planification |
| In Progress | En cours de développement | Le développeur ou son agent, au démarrage |
| Bloqué | En attente d'une décision, d'un accès ou d'une autre équipe | Le développeur, avec un commentaire et une relation « blocked by » si possible |
| In Review | PR ouverte vers `dev` | Intégration GitHub |
| Dev env | Fusionné dans `dev`, pas encore en préprod | Intégration GitHub |
| Review PO | En préprod, en attente de validation du PO | Intégration GitHub |
| Validé PO | Testé et validé par le PO, prêt pour la production | Le PO seul ; jamais un agent |
| Prod | Fusionné dans `main` | Intégration GitHub |
| Canceled, Duplicate | Abandonné ou doublon | PO ou auteur, avec un commentaire |

Dev env, Review PO et Validé PO sont des statuts « en cours » : seul Prod compte comme terminé.

## Labels

- **Type** (un seul) : Bug, Feature, Improvement.
- **Service** (un ou plusieurs) : le ou les dépôts touchés, par exemple `intra` et `note_back`.
- **Revue tech lead** : changement sensible au sens de la [contribution](contribution.md) (frontière de service, contrat API, schéma, permissions, nouvelle dépendance de production, configuration de livraison).

## Parcours d'un ticket

### 1. Créer

Tout le monde peut créer un ticket, avec le template **Ticket SiWeb** : problème et utilisateur, exemples d'acceptation, tester en préprod, périmètre, questions ouvertes, vérification. Le ticket arrive en Triage.

L'agent peut aussi créer un ticket en Triage, par exemple pour un bug découvert en codant. Il le lie au ticket en cours et ne l'élargit pas en silence.

### 2. Trier

Le PO traite le Triage : il fixe la priorité (obligatoire), le projet et les labels Type et Service, puis passe le ticket en Backlog. Un ticket ne quitte pas Triage sans projet : chaque chantier du macro-planning a son projet Linear, et « Maintenance et bugs » reçoit ce qui ne relève d'aucun chantier. Un nouveau chantier du macro-planning entraîne la création de son projet, avec l'accord du PO. Sinon il le refuse ou le marque en doublon, avec un commentaire.

### 3. Planifier

Les cycles durent deux semaines. Le lundi de début de cycle, le PO et l'équipe se réunissent 30 minutes : le PO propose des tickets du Backlog, l'équipe s'engage et chacun s'assigne. Les tickets retenus passent en Todo dans le cycle. Un ticket démarré hors planification rejoint automatiquement le cycle en cours.

### 4. Démarrer

Aucun travail sans ticket : toute branche et toute PR portent l'identifiant `SIWEB-NNN`. Si le ticket n'existe pas, il est créé d'abord.

L'agent lit le ticket et vérifie qu'il est prêt : exemples d'acceptation observables, section « Tester en préprod » remplie (compte ou rôle, parcours, résultat attendu), périmètre, questions ouvertes tranchées. **S'il manque quelque chose, il s'arrête**, liste les manques en commentaire Linear et attend que le développeur ou le PO complète.

Si le ticket est prêt, l'agent le passe en In Progress, travaille sur la branche proposée par Linear (`siweb-NNN`) dans le dépôt qui possède le code, et poste un commentaire **Plan** : approche, fichiers et dépôts touchés, vérifications prévues.

La description du ticket reste la référence. Si le plan change, ajouter une section « Mise à jour au plan » datée plutôt que réécrire l'existant.

### 5. Ouvrir la PR vers `dev`

Le titre de la PR contient `SIWEB-NNN`, ce qui la relie au ticket. Avant de demander la revue, l'agent poste un commentaire **Bilan** dans le ticket : changements, commandes de vérification lancées avec leurs résultats, contrôles non exécutés, limites et documentation mise à jour.

Le **tech lead relit les PR vers `dev`**. Un relecteur peut lancer une revue par agent en complément ; l'approbation GitHub reste humaine.

### 6. Mettre en préprod

La promotion `dev` → `preprod` se fait au fil de l'eau : n'importe quel développeur ouvre la PR de promotion, le tech lead la valide. Un ticket ne doit pas attendre en Dev env.

**La description d'une PR `dev` → `preprod` liste tous les tickets qu'elle embarque**, sur une ligne `Tickets : SIWEB-401, SIWEB-402`. Linear ne déplace que les tickets cités dans la branche, le titre ou la description d'une PR. Un ticket oublié reste en Dev env. Pour la PR `preprod` → `main`, la règle est différente : voir l'étape 8. Pour dresser la liste, prendre les tickets en Dev env dont les commits figurent dans le diff de la promotion.

À l'ouverture de la PR `dev` → `preprod`, l'agent commente chaque ticket embarqué pour le PO : ce qu'il faut tester (repris de « Tester en préprod » et des exemples d'acceptation), la PR et les points d'attention.

### 7. Valider

Le PO teste les tickets en Review PO sur la préprod, à partir de leur section « Tester en préprod » et de leurs exemples d'acceptation.

- **Validé** : le PO passe le ticket en Validé PO. Rien ne part en production à ce moment-là.
- **Refusé** : le PO commente ce qui ne va pas et repasse le ticket en In Progress, chez le même développeur. Le correctif suit le même chemin.

### 8. Livrer

La mise en production se fait sur décision du PO, éventuellement un autre jour que la validation, et embarque toutes les fonctionnalités validées.

- Sur demande du PO, l'agent prépare la PR `preprod` → `main`. Si une PR de promotion est déjà ouverte (par exemple par le workflow « Check promotion pull requests »), il complète sa description au lieu d'en ouvrir une autre. Ce workflow ne se lance que sur décision du PO.
- Sa ligne `Tickets :` liste **uniquement** les tickets en Validé PO dont le code figure dans le diff de ce dépôt.
- Pour repérer le code non validé, l'agent prend les tickets dont les commits figurent dans le diff `preprod` → `main` et les compare aux tickets en Validé PO. Si le diff contient du code d'un ticket qui n'est pas en Validé PO (encore en Review PO, refusé et revenu en In Progress, oublié en Dev env) ou du code sans ticket, il le signale au PO avant d'ouvrir ou de compléter la PR. Le PO choisit d'attendre, de valider ce ticket ou d'exclure ce code.
- Le tech lead fusionne la PR ; les tickets cités passent en Prod.

## Automatisations GitHub

L'intégration GitHub de Linear fait avancer les tickets selon la branche cible de leurs PR :

| Événement GitHub | Statut Linear |
| --- | --- |
| PR ouverte vers `dev` | In Review |
| PR fusionnée dans `dev` | Dev env |
| PR de promotion ouverte vers `preprod` ou `main` | Aucun changement |
| PR fusionnée dans `preprod` | Review PO |
| PR fusionnée dans `main` | Prod |

Ces règles se configurent dans les réglages de l'équipe SIWEB (*Workflow*, automatisations des pull requests) : règles par défaut pour `dev`, règles par branche cible pour `preprod` et `main`. Elles ne s'appliquent qu'aux tickets cités dans la PR. Tant qu'elles ne sont pas actives, le développeur ou son agent déplace le ticket à la main.

Validé PO n'a pas d'automatisation : seul le PO met ce statut. La règle « fusionnée dans `main` → Prod » déplace **tout** ticket cité dans la PR, quel que soit son statut ; c'est pourquoi la ligne `Tickets :` d'une PR vers `main` ne cite que des tickets en Validé PO.

## Suivi des projets

À la fin de chaque cycle, l'agent du responsable de chaque projet rédige une *status update* Linear à partir des tickets et des PR du cycle. Le responsable la relit et la publie.

## Ce que l'agent fait dans Linear

| Moment | Action de l'agent |
| --- | --- |
| Début de session | `whoami` : vérifier la connexion à SIWeb-SIGL |
| Avant de coder | Lire le ticket ; s'arrêter et commenter s'il n'est pas prêt |
| Démarrage | Passer en In Progress, commenter le **Plan** |
| Découverte hors périmètre | Créer un ticket en Triage, lié au ticket en cours |
| PR ouverte | Commenter le **Bilan** avec les vérifications réelles |
| Promotion `dev` → `preprod` ouverte | Commenter, sur chaque ticket embarqué, ce que le PO doit tester |
| Promotion `preprod` → `main` demandée par le PO | Lister les tickets en Validé PO ; signaler au PO le code non validé présent dans le diff |
| Fin de cycle | Rédiger la *status update* du projet pour son responsable |

L'agent ne ferme pas un ticket, ne change pas sa priorité et ne modifie pas son périmètre sans accord humain. Il ne met jamais un ticket en Validé PO, n'ouvre pas de promotion vers `main` sans décision du PO, et ne modifie ni projets, ni statuts, ni labels, ni templates Linear sans demande du PO. Il ne recopie jamais de secret ni de valeur de `.env` dans Linear.

[Retour au guide de développement](index.md)
