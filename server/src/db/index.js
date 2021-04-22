import pg from 'pg';

const pool = new pg.Pool({
    database: 'digital_urpaq',
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432
});

export default pool;