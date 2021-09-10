
<h1 align="center"> 
  
  ![242488-desenvolvedor-feminino-grátis-vetor](https://user-images.githubusercontent.com/63822305/132923561-c685f736-8823-45be-a706-078c738b87b0.jpg)


<h1 align="center"> Guia de Profissoões </h3 align="center">

## **Sumário**

- [Introduçãoção](#introdução)
- [Desenvolvimento](#desenvolvimento)
- [Fonte dos dados](#fonte-dos-dados)
- [Funcionalidades](#funcionalidades)
- [Tecnologias, dependências e bibliotecas](#tecnologias-dependências-e-bibliotecas)
- [Instruções para instalação e contribuições no projeto](#instruções-para-instalação-e-contribuições-no-projeto)
- [Features e rotas](#features-e-rotas)
- [Referências](#referências)
  
  ## **Introdução**
  
 Escolher uma profissão não é uma tarefa facil!!
Devemos levar em consideração nossas habilidades, gostos e personalidade.

Ao iniciar a transição de carreira muitas pessoaas se sentem confusas pois a area da Tecnologia é gigante, area de negocios que se integrou a tecnologia, desingn,  suporte, cibersegurança, desenvolvedores dentre outras diversas.

Falta de informação muitos iniciantes acabam virando um profissional pato, não sabe voar, nadar e falar, querendo
abracar o mundo e não faz nada 100%.

O presente projeto tem como objetivo mostrar algumas areas possiveis para desenvolvedores e as linguagens mais utilizadas por elas segundo pesquisas, porem vale lembrar que a linguagem utilizada pelo leitor é de gosto pessoal somente estaremos realizando uma citação sobre algumas possibilidades.
  
  ## **Desenvolvimento**
  
 Mudança de trabalho e mudança de carreira são passos distintos. Antes de qualquer coisa, é importante ter isso em mente. Mudar de carreira já é um processo mais amplo, que requer planejamento para superar dificuldades que são comuns e desafiadoras.
- Identifique os seus medos
- Pesquise sobre a area escolhida
- Descubra as suas metas
- Planeje as contas para o futuro
- Entenda que o mercado muda
- Faça Network com profissionais da area desejada
  
  
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

  
  <h2 align="center"> Rotas </h2 align="center">
  
  #### Rotas gerais
  
| Busca | Rota |
| --- | --- |
| area| '/areas' |
| linguagem | '/linguagens'|
  
#### Rotas das Areas
  
| Metodo | Rota |Demanda de negocio|
| --- | --- | --- |
|GET | '/' | Pesquisa por todas as areas criadas |
|POST |'/' | Cria um area |
|PATCH | '/:id' | Edita um cadatatro por um id especifico |
|DELETE | '/:id' | Deleta um cadastro por um id especifico |
  
 
#### Rotas das Linguagens
  
| Metodo | Rota |Demanda de negocio|
| --- | --- | --- |
|GET | '/' | Pesquisa por todas as linguagens criadas|
|GET | '/front-end' | Pesquisa por todas as linguagens da area front-end cadastradas|
|GET | '/back-end' | Pesquisa por todas as linguagens da area back-end cadastradas|
|GET | '/dados' | Pesquisa por todas as linguagens da area dados cadastradas|
|GET | '/mobile' | Pesquisa por todas as linguagens da area mobile cadastradas|
|POST |'/' | Cria uma linguagem |
|PATCH | '/:id' | Edita um cadatatro por um id especifico |
|DELETE | '/:id' | Deleta um cadastro por um id especifico |
  
## **Referências**

[{reprograma} - Projeto Final](https://github.com/ismenialeao/Projeto-Final)

[Inspiração: Pretitudes (autoria: @priscilaestevao)](https://github.com/priscilaestevao/pretitudes-project-reprograma)

[Transição de Carreira](https://rockcontent.com/br/talent-blog/como-superar-as-dificuldades/)

<hr>

[Linkedin - Ismênia Leão](https://www.linkedin.com/in/ism%C3%AAnia-le%C3%A3o-a39942198/)
