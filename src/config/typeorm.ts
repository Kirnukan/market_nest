import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function getOrmConfig(): TypeOrmModuleOptions {
  const config = new ConfigService();

  return {
    type: 'postgres',
    host: config.get('DB_HOST'),
    port: +config.get('DB_PORT'),
    username: config.get('DB_USER'),
    password: config.get('DB_PASSWORD'),
    database: config.get('DB_NAME'),
    entities: ['../modules/**/*.entity.{ts,js}'],
    migrations: ['../migrations/*.{ts,js}'],
    migrationsTableName: 'migrations',
    namingStrategy: new SnakeNamingStrategy(),
    logging: 'all',
    cli: {
      migrationsDir: '../migrations',
    },
    migrationsRun: true,
  };
}
