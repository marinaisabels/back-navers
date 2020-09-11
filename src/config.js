/* eslint-disable prettier/prettier */
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(__dirname, '../.env')
})

export const JWT_SECRET = process.env.SECRET || 'mysupersecret'
export const PORT = process.env.PORT || 3000
export const DATABASE =
  process.env.DATABASE_URL || 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com'
export const DB_USER =
  process.env.DB_USER = "sagan_marina"
export const DATABASE_NAME =
  process.env.DATABASE_NAME = "sagan_marina_db"
export const DB_PASSWORD =
  process.env.DB_PASSWORD = "rWQCIrgZ6bWa"
export const DATABASE_TEST =
  process.env.DATABASE_TEST ||
  'postgres://USER:PASSWORD@localhost:5432/DATABASE_TEST'
export const NODE_ENV = process.env.NODE_ENV || 'development'
export const BUCKET_TYPE = process.env.BUCKET_TYPE || 'firebase'
export const URL_FRONT = process.env.URL_FRONT || 'localhost'
export const EXPIRE_TIME = process.env.EXPIRE_TIME || '5d'
