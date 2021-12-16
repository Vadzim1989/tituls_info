const express = require('express');
const db = require('odbc');
const cs = require('../config/connectionString');

const router = express.Router();

async function querySelect() {
    const connection = await db.connect(cs);
    const statement = await connection.createStatement();
    await statement.prepare(`select * from gomel:titul_info where zues = "РЕЧИЦКИЙ" order by id_adr`);
    const result = await statement.execute();
    return result;
}

async function getResult() {
    let queryResult = await querySelect();
    return queryResult;
}


router.get('/rechica', async (req, res) => {
    const result = await getResult();
    res.json(result);
})

module.exports = router;