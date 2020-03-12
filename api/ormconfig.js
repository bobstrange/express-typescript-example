const config = require('config')
const dbConfig = config.get('db')

const typeOrmConfigs = {
  type: dbConfig.type,
  host: process.env.DB_HOSTNAME || dbConfig.host,
  port: parseInt(process.env.DB_PORT) || dbConfig.port,
  username: process.env.DB_USERNAME || dbConfig.username,
  password: process.env.DB_PASSWORD || dbConfig.password,
  database: process.env.DB_DATABASE_NAME || dbConfig.database_name,
  entities: [__dirname + '/src/entities/*.entity.{js,ts}'],
  migrations: [__dirname + '/src/db/migrations/**/*.migration.{js,ts}'],
  synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize,
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/db/migrations'
  }
}

module.exports = typeOrmConfigs
