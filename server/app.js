const express = require('express')
const app = express();
const path = require('path')
const cors = require('cors');


app.use(cors())

app.use('/api/titulinfo', require('./routers/getAllTituls')); // all
app.use('/api/titulinfo', require('./routers/getBraginTituls')); // bragin
app.use('/api/titulinfo', require('./routers/getBudaTituls')); // buda
app.use('/api/titulinfo', require('./routers/getChecherskTituls')); // chechersk
app.use('/api/titulinfo', require('./routers/getDobrushTituls')); // dobrush
app.use('/api/titulinfo', require('./routers/getElskTituls')); // elsk
app.use('/api/titulinfo', require('./routers/getGomelTituls')); // gomel
app.use('/api/titulinfo', require('./routers/getGomelZuesTituls')); //gomelzues
app.use('/api/titulinfo', require('./routers/getHoinikiTituls')); // hoiniki
app.use('/api/titulinfo', require('./routers/getJitkovichiTituls')); // jitkovichi
app.use('/api/titulinfo', require('./routers/getJlobinTituls')); // jlobin
app.use('/api/titulinfo', require('./routers/getKalinkovichiTituls')); // kalinkovichi
app.use('/api/titulinfo', require('./routers/getKormaTituls')); // korma
app.use('/api/titulinfo', require('./routers/getLelchiciTituls')); // lelchici
app.use('/api/titulinfo', require('./routers/getLoevTituls')); // loev
app.use('/api/titulinfo', require('./routers/getMozirTituls')); // mozir
app.use('/api/titulinfo', require('./routers/getNarovlyaTituls')); // narovlya
app.use('/api/titulinfo', require('./routers/getOctoberTituls')); // october
app.use('/api/titulinfo', require('./routers/getPetrikovTituls')); // petrikov
app.use('/api/titulinfo', require('./routers/getRechicaTituls')); // rechica
app.use('/api/titulinfo', require('./routers/getRogachevTituls')); // rogachev
app.use('/api/titulinfo', require('./routers/getSvetlogorskTitul')); // svetlogorsk
app.use('/api/titulinfo', require('./routers/getVetkaTituls')); // vetka

if(process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join('build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve('build', 'index.html'));
    })
}

app.listen(4000);

