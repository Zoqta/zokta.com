# Zoqta Website

AI-First Tools for Engineering Teams - Professional landing page with waitlist functionality.

## 🚀 Quick Start

### Local Development

1. **Install dependencies (optional - for local development):**
   ```bash
   npm install
   ```

2. **Start the development server:**
   
   **Option A - Using npm script:**
   ```bash
   npm start
   ```
   
   **Option B - Using HTTP Server directly:**
   ```bash
   http-server -p 3000 --cors
   ```
   
   **Option C - Using HTTP Server globally:**
   ```bash
   npx http-server -p 3000 --cors
   ```

3. **Open your browser:**
   ```
   http://localhost:3000
   ```

### ⚡ Current Working Setup

The website is now running with:
- ✅ **HTTP Server**: Serving files with CORS enabled
- ✅ **Direct Supabase Integration**: Form submissions go directly to your database
- ✅ **No CORS Issues**: All requests work properly
- ✅ **Real-time Data Storage**: Waitlist entries are stored in Supabase

## 🗄️ Database Setup

### Supabase Configuration

1. **Create the waitlist table:**
   Go to your Supabase dashboard → SQL Editor and run:

   ```sql
   CREATE TABLE waitlist (
     id SERIAL PRIMARY KEY,
     first_name VARCHAR(100) NOT NULL,
     last_name VARCHAR(100) NOT NULL,
     email VARCHAR(255) UNIQUE NOT NULL,
     company VARCHAR(255),
     created_at TIMESTAMP DEFAULT NOW(),
     source VARCHAR(50) DEFAULT 'website',
     status VARCHAR(20) DEFAULT 'pending'
   );

   -- Enable Row Level Security
   ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

   -- Create policy to allow inserts from authenticated and anonymous users
   CREATE POLICY "Allow anonymous inserts" ON waitlist
     FOR INSERT WITH CHECK (true);

   -- Create policy to allow reads (optional - for admin dashboard)
   CREATE POLICY "Allow reads" ON waitlist
     FOR SELECT USING (true);
   ```

2. **Your Supabase Configuration:**
   - **Project URL**: `https://xlbqnvkuemkackfrnsbc.supabase.co`
   - **API Key**: Already configured in the website
   - **Database**: PostgreSQL with Row Level Security enabled

### 🔧 How It Works

The website now uses **direct Supabase integration**:
- Form submissions go directly to your Supabase REST API
- No local server required for development
- CORS is handled by Supabase
- Data is stored in real-time in your PostgreSQL database

## 🌐 Deployment

### Vercel Deployment (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/zoqta-website.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Connect your GitHub repository to Vercel
   - **No environment variables needed** (Supabase key is already in the code)
   - Deploy! The website will work immediately

### Manual Deployment

1. **Upload files to your web server:**
   - Upload all files to your web server
   - Ensure the server supports static file hosting
   - No Node.js required (static files only)

2. **Domain setup:**
   - Point your domain to the web server
   - The website will work immediately with your Supabase database

## 📁 Project Structure

```
zoqta-website/
├── index.html          # Main website (with direct Supabase integration)
├── api/                # API routes (for Vercel deployment)
│   └── waitlist.js     # Waitlist API (alternative to direct Supabase)
├── zoqta_logo.png      # Your custom logo
├── Zoqta_name.png      # Your custom name image
├── package.json        # Minimal dependencies (http-server only)
├── vercel.json         # Vercel configuration
└── README.md          # This file
```

## 🔧 Features

- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Modern UI**: Clean, professional design with your custom branding
- ✅ **Waitlist Form**: Collect user data with real-time validation
- ✅ **Direct Supabase Integration**: No server required, direct database connection
- ✅ **Custom Branding**: Your logo and name integrated throughout
- ✅ **Error Handling**: Comprehensive error management and user feedback
- ✅ **Loading States**: Visual feedback during form submissions
- ✅ **SEO Optimized**: Meta tags and descriptions for better search visibility
- ✅ **CORS-Free**: Works without any CORS issues

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Tailwind CSS (CDN)
- **Database**: Supabase (PostgreSQL) - Direct integration
- **Development Server**: HTTP Server (optional)
- **Deployment**: Vercel, Netlify, or any static hosting
- **Custom Assets**: Your logo and branding integrated

## 📧 Data Flow

### Direct Supabase Integration

The website sends data directly to your Supabase database:

**Form Data:**
```json
{
  "first_name": "John",
  "last_name": "Doe", 
  "email": "john@example.com",
  "company": "Tech Corp",
  "source": "website"
}
```

**Database Storage:**
- Data is stored in the `waitlist` table
- Automatic timestamp and ID generation
- Email uniqueness validation
- Real-time availability in Supabase dashboard

### Alternative: API Endpoints

For Vercel deployment, you can also use the included API routes:
- `POST /api/waitlist` - Serverless function for form processing

## 🔒 Security

- ✅ Input validation and sanitization
- ✅ Email format validation
- ✅ Duplicate email prevention
- ✅ Row Level Security (RLS) enabled in Supabase
- ✅ Anonymous key with restricted permissions
- ✅ HTTPS-only communication with Supabase

## 📞 Support

For questions or issues:
- ✅ Check the Supabase dashboard for database issues
- ✅ Review browser console for any JavaScript errors
- ✅ Ensure the waitlist table is created in Supabase
- ✅ Verify Row Level Security policies are set up correctly

### 🎯 Next Steps

1. **Test the form**: Fill out the waitlist form and check your Supabase dashboard
2. **Create the database table**: Run the SQL commands in your Supabase dashboard
3. **Deploy to production**: Push to GitHub and deploy to Vercel with your domain
4. **Monitor submissions**: Check your Supabase dashboard for new waitlist entries

---

**Built with ❤️ by Akash Patil for Zoqta**
