module.exports = {
    production: {
        client: 'pg',
        version: '9.6',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/config/database/migration'
        },
    },

    test: {
        client: 'mysql2',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: '123',
            database: 'teste'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: 'config/database/teste/migration'
        }
    },


}