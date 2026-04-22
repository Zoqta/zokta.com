import { getDb } from '../../../lib/mongodb'

export async function POST(request) {
  try {
    const { firstName, lastName, email, company } = await request.json()

    if (!firstName || !lastName || !email) {
      return Response.json(
        { error: 'Missing required fields: firstName, lastName, email' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Invalid email format' }, { status: 400 })
    }

    const normalizedEmail = email.toLowerCase()
    const db = await getDb()
    const collection = db.collection(
      process.env.MONGODB_WAITLIST_COLLECTION || 'waitlist'
    )

    const exists = await collection.findOne({ email: normalizedEmail })
    if (exists) {
      return Response.json(
        { error: 'Email already exists in waitlist' },
        { status: 409 }
      )
    }

    const doc = {
      first_name: firstName,
      last_name: lastName,
      email: normalizedEmail,
      company: company || null,
      source: 'website',
      status: 'pending',
      created_at: new Date(),
    }

    const result = await collection.insertOne(doc)
    return Response.json(
      {
        success: true,
        message: 'Successfully added to waitlist!',
        data: { id: result.insertedId, ...doc },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Server error:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export function GET() {
  return Response.json({ error: 'Method not allowed' }, { status: 405 })
}
