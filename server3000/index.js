let app = require('express')();

app.get('/', (req, res) => {
    console.log('request is coming...');
    res.json('done');
    console.log('result is returned by ' + listener.address().port);
});

let listener = app.listen(3000, ()=>{
    console.log('app is listening on port ' + listener.address().port);
});
