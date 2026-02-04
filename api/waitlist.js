import { MongoClient } from 'mongodb'

const mongoUri = process.env.MONGODB_URI

if (!mongoUri) {
  throw new Error('MONGODB_URI environment variable is not set')
}

let cachedClient = null
let cachedDb = null

async function connectToDatabase() {
  if (cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const client = new MongoClient(mongoUri)
  await client.connect()

  const dbName = process.env.MONGODB_DB_NAME || 'zoqta'
  const db = client.db(dbName)

  cachedClient = client
  cachedDb = db

  return { client, db }
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Parse the request body
    const { firstName, lastName, email, company } = req.body

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return res.status(400).json({
        error: 'Missing required fields: firstName, lastName, email'
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }

    const normalizedEmail = email.toLowerCase()

    // Connect to MongoDB
    const { db } = await connectToDatabase()
    const collectionName =
      process.env.MONGODB_WAITLIST_COLLECTION || 'waitlist'
    const collection = db.collection(collectionName)

    // Check for duplicate email
    const existing = await collection.findOne({ email: normalizedEmail })
    if (existing) {
      return res
        .status(409)
        .json({ error: 'Email already exists in waitlist' })
    }

    const doc = {
      first_name: firstName,
      last_name: lastName,
      email: normalizedEmail,
      company: company || null,
      source: 'website',
      status: 'pending',
      created_at: new Date()
    }

    const result = await collection.insertOne(doc)

    // Success response
    return res.status(201).json({
      success: true,
      message: 'Successfully added to waitlist!',
      data: {
        id: result.insertedId,
        ...doc
      }
    })
  } catch (error) {
    console.error('Server error:', error)
    return res.status(500).json({
      error: 'Internal server error'
    })
  }
}