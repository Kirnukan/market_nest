import { getOrmConfig } from './typeorm';

export default [
  {
    name: 'migrations:generate',
    ...getOrmConfig(),
    entities: ['../modules/**/*.entity.{ts,js}'],
  },
  {
    name: 'migrations:create-run-revert',
    ...getOrmConfig(),
    migrations: ['../migrations/*.{ts,js}'],
  },
];
