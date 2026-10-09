---
layout: "default"
title: "Site vitrine"
section: "services"
status: "Brouillon"
owner: "SiWeb"
reviewed: "2026-10-09"
reference: "site-vitrine 8028e4ff ; local-environment 571938d"
verification: "Lecture des sources ; parcours applicatif non exécuté"
---

# Site vitrine

`SIGL-SIWEB/site-vitrine` fait partie du périmètre SiWeb, confirmé par l'équipe le 9 octobre 2026. Référence examinée : `main` au commit `8028e4ff7026d81bd5f3c75a1ce181cbd7ecdad9`. Ce dépôt est référencé dans `.gitmodules`, mais n'a pas de pointeur enregistré dans la référence racine `571938d` ; il se développe séparément.

## Rôle et responsabilité

Site public de présentation de la majeure SIGL, avec contenu français/anglais. Le code utilise Angular 4, Angular CLI `1.7.4`, TypeScript `~2.2.0` et `ng2-translate`. Il ne dépend pas des API intranet ni de Keycloak dans les sources examinées. Certains éléments, notamment un widget social et le formulaire de signalement, ont des appels externes.

Le README indique Node `>=12.13.0`. C'est un prérequis historique, pas une preuve de compatibilité avec toutes les versions supérieures. Le runtime permettant de reproduire installation, build et tests reste à valider et à consigner. Le lockfile est au format version 1.

## Carte du code et modifications courantes

| Chemin | Rôle / point d'entrée |
| --- | --- |
| `src/main.ts`, `src/app/app.module.ts` | Bootstrap Angular et modules |
| `src/app/homepage.component.ts`, `.html`, `.css` | Page principale, choix de langue et actions du formulaire |
| `src/app/app.routes.ts`, `src/app/modules/` | Route `/modules` et son contenu |
| `src/app/navbar/` | Navigation |
| `src/assets/i18n/fr.json`, `en.json` | Traductions ; conserver la correspondance des clés dans les deux langues |
| `src/assets/` et `src/styles.css` | Images, ressources et styles communs |
| `src/app/services/issues.service.ts` | Soumission externe du formulaire ; vérifier sa configuration avant un essai |
| `src/environments/environment*.ts`, `.angular-cli.json` | Sélection de l'environnement et sortie de compilation `dist/` |
| `karma.conf.js`, `src/**/*.spec.ts`, `e2e/`, `protractor.conf.js` | Tests unitaires navigateur et end-to-end |

Le choix initial de langue utilise celle du navigateur lorsqu'elle est supportée, sinon l'anglais. Pour une modification de texte, vérifier français et anglais, les liens, les images et la mise en page. Une nouvelle route doit aussi être testée après rechargement direct sur l'hébergement choisi.

## Exécution et configuration

Dans un checkout séparé, choisir la révision examinée :

```bash
git clone git@github.com:SIGL-SIWEB/site-vitrine.git
cd site-vitrine
git checkout 8028e4ff7026d81bd5f3c75a1ce181cbd7ecdad9
npm install
npm run start
```

Le script `start` appelle `ng serve` ; le README et les tests end-to-end utilisent `http://localhost:4200`. L'installation et le lancement n'ont pas été exécutés dans cette passe. Après choix d'un runtime compatible, vérifier également l'éventuelle modification du lockfile produite par npm.

## Vérifications

Les scripts ci-dessous sont déclarés, mais leur réussite avec un runtime compatible reste à vérifier.

| Commande du package | Comportement déclaré |
| --- | --- |
| `npm run build` | `ng build`, sortie `dist/` |
| `npm run build -- --env=prod` | Sélection de l'environnement Angular `prod` déclaré ; vérifier le résultat et les paramètres réels de l'hébergement |
| `npm run lint` | `ng lint`, configuration TSLint |
| `npm run test` | `ng test`, Karma/Chrome ; la configuration active la surveillance continue |
| `npm run e2e` | `ng e2e`, Protractor/Chrome |

Le Dockerfile copie un `dist/` déjà compilé dans nginx. Il n'installe pas les dépendances et ne construit pas Angular ; il ne suffit donc pas de construire cette image pour compiler le site.

## Données et cycle de vie

Les contenus, traductions et médias examinés sont versionnés sous `src/`. Cartographier les informations transmises par le formulaire et leur traitement dans l’intégration externe ; les paramètres de cette intégration restent à confirmer.

## Contrats et autorisation

Le formulaire passe par `src/app/services/issues.service.ts`. Faire confirmer le contrat et le mode d’accès à son endpoint de test ; aucune valeur d’accès issue du code ne doit être reprise ici. Le site ne consomme pas Keycloak dans les sources examinées.

## Parcours métier

Parcours à vérifier : consulter la présentation, changer de langue, ouvrir `/modules` directement et soumettre le formulaire vers une intégration de test. Faire valider les contenus par leur responsable ; la [section métier](../metier/index.md) recense cette couverture.

## Tâches et effets externes

Le widget social et la soumission du formulaire comportent des appels externes. Le catalogue complet de ces appels, leur configuration et leurs erreurs restent à documenter. Ne pas utiliser une intégration réelle pour un essai de formulaire.

## Livraison et récupération

Le README indique Netlify à `sigl.epita.fr`, avec une ancienne version GitHub Pages, et `CNAME` contient `sigl.epita.fr`. Aucun workflow GitHub Actions ni fichier de pipeline de déploiement n'est présent dans l'arbre de cette référence examinée. Ces éléments ne certifient pas la configuration actuelle du compte Netlify ou le code réellement publié.

SiWeb maintient le code et les contenus. Faire confirmer avec SiOps les responsables d'accès au compte d'hébergement et au DNS, la branche liée, la version Node, la commande de build, le dossier publié, les règles de routage, le contrôle après publication et le retour arrière. Ce relais diffère de la livraison des API vers le dépôt d'infrastructure SiOps.

## Sources et couverture restante

- Valider un runtime et exécuter installation, build, lint et tests avant de certifier la reproductibilité.
- Confirmer les paramètres de build, la branche et la révision publiées sur l'hébergement.
- Vérifier le propriétaire, la configuration et le comportement du formulaire externe ; ne pas soumettre un essai vers une intégration réelle sans endpoint de test.
- Tester les deux langues, les médias, le responsive et le rechargement de `/modules`.
- Nommer le responsable des contenus et le relecteur des changements éditoriaux.

Sources : [README à la révision examinée](https://github.com/SIGL-SIWEB/site-vitrine/blob/8028e4ff7026d81bd5f3c75a1ce181cbd7ecdad9/README.md), `package.json`, `.angular-cli.json`, Dockerfile, source Angular et configurations de tests au même commit. L'hébergement est décrit d'après ces sources, sans opération de publication ni vérification du compte fournisseur.

[Retour à l'index](../index.md)
