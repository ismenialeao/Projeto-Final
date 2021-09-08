<h2 align="center">  Projeto Final Reprograma

### Tecnologias que vamos usar:

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm ` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Compass ou Robo 3T` | Interface gráfica para verificar se os dados foram persistidos|
| `Postman` | Interface gráfica para realizar os testes|


### Instalando dependencias

`npm express`  
`npm mongoose`
`npm nodemon`
`npm dotenv`
`npm i`


#### Arquitetura MVC

         📁 BLACK
            |
            |-  📁 src
            |    |
            |    |- 📁 controllers
            |         |- 📄 areasC.js  
            |         |- 📄 linguagensC.js  
            |         
            |    |- 📁 data
            |        |- 📄 database.js
            |
            |    |- 📁 models
            |         |- 📄 eareasM.js
            |         |- 📄 linguagensM.js
            |
            |    |- 📁 routes
            |         |- 📄 areasR.js
            |         |- 📄 linguagensR.js 
            |
            |
            |- 📄 .env
            |- 📄 .env.example
            |- 📄 .gitignore
            |- 📄 package-lock.json
            |- 📄 package.jason
            |- 📄 package
            |- 📄 README.me
            |- 📄 server.js


#### Regras de negocio

- [x] Não criar Linguagens como mesmo nome
- [x] Não criar Areas com mesmo nome
- [x] Para criar um novo título, deverá vincular no momento da criação a uma criação já existente no sistema, utilizando o numero do id do estúdio correspondente no corpo da requisição



"mongodb+srv://ISMY:100389@reprograma.n9z04.mongodb.net/sample_mflix?retryWrites=true&w=majority"


mongodb+srv://ISMY:100389@cluster0.v8zug.mongodb.net/myFirstDatabase?retryWrites=true&w=majority