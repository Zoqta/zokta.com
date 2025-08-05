# Zoqta AI Tools Parent Company Website - Cursor AI Development Prompt

## Project Overview
Build a sophisticated, elegant website for **Zoqta** - an AI-first parent company and product incubator founded by Akash Patil. The website should establish Zoqta as a maker of trustworthy, high-quality, developer-first AI tools while maintaining an intuitive and innovative design inspired by UXPERT's clean aesthetic.

## Company Context
- **Company Name**: Zoqta
- **Founder**: Akash Patil  
- **Domain**: zoqta.com (Parent site)
- **Mission**: Build and launch practical, AI-first tools that solve real problems for engineering and productivity-focused teams
- **Vision**: Incubate and scale AI-powered tools under one parent brand with modular solutions
- **First Product**: Slack bot + dashboard for engineering teams (GitHub integration, review management)

## Tech Stack Requirements
- **Frontend**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS + Shadcn/ui components
- **Deployment**: Vercel
- **Backend**: Supabase (auth, database)
- **Payments**: Stripe integration ready
- **CI/CD**: GitHub Actions
- **Additional**: TypeScript, ESLint, Prettier

## Design Philosophy & Brand Requirements

### Brand Values (integrate throughout)
- AI-first by design
- Speed over perfection  
- Tool-driven, not platform-locked
- Real utility over hype
- Respect developer time

### Visual Style (inspired by UXPERT reference)
- **Layout**: Clean, minimalist with purposeful white space
- **Typography**: Modern, readable sans-serif with strong hierarchy
- **Color Palette**: Professional with elegant accent colors (suggest modern tech palette)
- **Navigation**: Clean, intuitive menu structure
- **Sections**: Well-defined content blocks with clear separation
- **Interactive Elements**: Subtle animations and micro-interactions

### UI/UX Requirements
- Responsive design (mobile-first approach)
- Fast loading times (optimized images, code splitting)
- Accessible (WCAG 2.1 AA compliance)
- SEO-optimized structure
- Modern 2025 design trends integration

## Website Structure & Content

### Homepage Sections

#### 1. Hero Section
- Bold headline about Zoqta's mission
- Subheading about AI-first tools for engineering teams
- Primary CTA button (e.g., "Explore Our Tools" or "Get Started")
- Clean background with subtle tech/AI visual elements

#### 2. About Section ("WHO WE ARE" - inspired by UXPERT)
- Company mission and vision
- Founder introduction (Akash Patil)
- Core values presentation
- Brief company story and philosophy

#### 3. What We Do Section ("WHAT WE DO")
- **Product Incubation**: Building focused AI tools
- **Shared Infrastructure**: Common backend systems
- **Lean Launch Model**: Rapid prototype to market
- **Brand Architecture**: Separate microsites under parent brand

#### 4. Our Approach Section
- Development methodology
- Tech stack and infrastructure
- Quality assurance and reliability
- Developer-first principles

#### 5. Products/Portfolio Section ("OUR WORK" - inspired by UXPERT)
- Current products (starting with Slack bot)
- Coming soon products (with waitlist signup)
- Case studies and success stories
- Product feature highlights

#### 6. Why Zoqta Section
- Competitive advantages
- Trust and reliability indicators
- Developer testimonials
- Technical expertise showcase

#### 7. Contact/Get Started Section
- Contact information
- Partnership inquiries
- Developer resources
- Social links and community

### Additional Pages Structure
- `/about` - Detailed company information
- `/products` - Product portfolio
- `/blog` - Technical blog and updates
- `/contact` - Contact form and information
- `/privacy` - Privacy policy
- `/terms` - Terms of service

## Technical Implementation Instructions

### Setup & Configuration
```bash
# Initialize Next.js project with TypeScript
npx create-next-app@latest zoqta-website --typescript --tailwind --eslint --app

# Install additional dependencies
npm install @radix-ui/react-* @headlessui/react framer-motion lucide-react
npm install @supabase/supabase-js stripe @stripe/stripe-js
npm install @next/mdx gray-matter remark remark-html
```

### Project Structure
```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   ├── products/
│   ├── blog/
│   └── contact/
├── components/
│   ├── ui/ (shadcn components)
│   ├── sections/
│   ├── layout/
│   └── common/
├── lib/
│   ├── utils.ts
│   ├── supabase.ts
│   └── stripe.ts
└── styles/
    └── globals.css
```

### Key Components to Build

#### 1. Header/Navigation
- Responsive navigation menu
- Logo and branding
- Mobile hamburger menu
- Smooth scroll navigation

#### 2. Hero Section
- Animated text reveals
- CTA button with hover effects
- Background graphics/patterns
- Responsive layout

#### 3. Feature Sections
- Icon-based feature cards
- Animated on-scroll reveals
- Grid layouts with proper spacing
- Mobile-responsive design

#### 4. Product Showcase
- Interactive product cards
- Modal/drawer details
- Screenshots and demos
- Coming soon states

#### 5. Footer
- Multi-column layout
- Social links
- Legal links
- Newsletter signup

### Styling Guidelines

#### Colors (create custom Tailwind theme)
```javascript
// tailwind.config.js example
theme: {
  extend: {
    colors: {
      primary: {
        50: '#...',
        500: '#...',  // Main brand color
        900: '#...'
      },
      secondary: {
        // Complementary colors
      },
      neutral: {
        // Grays for text and backgrounds
      }
    }
  }
}
```

#### Typography
- Use modern font stack (Inter, Geist, or similar)
- Clear hierarchy with consistent sizing
- Proper line heights and spacing
- Responsive text sizing

#### Animations
- Framer Motion for page transitions
- Scroll-triggered animations
- Hover effects on interactive elements
- Loading states and micro-interactions

## Development Best Practices

### Performance
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Bundle analysis and optimization
- Core Web Vitals optimization

### SEO
- Proper meta tags and Open Graph
- Structured data markup
- XML sitemap generation
- Page speed optimization

### Accessibility
- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Color contrast compliance

### Security
- Environment variables for sensitive data
- Content Security Policy headers
- Input sanitization
- Rate limiting for forms

## Deployment Configuration

### Vercel Setup
```bash
# Deploy to Vercel
npx vercel

# Environment variables to set in Vercel dashboard:
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
```

### GitHub Actions (CI/CD)
- Automated testing on PR
- Build verification
- Deployment to Vercel
- Code quality checks

## Integrations Setup

### Supabase
- User authentication system
- Contact form submissions
- Newsletter signups
- Analytics tracking

### Stripe (for future products)
- Payment processing setup
- Subscription management
- Webhook handling
- Customer portal

## Action Steps & Weekly Plan

### Week 1: Foundation & Setup
- [ ] Initialize Next.js project with proper configuration
- [ ] Set up Tailwind CSS and design system
- [ ] Create basic project structure and components
- [ ] Implement header/navigation and footer
- [ ] Set up development environment and tools

### Week 2: Core Pages Development
- [ ] Build homepage hero section and main content
- [ ] Develop about and services sections
- [ ] Create responsive layouts and mobile optimization
- [ ] Implement basic animations and interactions
- [ ] Add placeholder content and images

### Week 3: Advanced Features & Integration
- [ ] Integrate Supabase for backend functionality
- [ ] Add contact forms and newsletter signup
- [ ] Implement blog system (if needed)
- [ ] Set up analytics and tracking
- [ ] Add SEO optimization and meta tags

### Week 4: Polish & Deployment
- [ ] Final design refinements and testing
- [ ] Performance optimization and accessibility audit
- [ ] Deploy to Vercel with proper configuration
- [ ] Set up custom domain and SSL
- [ ] Launch and post-launch monitoring

## Specific Cursor AI Instructions

### When Building Components:
1. Use TypeScript with proper type definitions
2. Implement responsive design with Tailwind classes
3. Add proper accessibility attributes
4. Include loading states and error handling
5. Use semantic HTML structure

### For Styling:
1. Follow mobile-first responsive design
2. Use consistent spacing with Tailwind scale
3. Implement dark mode support if requested
4. Add hover and focus states for all interactive elements
5. Ensure proper color contrast ratios

### For Functionality:
1. Add proper form validation and error handling
2. Implement loading states for async operations
3. Use React best practices (hooks, context, etc.)
4. Add proper error boundaries
5. Include analytics tracking events

### Code Quality:
1. Use ESLint and Prettier for code formatting
2. Add proper comments for complex logic
3. Implement proper error handling
4. Use environment variables for configuration
5. Follow Next.js best practices for performance

## Success Criteria
- Website loads in under 3 seconds
- Mobile-friendly and responsive across all devices
- Professional appearance matching UXPERT's quality level
- SEO-optimized with proper meta tags
- Accessible to users with disabilities
- Ready for future product integrations
- Scalable architecture for additional pages/features

Build this website step-by-step, focusing on clean, maintainable code and exceptional user experience. The final result should position Zoqta as a premium AI tools company that developers trust and want to work with.