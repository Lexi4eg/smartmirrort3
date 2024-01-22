import { Client } from 'pg';

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'smartmirror',
    password: 'postgres',
    port: 5432,
});

export async function GET(request: Request) {
    if (!client._connected) {
        await client.connect();
    }

    const res = await client.query('SELECT * FROM temperatureDataLog');
    await client.end();

    return new Response(JSON.stringify(res.rows), {status: 200});
}