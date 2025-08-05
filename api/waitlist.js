import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xlbqnvkuemkackfrnsbc.supabase.co'
const supabaseKey = process.env.SUPABASE_ANON_KEY

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

    // Initialize Supabase client
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Insert data into the waitlist table
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          email: email.toLowerCase(),
          company: company || null,
          source: 'website'
        }
      ])
      .select()

    if (error) {
      // Handle duplicate email error
      if (error.code === '23505') {
        return res.status(409).json({ 
          error: 'Email already exists in waitlist' 
        })
      }
      
      console.error('Supabase error:', error)
      return res.status(500).json({ 
        error: 'Failed to add to waitlist' 
      })
    }

    // Success response
    return res.status(201).json({
      success: true,
      message: 'Successfully added to waitlist!',
      data: data[0]
    })

  } catch (error) {
    console.error('Server error:', error)
    return res.status(500).json({ 
      error: 'Internal server error' 
    })
  }
} 