import * as Dotenv from 'dotenv'
import * as Fs from 'fs'

if (Fs.existsSync('.env')) {
  Dotenv.config({ path: '.env' })
} else if (Fs.existsSync('.env')) {
  Dotenv.config({ path: '.env.production' })
}

export const ENVIRONMENT: string = process.env.NODE_ENV as string
export const MONGODB_URI: string = process.env.MONGODB_URI as string
