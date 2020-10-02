 <img style="border-radius: 50%;" src="https://raw.githubusercontent.com/marinaisabels/teste-navedex/master/logo.png" width="100px;" alt=""/>


_____
## 💻 Sobre os exercícios

**[Certificado Curso Alura -  Modelagem de Banco de Dados Relacional I - Entidades, Relacionamentos e Atributos](https://drive.google.com/file/d/1zJeNtJd3UD4UNcz98mvsfLRyeH93TrK8/view?usp=sharing)**<br>
**[Certificado Curso Alura -  Modelagem de Banco de Dados Relacional II - Diagrama ER e Modelo Relacional](https://drive.google.com/file/d/15qNz87QIFggIePWy6GIfjbK9eIestVte/view?usp=sharing)**<br>
**[Certificado Curso Alura - Comunicação - Como se expressar bem e ser compreendido ](https://drive.google.com/file/d/1M4FQVGfIEY5xu1qsa9Xsf87eh3gG0-Qi/view?usp=sharing)**

---

## ⚙️ Funcionalidades

- Navers

     - (Index) Rota para listagem dos Navers.

     - (Show) Rota para detalhar informações de um único naver através de seu identificador.

     - (Create) Rota de Criação de Naver.
     
     - (Delete) Rota de deletar Navers.
     
- Projects

     - (Index) Rota para listagem de Projetos.

     - (Show) Rota para detalhar informações.

     - (Create) Rota de Criação de Projetos.
     
     - (Delete) Rota de deletar Projetos.

---


#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone git@github.com/marinaisabels/back-navers/

# Acesse a pasta do projeto no terminal/cmd
$ cd desktop

# Vá para a pasta 
$ cd projeto

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
 
([NodeJS](https://nodejs.org/en/)  +  [Javascript](https://www.typescriptlang.org/))

-   **[Koa](https://koajs.com/)**
-   **[KnexJS](http://knexjs.org/)**
-   **[MySQL](https://dev.mysql.com/doc/)**
---


## Dificuldades 

-    Etapa 1 - Configurar as informações do Banco de dados no arquivo config.js:<br>

 Na ausência do postgre, foi utilizado o mySQL. As informações foram alteradas <br>
 com adição de novos dados para o banco, de acordo ao que o mySQL exige. 

```
export const DATABASE = process.env.DATABASE_URL 
export const DB_USER = process.env.DB_USER 
export const DATABASE_NAME = process.env.DATABASE_NAME 
export const DB_PASSWORD = process.env.DB_PASSWORD 

``` 
Os dados do banco também foram armazenados no arquivo .env<br>

Foi necessário criar uma variável no arquivo knexfile para o banco de dados.<br>
```
export const development = {
  client: 'mysql',
  connection: {
    host: 'amazonaws.com',
    user: '######',
    password: '######',
    database: '#####'
  },
  migrations: {
    directory: path.resolve(__dirname, 'migrations')
  }
}

```


-   Etapa 2 - Criar o Model do Navers<br>
Foi criado o Model do Navers com o uuid, mas por questões de configurações<br>
o uuid foi retirado de todos os arquivos da pasta Model.<br>

-   Etapa 3 - Criar o arquivo de Navers no Controller<br>

Foi criado as seguintes rotas:
    -    index
    -    show    
    -    create

Sem a necessidade de utilizar o arquivo helpers.<br>
Na rota de criar naver foi retirado o role_id e não 
foi possivel fazer a lógica de somente admin poder criar um novo naver.

-   Etapa 4 - Criar migrações com a rota de criar navers.<br>

-   Para criar uma migração é necessário utilizar os seguintes comandos:<br>

```
npm run knex migrate:make nome_do_arquivo

```

Para rodar o arquivo é necessário:

```
npm run db:migrate

```

Para excluir a ultima alteração:

```
npm run db:rollback

```

-   Para adicionar dados no banco, utilizamos o Seeds:

Para criar um seed é necessário:

```
npm run knex seed:make

```

Para rodar o arquivo é necessário:

```
npm run db:seed
```

-   Etapa 5 - Organizar os arquivos de rotas <br>

No arquivo index.js da pasta de Rotas foi adicionado a rota de navers, que precisa <br>
ser utilizado com v1 no parametro.

Foi adicionado arquivo de rotas dos navers com informações do NaversControllers<br>
com os métodos GET e POST

Para que nãoo seja necessário utilizar o token autenticação as rotas dos "navers" <br>
foram colocadas no path do arquivo server.js

- Etapa 6  - Utilizando o PostgreSQL 






