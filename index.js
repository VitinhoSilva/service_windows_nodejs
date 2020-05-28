var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('app/sslcert/privateKey.key', 'utf8');
var certificate = fs.readFileSync('app/sslcert/certificate.crt', 'utf8');
var Service = require('node-windows').Service;

var credentials = {key: privateKey, cert: certificate};
var app = require('./app/routes/index');

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

var svc = new Service({
  name:'Geocidade_backend_empreendimento',
  description: 'Backend geocidade para o widget empreendimento.',
  script: 'C:\\projetos\\geo_cidades_jaboatao_widget_emp_backend\\index.js'
});

svc.on('install',function(){
  svc.start();
});

svc.install();

httpServer.listen(3017, () => {
	console.log("Backend empreendimento iniciado em: http://localhost:3017")
});
httpsServer.listen(3018, () => {
	console.log("Backend empreendimento iniciado em: https://localhost:3018")
});

