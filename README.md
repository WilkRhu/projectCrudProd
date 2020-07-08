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
        Desafio montado na ideia dos Desing DDD o <a
            href="https://medium.com/cwi-software/domain-driven-design-do-in%C3%ADcio-ao-c%C3%B3digo-569b23cb3d47"
            alt="Saiba Mais">Domain-Driven Desing </a> na tentativa de desacoplamento das funções facilitando a
        compreenção do código unificando a linguage ubíqua ou seja uma linguagem como se estivesse em um ambiente
        corporativo expressando conhecimento dos especilista da mesma.
    </p>
    <h2 name="basicos">Básico</h2>
    <p>
        A API é RESTFull, e todoas as respostas são em JSON, nos endpoints,
        endpoint base:
        <code>http://local:3001/</code>
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
    <code>http://<ip>:https://newproject-create.herokuapp.com/user</code>
    </br>
    Example:
    </br>
    <img src="http://wilkcaetano.com.br/projeto/01.PNG" />
    <p>
        Criação de usuários consite em:
        Envio de dados como Name, Email e Password.
        Rota Recebe a solicitação processa e usa como autenticação com JWT, criação de token
        salvando no banco. Criando id do usuário e produto com UUID e relacionado tabelas de Logs com Usuários.
        Tendo a resposta:
        <img src="http://wilkcaetano.com.br/projeto/respota 01.PNG">
    </p>
    <div>
        <p>
            <h4>Rota Busca Todos Usuário</h4>
            Rota com verbo http GET usada para buscar todos os usuário
            <code>http://https://newproject-create.herokuapp.com/user</code>
            Essa Rota exige uma autenticação do token enviado via Header:
            <img src="http://wilkcaetano.com.br/projeto/auth.PNG" />
            </br>
            Example:
            </br>
            <img src="http://wilkcaetano.com.br/projeto/getUserAll.PNG" />
        </p>
    </div>
    <div>
        <p>
            <h4>Rota Busca de usuários com ID</h4>
            Rota com verbo http GET usada para buscar passando a id
            do usuário.
            <code>http://https://newproject-create.herokuapp.com/user/:id</code>
            Essa Rota exige uma autenticação do token enviado via Header:
            <img src="http://wilkcaetano.com.br/projeto/auth.PNG" />
            </br>
            Example:
            </br>
            <img src="http://wilkcaetano.com.br/projeto/getId.PNG" />
        </p>
    </div>
    <div>
        <h3> Rotas Produtos </h3>
        <h4> Rota Create Produtos </h4>
        Rota com verbo http POST usada para criação de produtos,
        rota exige autenticação.
        <code>http://https://newproject-create.herokuapp.com/products</code>
        <img src="http://wilkcaetano.com.br/projeto/auth.PNG" />
        </br>
        Exemplo de cadastro produto:
        </br>
        <img src="http://wilkcaetano.com.br/projeto/createProduct.PNG" />
    </div>
    <div>
        <h4> Rota Busca de todos produtos </h4>
        Rota com verbo http GET usada para busca de produtos,
        rota exige autenticação.
        <code>http://https://newproject-create.herokuapp.com/products</code>
        <img src="http://wilkcaetano.com.br/projeto/auth.PNG" />
        </br>
        Exemplo de GET produtos:
        </br>
        <img src="http://wilkcaetano.com.br/projeto/getAll.PNG" />
    </div>
    <div>
        <h4> Rota Busca de produtos por ID </h4>
        Rota com verbo http GET usada para busca de produtos,
        rota exige autenticação.
        <code>http://https://newproject-create.herokuapp.com/products/:id</code>
        <img src="http://wilkcaetano.com.br/projeto/auth.PNG" />
        </br>
        Exemplo de GET produtos:
        </br>
        <img src="http://wilkcaetano.com.br/projeto/getIdproducts.PNG" />
    </div>
    <div>
        <h4> Rota Upadate produtos </h4>
        Rota com verbo http PUT usada para update de produtos,
        rota exige autenticação.
        <code>http://https://newproject-create.herokuapp.com/productsUpdate/id</code>
        <img src="http://wilkcaetano.com.br/projeto/auth.PNG" />
        </br>
        Exemplo de PUT produtos:
        </br>
        <img src="http://wilkcaetano.com.br/projeto/updateproducts.PNG" />
    </div>
    <div>
        <h4> Rota Delete produtos </h4>
        Rota com verbo http DELETE usada para excluir os produtos,
        rota exige autenticação.
        <code>http://https://newproject-create.herokuapp.com/deleteProducts/id</code>
        <img src="http://wilkcaetano.com.br/projeto/auth.PNG" />
        </br>
        Exemplo de Delete produtos:
        </br>
        <img src="http://wilkcaetano.com.br/projeto/deletProduct.PNG"/>
    </div>
    <div>
        <h4>Rota de Login</h4>
        Rota criada pra autenticação do usuário, será enviado  o email
        e senha caso o usuário exista na base de dados, retorna o token
        o token contem informações do usuário facilitando pro front, ultiliza-las
        da maneira que achar necessário.
        Rota não precisa de autenticação pois, dele que iremos nos altenticar.
        </br>
        Exempo:
        <img src="http://wilkcaetano.com.br/projeto/signin.PNG" />
    </div>
    <div>
        <h2  name="arquitetura">Arquitetura</h2>
        <h3>Banco de dados</h3>
        <p>
            Foi ultilizado dos bancos simultânios, o banco de produção com Postgres por dar suporte a criação de 
            UUID segurando assim a que a posição do usuário ou produto no banco não seja sequencial dificultando 
            os ataques na aplicação.
            E o banco Mysql para a criação dos teste, ambos rodando simutâneamente no Docker;
        </p>
        <h3>Middlewares</h3>
        <p>
        Principais <a href="https://github.com/WilkRhu/projectCrudProd/tree/development/src/service/middleware">Middlewares</a> da aplicação
        </p>
        <table class="table">
    <thead>
        <tr>
        <th scope="col">Middleware</th>
        <th scope="col">O que faz</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Auth</th>
            <td>
            Fica antes das rotas para a verificar se o usuário existe e se é altenticado,
            responsável pelo bloqueio caso o usuário não exista na base de dados.
            </td>
        </tr>
        <tr>
            <th>ComparePassword</th>
            <td>
            Comparador de senhas, entre a senha enviada e a senha do banco, usando o <a href="https://www.npmjs.com/package/bcrypt">bcrypt</a> para a criptografia da senha.
            </td>
        </tr>
        <tr>
            <th>CreateToken</th>
            <td>
            Ultilizando o pacote <a href="https://www.npmjs.com/package/jsonwebtoken">JSONWEBTOKEN</a> para criar um token do usuário na hora do cadastro.
            </td>
        </tr>
        <tr>
            <th>CriptPassword</th>
            <td>
            Criptografa a senha do usuário na hoja da criação do mesmo ultiliza o pacote <a href="https://www.npmjs.com/package/bcrypt">bcrypt</a>
            </td>
        </tr>
    </tbody>
    </table>
    </div>
