const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'smartmirror',
    password: 'postgres',
    port: 5432,
});

const run = async () => {
    await client.connect();

    // Query all data from the 'modelog' table
    const res = await client.query('SELECT * FROM temperatureDataLog');

    console.log(res.rows);

    await client.end();
};

run().catch(console.error);