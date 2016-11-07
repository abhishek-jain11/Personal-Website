const http = require('http');
const fs = require('fs');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3001;
const restify = require('restify');
const cors = require('cors')

const server = restify.createServer();

server.use(cors());
server.get('/data/:id', function (req, res, next) {
 
 	var filePath = "resources/basic_info.json"
   fs.readFile(filePath, function(err, data) {
      if (err) {
        res.writeHead(500);
        res.end("");
        next(err);
        return;
      }else{
      	 res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
 		 res.end(data);
  		//res.end();
      }
    

      return next();
    });

  return next();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
