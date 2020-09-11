import path from 'path'

import { DATABASE, DATABASE_TEST } from '../config'

export const development = {
  client: 'mysql',
  connection: DATABASE,
  migrations: {
    directory: path.resolve(__dirname, 'migrations')
  }
}

export const production = {
  client: 'mysql',
  connection: DATABASE,
  migrations: {
    directory: path.resolve(__dirname, 'migrations')
  }
}

export const test = {
  client: 'mysql',
  connection: DATABASE_TEST,
  migrations: {
    directory: path.resolve(__dirname, 'migrations')
  }
}

const knex = {
  development,
  production,
  test
}

export default knex
