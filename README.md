⚠️ Para rodar o banco SqlPostgre ⚠️

     1️ Instale o docker.
     2️ Crie um docker a partir de uma imagem psotgres com a query:
          sudo docker run --name NomeDocker -e POSTGRES_PASSWORD=passaword -p 5432:5432 postgres

     💬 Lembre de substituir o nome do seu docker e senha na query e no arquivo database.js

     3️ Inicie o Docker criado com a query:
          sudo docker start NomeDocker
          
          💬 para listar os dockers use: sudo docker ps -a

     4️ Por fim crie o database com a sequinte query:
          yarn sequelize db:create  

⚠️ Gerenciar migrations no banco ⚠️

     1️⃣ Criar as migrations por meio da query:
          yarn sequelize migration:create --name=type-collection 

     💬 type: Create || Modify || DropDown  && collection: collection Name

     2️⃣ Para rodar as migrations use a query:
          yarn sequelize db:migrate


⚠️ Procedimento para criar parametros ⚠️

1️⃣ Cria migration              5️⃣ Importa e inicia conexão no src/database/index.js
2️⃣ Escreve migration           6️⃣ Cria a rota (EndPoint)
3️⃣ Roda migration              7️⃣ Cria controller
4️⃣ Cria um model


🗂️ Metodos dos COntrollers 🗂️

1️⃣ Store = Criar
2️⃣ Show = Retornar toda collection
3️⃣ Index = Busca item da collection pelo id
4️⃣ Updade = Atualizar informações
5️⃣ Delete = Deletar, (Sempre pela PrimaryKey)
6️⃣ Associate = Associa dois parametros (provavelmente corresponde a uma associação N:N)