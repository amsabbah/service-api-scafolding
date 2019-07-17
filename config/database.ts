export class DatabaseConfig {
    static uri: string = process.env.DB_URI || 'mongodb://localhost:27017/test';
}