var http = require('http');
var fs = require('fs');

//404 response
function send404res(res)
{
  res.writeHead(404,{"Content-Type":"text/plain"});
  res.write("Error 404: Page not found");
  res.end();
}

//handle a user request
function onReq(req,res)
{
  if(req.method == 'GET' && req.url == '/')
  {
    res.writeHead(200,{"Content-Type":"text/html"});
    fs.createReadStream("./home.html").pipe(res);
  }

  else if(req.method == 'GET' && req.url == '/about us.html')
  {
    res.writeHead(200,{"Content-Type":"text/html"});
    fs.createReadStream("./about us.html").pipe(res);
  }

  else if(req.method == 'GET' && req.url == '/gallery.html')
  {
    res.writeHead(200,{"Content-Type":"text/html"});
    fs.createReadStream("./gallery.html").pipe(res);
  }


  else {
    send404res();
  }
}

http.createServer(onReq).listen(8080);
console.log("server is up and running");
