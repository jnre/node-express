const express = require('express'),
  quqweoqbeqouebqoeubqweoub
  testingoutside
happy
doodoodada
  http = require('http');
const morgan = require('morgan');
const hostname = 'localhost';
const port = 3000;
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter.js');
const leaderRouter = require('./routes/leaderRouter.js');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leadership',leaderRouter);
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});
const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
