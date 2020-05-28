# Backend Widget Empreendimentos Geocidade

O backend foi desenvolvido para servir os dados de empreendimentos e assim alimentar widget de empreendimento do geocidade Jaboatão-PE.

##### Requisitos: 
* Nodejs 4.4.4

##### Implantação: 
* No index.js da pasta raíz alterar path para serviço do windows automático
* Node index.js ou npm start

##### Rotas: 
* /empreendimento/tb/inserir - insere empreendimento [inativo]
* /empreendimento/geometria/listar - lista dados alfanuméricos das geometrias
* /empreendimento/tb/listar - lista dados
* /empreendimento/deletar/:sequencial - deleta informações a partir de sequencial
* /empreendimento/update/:sequencial- atualiza informações a partir de sequencial

##### Projeto: 
* index.js - configurações chefe do backend e serviço no windows
* knexfile.js - configuração de acesso ao BD
* package.json - dependências do projeto
* .env - variáveis de ambiente
* app/controllers/ - controles da aplicação
* app/routes/ - rotas da aplicação  
* app/sslcert/ - certificações para utilizar o protocolo HTTPS

Solução desenvolvida pela Tecgeo, com a contribuição de Rodolpho Dantas.
             


