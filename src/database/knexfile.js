import path from 'path'

import { DATABASE, DATABASE_TEST } from '../config'

// export const development = {
//   client: 'mysql',
//   connection: DATABASE,
//   migrations: {
//     directory: path.resolve(__dirname, 'migrations')
//   }
// }

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


export const development = {
  client: 'mysql',
  connection: {
    host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
    user: 'sagan_marina',
    password: 'rWQCIrgZ6bWa',
    database: 'sagan_marina_db'
  },
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
