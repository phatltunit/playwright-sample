import dotenv from 'dotenv';
dotenv.config({ path: process.env.ENV_FILE || '.env' });


export const BASE_URL = process.env.BASE_URL || '';
export const LOGIN_PAGE_URL = BASE_URL + '/login';
export const MAIN_PAGE_URL = BASE_URL + '/agent/main';


export const TEST_USER = process.env.TEST_USERNAME || '';
export const TEST_PASSWORD = process.env.TEST_PASSWORD || '';