Projeto C3 - API de Cadastro e Login com Node.js e Docker

Este projeto implementa uma API simples para cadastro e login de usuários usando Node.js, Express.js, e JWT (JSON Web Token). A aplicação está containerizada com Docker para facilitar o deployment em diferentes ambientes.
Instalação e Uso

Para executar este projeto localmente ou em um ambiente de desenvolvimento:

Clone o Repositório

bash

git clone https://github.com/marciel-csantos/projeto-c3.git
cd projeto-c3

Instale as Dependências

bash

npm install

Configuração do Ambiente

Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:

makefile

PORT=3000
JWT_SECRET=suachavejwtsecreta

Substitua suachavejwtsecreta por uma string segura para assinatura dos tokens JWT.

Gere o Prisma Client

bash

npx prisma generate

Compile o Código TypeScript (opcional, se estiver usando TypeScript)

bash

npm run build

Inicie o Servidor

bash

npm start

O servidor estará rodando em http://localhost:3000.

Docker

Este projeto pode ser executado em um contêiner Docker. Certifique-se de ter o Docker instalado e configurado no seu ambiente.

Construa a Imagem Docker

bash

docker build -t projeto-c3 .

Execute o Contêiner Docker

bash

docker run -p 3000:3000 projeto-c3

O servidor estará acessível em http://localhost:3000.

Testando as Rotas

Use ferramentas como Thunder Client ou Postman para testar as rotas:
    POST http://localhost:3000/api/register para cadastrar um novo usuário.
    POST http://localhost:3000/api/login para fazer login e obter um token JWT.
    Outras rotas protegidas devem incluir o token JWT no cabeçalho Authorization.

Passos Configuração com Play with Docker (PWD)

Clone o Repositório

bash

git clone https://github.com/marciel-csantos/projeto-c3.git
cd projeto-c3

Construa a Imagem Docker

bash

docker build -t projeto-c3 .

Execute o Contêiner Docker

bash

docker run -p 3000:3000 projeto-c3

Acesse as Rotas

Após iniciar o contêiner, você pode acessar as rotas da API adicionando /api/users ao IP gerado pelo PWD. Por exemplo:

bash

http://seu_ip_do_PWD:3000/api/users

Use ferramentas como Thunder Client ou Postman para enviar requisições HTTP para essas rotas.

Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorias no código ou funcionalidades adicionais.
