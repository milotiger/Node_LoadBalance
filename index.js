let app = require('express')();

let port;

app.get('/', (req, res) => {
    res.json('done');
    console.log('result is returned by ' + port);
});

for (let i = 3000; i < 3004; ++i) {
    let listen = app.listen(i, function () {
        port = listen.address().port;
        console.log('app is listening on port ' + listen.address().port);
    })
}

