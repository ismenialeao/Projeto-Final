<h1 align="center">  Projeto Final Reprograma

<h1 align="center"> Guia de Profissoões </h3 align="center">

  
 Escolher uma profissão não é uma tarefa facil!!
Devemos levar em consideração nossas habilidades, gostos e personalidade.

Ao iniciar a transição de carreira muitas pessoaas se sentem confusas pois a area da Tecnologia é gigante, area de negocios que se integrou a tecnologia, desingn,  suporte, cibersegurança, desenvolvedores dentre outras diversas.

Falta de informação muitos iniciantes acabam virando um profissional pato, não sabe voar, nadar e falar, querendo
abracar o mundo e não faz nada 100%.

O presente projeto tem como objetivo mostrar algumas areas possiveis para desenvolvedores e as linguagens mais utilizadas por elas segundo pesquisas, porem vale lembrar que a linguagem utilizada pelo leitor é de gosto pessoal somente estaremos realizando uma citação sobre algumas possibilidades.
  
  
 <h2 align="center"> Areas de programação escolhidas </h2 align="center">
 
 ### Back-end e Front- end
 ![1557013220106532478](https://user-images.githubusercontent.com/63822305/132774041-3858aa54-ab4b-420e-b569-9fc2b38c1ffc.jpg)

### Dados
  ![0_zrPsLV-NzQ-AKjD-](https://user-images.githubusercontent.com/63822305/132775145-f8baac35-d5e8-42b8-abb8-762776fc0aaf.jpg)
  
### Mobile
  ![d44beeeaf39fd4bb68305ec04e0cc327](https://user-images.githubusercontent.com/63822305/132777708-a0dda914-e227-4d1b-af36-531f354b78b2.jpeg)


<h2 align="center"> Tecnologias utilizadas </h2 align="center">




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


<h2 align="center"> Arquitetura MVC </h2 align="center">

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


<h2 align="center"> Regras de negocio </h2 align="center">

- [x] Não criar Linguagens como mesmo nome
- [x] Não criar Areas com mesmo nome
- [x] Para criar um novo título, deverá vincular no momento da criação a uma criação já existente no sistema, utilizando o numero do id do estúdio correspondente no corpo da requisição

