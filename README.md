 <img style="border-radius: 50%;" src="https://raw.githubusercontent.com/marinaisabels/teste-navedex/master/logo.png" width="100px;" alt=""/>


_____
## 💻 Sobre os exercícios
**[Exercício 1](https://docs.google.com/document/d/1p3Nm2wo6FRpTWeo0wETEVUzGTp8_30Gkp0VWNFu4h6Y/edit?ts=5f593ac8)**
**[Exercício 2](https://docs.google.com/document/d/1Kxze58Hm_yazWPEeUjpaCJJwPdtHx-Y937z_oeav410/edit)**
---

## ⚙️ Funcionalidades

- Navers

     - (Index) Rota para listagem dos Navers.

     - (Show) Rota para detalhar informações de um único naver através de seu identificador

     - (Create) Rota de Criação de Naver

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

-    Etapa 1 - Configurar as informações do Banco de dados no arquivo config.js:

 Na ausência do postgre, foi utilizado o mySQL. As informações foram alteradas 
 com adição de novos dados para o banco, de acordo ao que o mySQL exige. 

```
export const DATABASE = process.env.DATABASE_URL 
export const DB_USER = process.env.DB_USER 
export const DATABASE_NAME = process.env.DATABASE_NAME 
export const DB_PASSWORD = process.env.DB_PASSWORD 

``` 
Os dados do banco também foram armazenados no arquivo .env

Foi necessário criar uma variável no arquivo knexfile para o banco de dados.
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


-   Etapa 2 - Criar o Model do Navers
Foi criado o Model do Navers com o uuid, mas por questões de configurações
o uuid foi retirado de todos os arquivos da pasta Model.

-   Etapa 3 - Criar o arquivo de Navers no Controller

Foi criado as seguintes rotas:
    -    index
    -    show    
    -    create

Sem a necessidade de utilizar o arquivo helpers.
Na rota de criar naver foi retirado o role_id e não 
foi possivel fazer a lógica de somente admin poder criar um novo naver.

-   Etapa 4 - Criar migrações com a rota de criar navers.

-   Para criar uma migração é necessário utilizar os seguintes comandos:

```
npm run migrate:make nome_do_arquivo

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
npm run db:seed

```

-   Etapa 5 - Organizar os arquivos de rotas 

No arquivo index.js da pasta de Rotas foi adicionado a rota de navers, que precisa 
ser utilizado com v1 no parametro.

Foi adicionado arquivo de rotas dos navers com informações do NaversControllers
com os métodos GET e POST

 Para que nãoo seja necessário utilizar o token autenticação as rotas dos "navers" 
 foram colocadas no path do arquivo server.js




