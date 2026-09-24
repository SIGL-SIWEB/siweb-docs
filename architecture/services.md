---
layout: default
---

# Services et dépendances

`local-environment` rassemble un front et des services distincts sous forme de sous-modules Git. La table suivante décrit les services présents dans `docker-compose.all.yml`. Les ports correspondent aux ports exposés localement par ce fichier ; ils ne décrivent pas le déploiement de production.

| Sous-module | Rôle | Port local |
| --- | --- | ---: |
| `intra` | Front intranet | 3004 |
| `note_back` | API des notes | 3000 |
| `absence_back` | API des absences | 3001 |
| `scolarite_back` | API de scolarité et données communes | 3002 |
| `syllabus_back` | API des syllabus | 3003 |
| `yearbook_back` | API du yearbook | 3005 |
| `annuaire` | API de l'annuaire | 1234 |

La composition complète lance aussi MySQL (`db`, port 3306) et Redis (`cache`, port 6379). Les variables de `docker-compose.all.yml` relient notamment Absences à Scolarité et Notes, Syllabus à Scolarité et Notes, et Yearbook à Scolarité et Notes. Le front dépend des services listés dans la composition. `docker-compose.yml` ne lance que MySQL et Redis.

`.gitmodules` référence aussi `stages_back`, ainsi que d'anciens chemins tels que `site-vitrine` et `yearbook-back`. Leur présence dans cette liste ne signifie pas qu'ils sont lancés par `docker-compose.all.yml`. Pour connaître le code et les contrats exacts d'un service, consulter son dépôt à la révision indiquée par le sous-module.

Sources vérifiées : `.gitmodules`, `docker-compose.yml`, `docker-compose.all.yml` et `package.json` à la racine de `local-environment`.

[Retour à l'index](../index.md)
