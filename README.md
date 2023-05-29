## Contexto do Desafio

O desafio consiste em criar uma API REST simples usando Node.js e Express (preferencialmente com Typescript) para manipular uma lista de tarefas. Além disso, é necessário criar um aplicativo de lista de tarefas paginado em React (também preferencialmente com Typescript) que se conecte à API criada.

## Estrutura do Projeto

O projeto está organizado nas seguintes pastas:

- **client**: Contém o código-fonte do aplicativo React para a lista de tarefas.
- **server**: Contém o código-fonte da API Node.js e Express para manipulação das tarefas.

## API - Endpoints

A API possui os seguintes endpoints para manipulação das tarefas:

1. **GET /tasks**: Retorna um array de objetos de tarefa no formato JSON. Este endpoint pode receber um `limit` e um `offset` para possibilitar a paginação das tarefas.
2. **POST /tasks**: Aceita um objeto de tarefa no corpo da requisição (formato JSON) e adiciona-o ao array de tarefas. Adicione as validações que achar necessárias.
3. **PATCH /tasks**: Aceita um id de uma tarefa e um objeto de tarefa no corpo da requisição (formato JSON) e atualiza a tarefa no array. Adicione as validações que achar necessárias.
4. **DELETE /tasks**: Aceita um id de uma tarefa e remove a tarefa do array. Adicione as validações que achar necessárias.

## Exemplo de Dados Iniciais

Utilize o seguinte array de tarefas como exemplo inicial para armazenar os dados em memória:

```javascript
const tasks = [
  { id: 1, titulo: "Aprender React", concluida: true },
  { id: 2, titulo: "Estudar NodeJS", concluida: false },
  { id: 3, titulo: "Praticar TypeScript", concluida: false },
];
```

Não é necessário uma conexão com banco de dados. Os dados serão armazenados em memória.

## Instruções de Inicialização

Siga as instruções abaixo para iniciar o projeto:

### 1. Instalação das Dependências

Antes de iniciar o servidor e o cliente, é necessário instalar as dependências. Certifique-se de estar no diretório raiz do projeto e execute o comando `yarn install` em ambos os diretórios:

```bash
$ cd client
$ yarn install

$ cd ../server
$ yarn install
```

### 2. Inicialização do Servidor

Para iniciar o servidor, utilize o comando `yarn start:dev` no diretório **server**:

```bash
$ cd server
$ yarn start:dev
```

Isso iniciará o servidor em modo de desenvolvimento (porta 3333 do localhost).

### 3. Inicialização do Cliente

Para iniciar o cliente, utilize o comando `yarn start` no diretório **client**:

```bash
$ cd client
$ yarn start
```

Isso iniciará o cliente e abrirá a aplicação em seu navegador padrão (porta 3000 do localhost).
