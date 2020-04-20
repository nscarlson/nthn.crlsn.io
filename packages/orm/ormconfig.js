require('dotenv').config()

const config = {
    name: 'default',
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: false,
    logging: false,
    entities: ['build/entity/**/*.js'],
    migrations: ['build/migration/**/*.js'],
    cli: {
        entitiesDir: 'src/entity',
        migrationsDir: 'src/migration',
    },
}

if (process.env.POSTGRES_HOST !== 'localhost') {
    config.ssl = {
        rejectUnauthorized: true,
        ca: process.env.POSTGRES_CERT,
    }
}

module.exports = config
