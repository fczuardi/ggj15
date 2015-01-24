var exec = require('child_process').exec;

var koa = require('koa'),
    route = require('koa-route'),
    serve = require('koa-static');

const SERVER_PORT = 3000;

var app = koa();

// all other paths try to serve the static file
app.use(serve('dist/www'));

// all other routes, 404 not found
app.use(function *() {
    console.log('not found', this.request.url);
    this.throw(404, 'not here');
    yield false;
});

app.listen(SERVER_PORT, function() {
    console.log('Koa is listening to http://' + 'localhost' + ':'+ SERVER_PORT);
});
