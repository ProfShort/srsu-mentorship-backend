const pool = require('./db');
const fs = require('fs');
const path = require('path');

async function runMigrations() {
    try {
        const migrationSQL = fs.readFileSync(
            path.join(__dirname, 'migrations', 'add_ai_tables.sql'), 
            'utf8'
        );
        
        await pool.query(migrationSQL);
        console.log('Migrations completed successfully');
        process.exit(0);
    } catch (error) {
        console.error('Migration failed:', error);
        process.exit(1);
    }
}

runMigrations();
