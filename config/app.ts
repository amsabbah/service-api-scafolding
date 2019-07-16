export class AppConfig {
    static port: number = parseInt(process.env.APP_PORT || '') || 3000
}