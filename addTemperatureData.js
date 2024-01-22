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

    const sampleTemperatureData = [
        { message: '20' },
        { message: '21' },
        { message: '22' },
        { message: '23' },
        { message: '24' },
        { message: '25' },
    ];

    for (const data of sampleTemperatureData) {
        const text = 'INSERT INTO temperatureDataLog(message) VALUES($1) RETURNING *';
        const values = [data.message];

        try {
            const res = await client.query(text, values);
            console.log(res.rows[0]);
        } catch (err) {
            console.log(err.stack);
        }
    }

    await client.end();
};

run().catch(console.error);