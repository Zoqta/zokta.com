import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI

let cachedClient
let cachedDb

export async function getDb() {
  if (!uri) throw new Error('MONGODB_URI environment variable is not set')

  if (cachedDb) return cachedDb

  cachedClient = new MongoClient(uri)
  await cachedClient.connect()
  cachedDb = cachedClient.db(process.env.MONGODB_DB_NAME || 'zoqta')
  return cachedDb
}
