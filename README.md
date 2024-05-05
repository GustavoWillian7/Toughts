# Toughts

## Descrição

Este projeto é uma aplicação web para compartilhamento de pensamentos. Permite que os usuários criem uma conta, façam login, compartilhem seus pensamentos, vejam os pensamentos de outros usuários e interajam com eles. O projeto é construído usando Node.js, Express.js e Sequelize como ORM para interagir com o banco de dados MySQL.

## Configuração

### Pré-requisitos

- Node.js instalado na máquina
- MySQL Server instalado e configurado

### Instalação

1. Clone o repositório do projeto:

   ```bash
   git clone https://github.com/seu-usuario/seu-projeto.git

2. Navegue até o diretório do projeto:

   ```bash
   cd seu-projeto

3. Instale as dependências do projeto:
 
   ```bash
   npm install

4. Configure as variáveis de ambiente no arquivo .env conforme o arquivo .env.example.
5. Inicie o servidor:

   ```bash
   npm install

## Estrutura do Projeto

O projeto segue a seguinte estrutura de arquivos:

- **index.js:** Arquivo principal do servidor.
- **db/conn.js:** Arquivo de configuração da conexão com o banco de dados.
- **models/:** Contém os modelos de dados para o Sequelize.
- **routes/:** Contém as definições de rotas da aplicação.
- **views/:** Contém os arquivos de visualização usando Handlebars como mecanismo de modelo.
- **controllers/:** Contém os controladores que definem a lógica de negócios da aplicação.
- **helpers/:** Contém funções auxiliares para a aplicação.

## Funcionalidades

- Autenticação de usuários (registro, login, logout).
- Compartilhamento de pensamentos.
- Visualização e edição de pensamentos.
- Curtir pensamentos de outros usuários.
- Visualização do perfil do usuário.
- Dashboard com os pensamentos do usuário.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Sequelize (ORM)
- Handlebars (template engine)
- MySQL
- bcryptjs (para hash de senhas)
- express-session (para sessões)
- express-flash (para mensagens flash)
