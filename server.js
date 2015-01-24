var exec = require('child_process').exec;

var koa = require('koa'),
    route = require('koa-route'),
    serve = require('koa-static');

const SERVER_PORT = 3000;

var app = koa();

// sync with the git version on POST (git hook to auto-update the server)
app.use(route.post('/update',
    function *(){
        console.log('A POST on', this.request.url);
        var options = {
                cwd: './'
            },
            execPromise = new Promise(function (resolve){
                exec(
                    "git pull && npm install && ./node_modules/gulp/bin/gulp.js",
                    options, function(error, stdout, stderr){
                        var response = 'stdout:' + stdout +
                                        "\nstderr:" + stderr +
                                        "\nerror:" + error;

                        console.log(response);
                        resolve(response);
                });
            });
        var response = yield execPromise;
        this.body = response;
    }
));


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
