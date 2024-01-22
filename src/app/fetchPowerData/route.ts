
import {Client} from 'pg';

const client = new Client({
    user: 'postgres', // updated user
    host: 'localhost', // updated host
    database: 'smartmirror', // updated database
    password: 'postgres', // updated password
    port: 5432, // updated port
});

export default async function GET() {
    const res = await client.query('SELECT * FROM power_data');

    return new Response(JSON.stringify(res.rows) , { status: 200 });

}