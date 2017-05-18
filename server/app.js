const express = require('express');
const bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/calc', (req, res) => {
    // let a = req.body.a;
    // let b = req.body.b;
    // let operation = req.body.operation;

    // if (operation === '+'){
    //     res.send((parseInt(a) + parseInt(b)).toString())
    // } else if (operation === '-'){
    //     res.send((parseInt(a) - parseInt(b)).toString())
    // } else if (operation === '*'){
    //     res.send((parseInt(a) * parseInt(b)).toString())
    // } else if (operation === '/'){
    //     res.send((parseInt(a) / parseInt(b)).toString())
    // } else {
    //     res.send(NaN.toString())
    // }

    let data = req.body.data;
    res.send(eval(data).toString());
});

app.listen(3001);

console.log('Listening on port 3001...');