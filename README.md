<h1>Projeto create user e product</h1>
<p>
Criação simplificado de um sistema para cadastro de autenticação de usuários
</p>
<h3>Summary</h3>
<ul>
<li><a href="#feature">Features</a></li>
<li><a href="#basicos">Básicos</a></li>
<li><a href="#arquitetura">Arquitetura</a></li>
</ul>

<h2 name="feature">Features</h2>
<p>
Desafio montado na ideia dos Desing DDD o <a href="https://medium.com/cwi-software/domain-driven-design-do-in%C3%ADcio-ao-c%C3%B3digo-569b23cb3d47" alt="Saiba Mais">Domain-Driven Desing </a> na tentativa de desacoplamento das funções facilitando a compreenção do código unificando a linguage ubíqua ou seja uma linguagem como se estivesse em um ambiente corporativo expressando conhecimento dos especilista da mesma.
</p>
<h2 name="basicos">Básico</h2>
<p>
A API é RESTFull, e todoas as respostas são em JSON, nos endpoints,
endpoint base:
<code>http://<ip>:3001/</code>
<p>
Criação do banco de dados Postgres com a Query Builder Knex para a criação das migrations.
Express como framework, junto com os pacotes do JWT, Banco de dados Postgres para produção e Mysql
para testes.
</p>
</p>
<h3>Rotas</h3>
A seguir rotas disponíveis na API:
<i>Lebando que o projeto está disponível no heroku na url: 
<code>https://newproject-create.herokuapp.com</code></i>

<h4>Rota de Criação de usuários</h4>
Rota com verbo http POST usada para cadastro de usuários
<code>http://<ip>:3001/user</code></br>
Example: 
<img src="http://wilkcaetano.com.br/projeto/01.PNG" />
<p>
Criação de usuários consite em: 
Envio de dados como Name, Email e Password.
Rota Recebe a solicitação processa e usa como autenticação com JWT, criação de token
salvando no banco. Criando id do usuário e produto com UUID e relacionado tabelas de Logs com Usuários.
Tendo a resposta:
<img src="http://wilkcaetano.com.br/projeto/respota 01.PNG">
</p>
<p>
<h4>Rota Busca Todos Usuário</h4>
Rota com verbo http GET usada para buscar todos os usuário
<code>http://<ip>:3001/user</code>
Essa Rota exige uma autenticação do token enviado via Header:
<img src="http://wilkcaetano.com.br/projeto/auth.PNG" />

Example: 
<img src="http://wilkcaetano.com.br/projeto/getUserAll.PNG" />
</p>

<p>
<h4>Rota Busca de usuários com ID</h4>
Rota com verbo http GET usada para buscar passando a id 
do usuário.
<code>http://<ip>:3001/user/id</code>
Essa Rota exige uma autenticação do token enviado via Header:
<img src="http://wilkcaetano.com.br/projeto/auth.PNG" />

Example: 
<img src="http://wilkcaetano.com.br/projeto/getId.PNG" />
</p>

<h3> Rotas Produtos </h3>

<h4> Rota Create Produtos </h4>
Rota com verbo http POST usada para criação de produtos,
rota exige autenticação.
<code>http://<ip>:3001/products</code>
<img src="http://wilkcaetano.com.br/projeto/auth.PNG" />

Exemplo de cadastro produto:

<img src="http://wilkcaetano.com.br/projeto/createProduct.PNG" />


<h4> Rota Create Busca de todos produtos </h4>
Rota com verbo http GET usada para busca de produtos,
rota exige autenticação.
<code>http://<ip>:3001/products</code>
<img src="http://wilkcaetano.com.br/projeto/auth.PNG" />

Exemplo de GET produtos:

<img src="http://wilkcaetano.com.br/projeto/getall.PNG" />



<h4> Rota Create Busca de produtos por ID </h4>
Rota com verbo http GET usada para busca de produtos,
rota exige autenticação.
<code>http://<ip>:3001/products/:id</code>
<img src="http://wilkcaetano.com.br/projeto/auth.PNG" />

Exemplo de GET produtos:

<img src="http://wilkcaetano.com.br/projeto/getIdproducts.PNG" />
