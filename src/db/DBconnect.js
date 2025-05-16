import { join } from 'node:path';
import db from './index.js';
import { readFileSync } from 'node:fs';

export async function connectDB() {
    try {
        const filePath = join ('src/db/init.sql');
        const sql = readFileSync(filePath, 'utf-8');
        await db.query(sql);
        console.log('Table created successfully!');
    } catch (error) {
        console.log(`Error on creating tables: ${error}`);
    }
}