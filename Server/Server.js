const express = require('express');
const app = express();
const bodyparse = require('body-parser');
require('./config/config.js');
app.use(bodyparse.urlencoded({ extended: false }));

app.use(bodyparse.json())


app.get('/usuario', function(req, res) {
    res.json('get Funciona');
});

app.post('/usuario', function(req, res) {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'Falta Introducir el nombre'
        });
    } else {

        res.json({
            persona: body
        })
    }

});

app.put('/usuario', function(req, res) {
    res.json('put Funciona');
});

app.delete('/usuario', function(req, res) {
    res.json('delete Funciona');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando Puerto: ', process.env.PORT);
});