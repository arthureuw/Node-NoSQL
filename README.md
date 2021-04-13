## Test 2 No_SQL Groupe Colin VARANGE ET Arthur Le🐺

### Package Manager:
- Yarn
    #### Demarrer le projet pour la premiere fois avec `yarn install && yarn server`
### Routes de l'api :
- `{{URL}}/users`, methods : GET, POST, PUT, DELETE
- `{{URL}}/skills`, methods : GET, POST, PUT, DELETE
- `{{URL}}/missions`, methods : GET, POST, PUT, DELETE

### Index de la BDD crée :
    - Missions
    - Skils

### Le model des données :
Missions contient toute les informations d'une mission,
l'entreprise qui a emis l'offre ainsi qu'une autre relation vers
la collection Skills.


Skills est juste un nom et permet la recherche de mission par skills.


Users sera la collection soit d'une personne effectuant des missions,
soit de emetteur de missions
