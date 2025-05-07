import * as mssql from './mssql';
import fs from 'fs';
import { QUERY_BONUS_URL } from '../env';


const getUrls = async () => {
    const query = QUERY_BONUS_URL;
    const result = await mssql.executeQuery(query);
    return result.map((row: { bonus_url: string }) => row.bonus_url);
}


export const main = async () => {  
    const urls: string[] = await getUrls();
    let content = 'export const bonusUrl = [\n';
    urls.forEach((url: string) => {
        content += `  "${url}",\n`;
    });
    content += '];\n';
    fs.writeFileSync('utils/bonus-urls.ts', content, 'utf8');
    console.log('Bonus URLs generated successfully!');

    return urls;
}
