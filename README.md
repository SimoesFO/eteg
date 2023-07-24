# Eteg - Avaliação Técnica

Este projeto foi criado por Felipe O. Simões, como parte do processo seletivo da Eteg. Technology. Trata-se de um sistema de cadastro de usuário onde é realizada a criação de um ou mais usuários, solicitando as informações de nome, cpf, email, cor preferida e comentário, e após isso realizar a listagem dos usuários criado.

<div align='center'>
 <img src='https://user-images.githubusercontent.com/6942893/255610488-60736839-bd60-4e5b-8cf1-44eb87b7bd87.png' width='500px'  /><br />
 <i>Home</i><br /><br />
 <img src='https://user-images.githubusercontent.com/6942893/255610504-b4d13f54-4201-4eaa-9f4d-9a0aa445a624.png' width='500px'  /><br />
 <i>Adicionar Usuário</i><br /><br />
 <img src='https://user-images.githubusercontent.com/6942893/255610514-97b5b48e-62af-4c1b-8c43-f4183ac75571.png' width='500px'  /><br />
 <i>Usuário Cadastrado</i><br /><br />
</div>

## Tecnologias Utilizadas
### Back-End
<ul>
  <li>API Rest</li>
  <li>Nodejs / Nestjs</li>
  <li>Typescript</li>
  <li>Prisma ORM</li>
  <li>Class Validator</li>
  <li>Postgres</li>
  <li>Docker</li>
</ul>

### Front-End
<ul>
  <li>React / Nextjs 13</li>
  <li>Tailwind CSS</li>
  <li>Typescript</li>
  <li>React Hook Forms</li>
  <li>Zod</li>
  <li>Client Component / Server Component</li>
  <li>Context Api</li>
  <li>Docker</li>
</ul>

## Como Utilizar
O projeto foi dividido em duas partes, o back-end que se encontra dentro da pasta "server" e o front-end que se encontra dentro da pasta "web". Em ambos os casos ambas as aplicações estão configuradas para rodar com <a href="https://docs.docker.com/">Docker</a> através do <a href="https://docs.docker.com/compose/">Docker Compose<a/>.

Então para executar o projeto basta entrar em ambas as pastas (server e web) e dentro de cada uma delas executar o comando:

<p>
  <i>
  &nbsp;&nbsp;&nbsp;&nbsp;# &nbsp;docker compose up
  </i>
</p>

Com isso os containers necessários para a aplicação funcionar já devem estar funcionando.

O back-end (server) está configurado para rodar em <a href="http://localhost:3002">http://localhost:3002</a>

Já o front-end (web) está configurado para rodar em <a href="http://localhost:3000">http://localhost:3000</a>

## Dúvida???
Caso surjam dúvidas ou tenha algum problema basta entrar em contato, que terei prazer em ajudar.
