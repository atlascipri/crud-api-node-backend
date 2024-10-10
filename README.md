# crud-api-node-backend

API RESTful simples com Node.js e MongoDB. Implementa operações CRUD em uma coleção de produtos.

## Funcionalidades

- **Criar**: Adiciona novos produtos à coleção.
- **Ler**: Obtém a lista de produtos ou um produto específico.
- **Atualizar**: Atualiza as informações de um produto existente.
- **Deletar**: Remove um produto da coleção.

## Tecnologias Usadas

- **Node.js**: Ambiente de execução JavaScript do lado do servidor.
- **Express**: Framework web para Node.js.
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados.
- **Postman**: Ferramenta para testar e interagir com a API, permitindo enviar requisições HTTP e analisar respostas.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu_usuario/crud-api-node-backend.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd crud-api-node-backend
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Uso

1. Inicie o servidor:
   ```bash
   npm start
   ```
2. Acesse a API em `http://localhost:3000` (ou a porta configurada).

## Endpoints

- **GET /products**: Retorna todos os produtos.
- **GET /products/:id**: Retorna um produto específico pelo ID.
- **POST /products**: Cria um novo produto.
- **PUT /products/:id**: Atualiza um produto existente pelo ID.
- **DELETE /products/:id**: Deleta um produto pelo ID.