const http = require('http');
var fs = require('fs');
const products = require("./models/Product");

const server = http.createServer((req, res) => {
  if (req.url === '/') {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('public/index.html', function (err, data)
    {
        res.on('data', function (products) {
            console.log('Response: ' + products);
        });
        console.log(products)
        res.end(JSON.stringify ({ products }));
        // res.end(products);
    });

  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('Page not found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
