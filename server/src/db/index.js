import * as pg from 'pg';
const { Pool } = pg;

export default new Pool({
    database: 'digital_urpaq',
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432
});