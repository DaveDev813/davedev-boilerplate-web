const jsonServer = require('json-server');
const server = jsonServer.create({
  noCors: true,
});
const router = jsonServer.router('./mockApi/db.json');
const middlewares = jsonServer.defaults();

server.use((req, res, next) => {
  // res.sendStatus(401);
  // console.log('TCL: next', next);
  // console.log('TCL: res', res);
  // console.log('TCL: req', req);
  next();
});
server.use(middlewares);
server.use(router);
server.listen(3030, () => {
  console.log('JSON Server is running');
});
