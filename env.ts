import dotenv from 'dotenv';
dotenv.config({ path: process.env.ENV_FILE || '.env' });


export const BASE_URL = process.env.BASE_URL || '';
export const LOGIN_PAGE_URL = BASE_URL + '/login';
export const MAIN_PAGE_URL = BASE_URL + '/agent/main';


export const TEST_USER = process.env.TEST_USERNAME || '';
export const TEST_PASSWORD = process.env.TEST_PASSWORD || '';


export const DB_SERVER = process.env.DB_SERVER || '';
export const DB_USER = process.env.DB_USER || '';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_DATABASE = process.env.DB_DATABASE || '';
export const DB_PORT = process.env.DB_PORT || '1433';

export const QUERY_BONUS_URL = process.env.QUERY_BONUS_URL || '';