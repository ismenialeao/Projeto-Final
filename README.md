<h1 align="center">  **Projeto Final Reprograma**

<h1 align="center"> **Guia de Profissoões**


### Tecnologias utilizadas:




| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm ` | Gerenciador de pacotes|
| `MongoDb Atlas` | Banco de dado não relacional orietado a documentos em nuvem|
| `Postman` | Interface gráfica para realizar os testes|


### Instalando dependencias

`npm init -y`   "npm init-y"
`npm express`  
`npm mongoose`
`npm nodemon`
`npm dotenv`
` npm cors`


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

