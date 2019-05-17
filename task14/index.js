var port = 5000;
var express = require('express');
var bodyParser = require('body-parser');
var server = express();
var arr = [];


server.use(bodyParser.json());

server.use('/', express.static('public'));

server.get('/test.json', (req, res) => {
    res.json({
        arr
    });
});

server.all('/all_data', (req, res) => {
    res.send('All data OK');
})

server.post('/set_test', (req, res) => {
    arr.push(req.body.value);
	console.log(arr);
	
});

server.listen(port, () => {
    console.log('Server runned on port:', port);
});