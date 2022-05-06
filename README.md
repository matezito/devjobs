## Debjobs

Proyecto del curso de Juan de la Torre (https://www.udemy.com/course/nodejs-bootcamp-desarrollo-web-mvc-y-rest-apis/), pasado a Typescript. Se hicieron algunas mejoras en dependencias de desarrollo.  
Se modifico la parte del engine de Handlebars para la versión nueva.
Se cambio mongo-connect por connect-mongodb-session para mayor compatibilidad con typescript.

Tienen que tener mongodb activo.

1 - Clonar el proyecto  
2 - Ejecutar ``` npm install ```  
3 - Para DEV, ejecutar ``` npm run dev ```

Previo pueden crear un archivo .env con los variables de entorno.

```
PORT=3000  
MONGO_URI=mongodb://localhost/dev-jobs  
SECRET=supersecreto  
KEY=secretkey  
``` 

Si estas variables de entorno no existen, se usan valores por defecto que se puede encontrar en src/enviroment.ts.

Los demas comandos de npm los encuentran en package.json

