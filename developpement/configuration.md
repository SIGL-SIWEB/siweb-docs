---
layout: "default"
title: "Configuration et environnements"
section: "commencer"
status: "Brouillon"
owner: "SiWeb"
reviewed: "2026-10-09"
reference: "local-environment 571938d ; services aux commits enregistrés"
verification: "Lecture des sources ; parcours applicatif non exécuté"
---

# Configuration et environnements

Référence : `local-environment` à `571938d`, sous-modules enregistrés, lecture du 9 octobre 2026. Cette page décrit les noms consommés par le code ; les valeurs réelles restent dans le gestionnaire de secrets ou la configuration d'environnement. Elle ne constitue pas un `.env` complet prêt à lancer tous les services.

## Préparer les accès

SiWeb fournit le contrat applicatif : variables, URLs, droits et données nécessaires. SiOps confirme les accès et la configuration de la plateforme. Avant le premier lancement, obtenir l'accès aux dépôts privés, au modèle de configuration de développement, au client/realm Keycloak et aux dépendances du parcours testé. Le README racine désigne Bitwarden comme source des configurations.

Demander une configuration dédiée au développement et des comptes de test. Pour une dépendance non détenue par SiOps, identifier son propriétaire opérationnel avec l'équipe. La page [Authentification](authentification.md) décrit les accès OIDC et les claims attendus ; la [validation locale](validation-locale.md) liste les preuves nécessaires pour certifier un environnement de test.

Chaque service Node reçoit son propre environnement. Les `env_file` de Compose pointent vers les `.env` des services ; les entrées `environment` de Compose remplacent les valeurs correspondantes. Ne pas transposer une configuration Docker telle quelle au lancement Node sur l'hôte.

## Adresse d'un service : hôte, conteneur et navigateur

| Point d'appel | Adresse à utiliser |
| --- | --- |
| Node lancé sur l'hôte vers MySQL/Redis Docker | Adresse/port exposés sur l'hôte, généralement `localhost:3306` et `localhost:6379` |
| Conteneur vers un autre conteneur de la composition | Nom de service Compose et port interne, par exemple `db:3306` ou `scolarite-back:3002` |
| Navigateur vers une API locale | URL accessible depuis le navigateur, par exemple `http://localhost:3002` ; un nom Compose interne n'y est pas résolu |

Le front React lit les `REACT_APP_*` au lancement du serveur de développement ou à la compilation. Modifier ces variables exige de redémarrer le serveur ou de reconstruire le front. Elles sont visibles dans le code livré au navigateur : y placer uniquement la configuration destinée au client.

## Ports et noms de bases

| Service | Variable de port HTTP | Port Node attendu pour le lancement commun | Variable de nom de base |
| --- | --- | ---: | --- |
| Notes | `NOTE_PORT` | 3000 | `DB_NAME` |
| Absences | `PORT` | 3001 | `DB_NAME` |
| Scolarité | `PORT` | 3002 | `DB_NAME_SCOLARITE` |
| Syllabus | `PORT` | 3003 | `DB_NAME_SYLLABUS` |
| Yearbook | `PORT` | 3005 | `DB_NAME` |
| Cassiopée | `PORT` | 3006, à définir pour éviter Yearbook | Pas de configuration SQL dans ce service |
| Annuaire | `PORT` | 1234 | `DB_NAME_ANNUAIRE` est lu par sa configuration ; vérifier l'usage effectif avant de provisionner une base |

`NOTE_PORT` est également utilisé par les autres backends pour appeler Notes. Il n'est pas remplacé par un `PORT` générique dans Notes. Cassiopée utilise `3005` dans Docker, exposé sur `3006` de l'hôte.

Les services SQL lisent aussi `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD` et `DB_DIALECT`. Les noms de variables de base diffèrent : ne pas les uniformiser sans modifier le code. Le SQL racine crée les bases `scolarite`, `siwebNote`, `syllabus` et `yearbook` ; rapprocher les valeurs de la base réellement utilisée par chaque service. Absences et Notes utilisent des tables dans la base initialisée `siwebNote`.

## Configuration du front intranet

| Variables | Usage |
| --- | --- |
| `REACT_APP_KEYCLOACK_AUTHORITY`, `REACT_APP_KEYCLOACK_CLIENT_ID`, `REACT_APP_KEYCLOACK_REDIRECT_URI` | Configuration OIDC ; conserver l'orthographe `KEYCLOACK` utilisée dans le code |
| `REACT_APP_NOTE_API_URL`, `REACT_APP_ABSENCE_API_URL`, `REACT_APP_SCOLARITE_API_URL`, `REACT_APP_SYLLABUS_API_URL` | API métier |
| `REACT_APP_ANNUAIRE_API_URL`, `REACT_APP_YEARBOOK_API_URL`, `REACT_APP_CASSIOPEE_API_URL` | API annuaire/newsletter, yearbook et passerelle SiOps |
| `REACT_APP_CURRENT_PROMO` | Promotion utilisée par certains écrans |

`REACT_APP_STAGES_API_URL` appartient aux versions du front qui implémentent Stages ; cette fonctionnalité n'est pas présente au commit de front enregistré par la référence racine. Vérifier le commit choisi avant de reprendre sa configuration.

## Dépendances des backends

| Famille | Noms observés et particularités |
| --- | --- |
| Vérification des tokens | `AUTH_KEY`, utilisé par les API pour vérifier les JWT ; le front utilise sa configuration OIDC |
| Keycloak | `KEYCLOAK_REALM`, `KEYCLOAK_CLIENT_ID`, `KEYCLOAK_CLIENT_SECRET` ; `KEYCLOAK_ADMIN_URL` pour les services qui appellent l'administration |
| Comptes techniques | Couples `KEYCLOAK_USERNAME_*` / `KEYCLOAK_PASSWORD_*` : suffixes `SCOLARITE`, `NOTE`, `SYLLABUS`, `YEARBOOK`, `ANNUAIRE`. Absences et la configuration de Cassiopée utilisent le suffixe `SCOLARITE` à cette référence |
| Appels à Scolarité | `SCOLARITE_HOST` + `SCOLARITE_PORT` ; Yearbook accepte prioritairement `SCOLARITE_API_URL`, sinon compose l'adresse depuis host/port |
| Appels à Notes | `NOTE_HOST` + `NOTE_PORT` pour Absences, Scolarité, Syllabus et Yearbook |
| Redis | `REDIS_HOST`, `REDIS_PORT`, `REDIS_PASSWORD` pour Absences et Annuaire |
| Stockage S3/MinIO | `BUCKET_URL`, `BUCKET_NAME`, `BUCKET_ACCESS_KEY`, `BUCKET_SECRET_KEY` pour Scolarité et Yearbook ; Scolarité lit aussi `BUCKET_ENV_PREFIX` |
| Passerelle SiOps | `SIOPS_CASSIOPEE_URL` ; le code concatène `api/v1/...`, donc la base doit se terminer par `/` |
| Promotion | `CURRENT_PROMO` pour Absences, Scolarité et Syllabus ; Yearbook utilise `PROMO`. Ne pas supposer qu'un nom unique configure tous les services |
| URLs fonctionnelles | `INTRANET_URL` dans Notes pour ses liens ; `ANNUAIRE_API_URL` dans Annuaire, notamment pour les liens de désinscription |

Pour chaque compte technique, noter le propriétaire, les permissions, l'environnement et la procédure de renouvellement dans la documentation privée. Une variable lue dans la configuration ne prouve pas à elle seule qu'un parcours utilise cette intégration.

## Email et tâches automatiques

Les services qui envoient des emails lisent notamment `MAIL_SENDER`, `MAIL_SENDER_ID`, `MAIL_SENDER_PRIVATE`, `MAIL_SENDER_REFRESH_TOKEN` et `MAIL_SENDER_REDIRECT_URI`. Certains lisent aussi `MAIL_HOST` / `MAIL_PORT`. Les variables de destinataires diffèrent : `MAIL_RECEIVERS`, `ABSENCE_MAIL_RECEIVER`, `REPRESENTATIVES_MAIL`, `SYLLABUS_MAIL_RECEIVER`, `ANNUAIRE_MAIL_RECEIVER`, `MAIL_PAE_SPONSOR` et `SIWEB_MAIL` selon le service et le parcours.

Dans Notes, `MAIL_RECEIVERS` n'est pas un remplacement global des destinataires. L'envoi lié à une note ajoute les adresses des enseignants ; les rappels de notes et de PAE utilisent les adresses d'enseignants/coachs. Configurer cette variable seule ne transforme donc pas l'application en bac à sable d'email. Les comptes, données et moyens d'envoi doivent tous être dédiés aux tests.

`PAE_AUTO_DUPLICATION_ENABLED=false` désactive la duplication automatique des PAE de Notes, mais pas ses rappels. Les rappels sont enregistrés à l'import des modules cron sans interrupteur global observé à cette référence. Le script `npm run dev` de Notes force `NODE_ENV=production`. Yearbook peut créer/synchroniser une promotion au démarrage lorsque `NODE_ENV=production` et `PROMO` sont définis.

Les valeurs `NODE_ENV` changent aussi les contrôles d'authentification, l'exposition de la documentation et certaines initialisations. Elles ne remplacent pas une configuration de test de chaque dépendance.

## Site vitrine

`site-vitrine` se configure séparément de l'intranet : environnements Angular dans `src/environments/`, contenus/traductions et assets. Le dépôt ne présente pas de contrat `.env` équivalent aux backends. Consulter sa [fiche de service](../services/site-vitrine.md) avant d'utiliser ses scripts ou son formulaire de signalement.

Sources : compositions et SQL racines, `src/config.ts`/points d'entrée des services, `intra/src/index.tsx` et clients API aux commits enregistrés, jobs et mailer de Notes, démarrage Yearbook. Le site vitrine est examiné séparément à `8028e4ff`.

[Retour à l'index](../index.md)
