import * as mssql from 'mssql';
import { DB_DATABASE, DB_PASSWORD, DB_SERVER, DB_USER } from '../env';

export async function executeQuery(query: string): Promise<any> {
    const config = {
        user: DB_USER,
        password: DB_PASSWORD,
        server: DB_SERVER,
        database: DB_DATABASE,
        options: {
            encrypt: true,
            trustServerCertificate: true, // Change to true for local dev / self-signed certs
        }
    };
    const pool = new mssql.ConnectionPool(config);
    try {
        await pool.connect();
        const result = await pool.request().query(query);
        return result.recordset;
    } catch (err) {
        console.error('error occurred while executing query: ', err);
        throw err;
    } finally {
        await pool.close();
    }
}