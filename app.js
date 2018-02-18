var express = require('express');       // Inclusion du Framework express
var app = express();
var port = 8888;
app.get('/', function(req, res) { 
				res.sendfile('/home/winners/express/index.html'); // pour renvoyer une page html simple
				//res .render(index.ejs'); // pour renvoyer un template
			});	
app.get('/user/:iduser', function(req, res) {
			    res.send('Ceci est l’utilisateur n°' + req.params.iduser);
			    //res.sendFile('/home/winners/express/index2.html')
			});	
app.use(function(req, res, next){
			    res.status(404).send('Page introuvable !');
			}) ;
					
var server = app.listen(port, function() {     // Démarrage  du serveur NodeJs
console.log('Server listening on port ' + server.address().port);
});
	
