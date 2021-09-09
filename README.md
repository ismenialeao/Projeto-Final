<h1 align="center">  Projeto Final Reprograma

<h1 align="center"> Guia de Profissoões

  
#### Escolher uma profissão não é uma tarefa facil!!
Devemos levar em consideração nossas habilidades, gostos e personalidade.

Ao iniciar a transição de carreira muitas pessoaas se sentem confusas pois a area da Tecnologia é gigante, area de negocios que se integrou a tecnologia, desingn,  suporte, cibersegurança, desenvolvedores dentre outras diversas.

Falta de informação muitos iniciantes acabam virando um profissional pato, não sabe voar, nadar e falar, querendo
abracar o mundo e não faz nada 100%.

O presente projeto tem como objetivo mostrar algumas areas possiveis para desenvolvedores e as linguagens mais utilizadas por elas segundo pesquisas, porem vale lembrar que a linguagem utilizada pelo leitor é de gosto pessoal somente estaremos realizando uma citação sobre algumas possibilidades.



<h3 align="center"> Tecnologias utilizadas </h3 align="center">




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


`npm init -y` 
`npm express`  
`npm mongoose`
`npm nodemon`
`npm dotenv`
` npm cors`


<h3 align="center"> Arquitetura MVC </h3 align="center">

         📁 GUIA
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


<h3 align="center"> Regras de negocio </h3 align="center">

- [x] Não criar Linguagens como mesmo nome
- [x] Não criar Areas com mesmo nome
- [x] Para criar um novo título, deverá vincular no momento da criação a uma criação já existente no sistema, utilizando o numero do id do estúdio correspondente no corpo da requisição

