let app = require('express')();
let python_shell = require('python-shell');

app.get('/', (req, res) => {
    console.log('request is coming...');
    let result = python_shell.run('/python_modules/hello_world.py', {args: ['hello world']}, (err, result) => {
        res.json(result[0] + " (from server " + listener.address().port + ")");
    });
    console.log('result is returned by ' + listener.address().port);
});

let listener = app.listen(3002, ()=>{
    console.log('app is listening on port ' + listener.address().port);
});
