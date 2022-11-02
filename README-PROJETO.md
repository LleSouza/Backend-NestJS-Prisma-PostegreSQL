# Esse projeto foi desenvolvido como teste de um backend pensado em "Cadastrar um  Usuário onde depois será reaproveitado o cadastro para autenticar o usuário e logar no sistema onde terá acesso aos projetos desenvolvidos. "

# Linguagem, banco de dados e Frameworks utilizados:
* NodeJS

* Java Script

* PostgreSQL +DBeaver

* Prisma, (utilizado como ORM automatizando o banco de dados)

* Nestjs (Contrução da API em REST, Servidor,rotas,module, conexão com o prisma e banco de dados)

* Insominia (Programa para teste de API)

# Links utilizados  para instalação/documentação dos frameworks, banco de dados:
* NodeJS: https://nodejs.org/en/

* PostegreSQL: https://www.postgresql.org/ + DBeaver: https://dbeaver.io/

* Prisma: https://docs.nestjs.com/recipes/prisma#prisma

* Nestjs: https://docs.nestjs.com/

* Insomnia: https://insomnia.rest/

# Comandos NestJS Utilizados:

* npm i -g @nestjs/cli  (instalando o nestJS/CLI)

* nest new project-name ( Criando o projeto nest + nome)

* cd project-name  (Acessa a pasta do projeto criado)

* npm run start:dev  (testando a aplicação no modo desenvolvimento, obs: existe outros comandos que pode ser utilizados para testes está na pasta "package-json")


# Comandos Prisma Utilizados: 

* npm install prisma --save-dev  (Instalando as dependencias do prisma em modo desenvolvimento)

* npx prisma init  (Este comando cria um novo diretor com os seguintes conteúdos: "schema.prisma" e ".env")
Obs: Toda vez que for preciso iniciar o prisma utiliza-se esse comando.

* npx prisma migrate dev --name init  (Este comando é utilizado depois dos models ser criados no schema.prisma onde será gerado um arquivo de migração SQL e executá-los no banco de dados, OBS: "--name" é o nome para ser dado a migration que aparecerá no data base do banco de dados)

* npm install @prisma/client  (durante a instalação, o Prisma invoca automaticamente o comando para você. No futuro, você precisa executar este comando apóscadaalteração em seus modelos Prisma para atualizar seu Cliente Prisma gerado.prisma generate)

* nest g resource modules   (Depois de ter feito todo processo do prisma execute este comando para criar a REST API onde contém: "controller.ts" "module.ts" "service.ts" neste exemplo foi utilizado cadastro_login. OBS: toda vez que for criar uma nova rota ou atualizar utiliza este comando basta colocar o nome desejado da rota depois do "modules" e tudo será criado automaticamente pelo nest, basta configurar o "service" que receberá e mandará todas informações ao banco de dados atraves do prisma )



