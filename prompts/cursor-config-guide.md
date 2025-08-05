# Advanced Cursor AI Configuration for Zoqta Website Development

## .cursorrules File Configuration

Create a `.cursorrules` file in your project root with the following configuration:

```
You are an expert Next.js 14 developer building a sophisticated AI company website for Zoqta. Always follow these guidelines:

TECH STACK:
- Next.js 14 with App Router and TypeScript
- Tailwind CSS with Shadcn/ui components  
- Framer Motion for animations
- Supabase for backend
- Stripe for payments
- Vercel for deployment

CODE STANDARDS:
- Use TypeScript with strict mode enabled
- Follow React Server Components patterns
- Implement proper error boundaries and loading states  
- Use semantic HTML with proper accessibility attributes
- Write clean, readable code with proper comments
- Follow Next.js best practices for performance

STYLING GUIDELINES:
- Mobile-first responsive design approach
- Use Tailwind utility classes with component composition
- Implement consistent spacing using Tailwind scale (4, 8, 16, 24, 32)
- Maintain 4.5:1 color contrast ratio for accessibility
- Use CSS Grid and Flexbox for layouts
- Implement smooth transitions and hover effects

UI/UX REQUIREMENTS:
- Clean, minimalist design inspired by UXPERT reference
- Professional color palette suitable for AI/tech company
- Clear visual hierarchy with proper typography scale
- Intuitive navigation with smooth scrolling
- Loading states for all async operations
- Error handling with user-friendly messages

PERFORMANCE:
- Optimize images with Next.js Image component
- Implement proper lazy loading
- Use dynamic imports for code splitting
- Minimize bundle size and eliminate unused code
- Target 90+ Lighthouse scores in all categories

SECURITY:
- Validate all user inputs
- Use environment variables for sensitive data
- Implement proper CORS and CSP headers
- Sanitize data before database operations
- Follow OWASP security guidelines

Always ask clarifying questions if requirements are unclear.
```

## Cursor AI Workspace Configuration

### Settings.json Configuration
Add these settings to your Cursor workspace:

```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  }
}
```

## Essential Cursor AI Prompts for Development

### 1. Component Creation Prompt
```
Create a [ComponentName] component for the Zoqta website following these requirements:
- Use TypeScript with proper interface definitions
- Implement responsive design with Tailwind CSS
- Add proper accessibility attributes (ARIA labels, semantic HTML)
- Include hover and focus states
- Add loading and error states if applicable
- Use Shadcn/ui components where appropriate
- Follow the established design system and color palette
- Add proper JSDoc comments

Component specifications:
[Describe specific requirements]
```

### 2. Page Development Prompt
```
Build a [PageName] page for the Zoqta website with:
- Next.js 14 App Router structure
- Server and Client Components separation
- Proper metadata for SEO
- Responsive layout using CSS Grid/Flexbox
- Framer Motion animations for page transitions
- Loading states and error boundaries
- Accessibility compliance (WCAG 2.1 AA)
- Performance optimization

Page requirements:
[Describe page content and functionality]
```

### 3. API Route Creation Prompt
```
Create an API route at /api/[routeName] for the Zoqta website that:
- Uses Next.js 14 App Router API structure
- Implements proper TypeScript types
- Includes input validation with Zod
- Handles errors gracefully with proper status codes
- Integrates with Supabase database
- Includes rate limiting
- Follows RESTful conventions
- Adds proper CORS headers

Functionality needed:
[Describe API requirements]
```

### 4. Database Integration Prompt
```
Set up Supabase integration for [specific feature] with:
- Proper TypeScript types generated from schema
- Row Level Security (RLS) policies
- Client-side and server-side data fetching
- Error handling and loading states
- Real-time subscriptions if needed
- Proper data validation
- Optimistic updates for better UX

Database requirements:
[Describe data structure and operations]
```

### 5. Animation Implementation Prompt
```
Implement animations for [component/section] using Framer Motion:
- Smooth page transitions and micro-interactions
- Scroll-triggered animations with proper performance
- Hover and focus state animations
- Stagger animations for lists/grids
- Respect user's motion preferences
- Optimize for 60fps performance
- Add proper cleanup for memory management

Animation specifications:
[Describe desired animation effects]
```

## Development Workflow Prompts

### For Starting a New Feature
```
I'm building [FeatureName] for the Zoqta website. Please help me:
1. Plan the component architecture and file structure
2. Define TypeScript interfaces and types
3. Create the basic component structure with proper imports
4. Implement responsive design with Tailwind CSS
5. Add accessibility features and semantic HTML
6. Include error handling and loading states
7. Add unit tests with Jest and React Testing Library

Feature requirements:
[Describe the feature in detail]
```

### For Debugging and Optimization
```
I'm experiencing [issue description] in my Zoqta website. Please help me:
1. Identify the root cause of the problem
2. Provide a step-by-step solution
3. Suggest performance optimizations
4. Recommend best practices to prevent similar issues
5. Update the code with proper error handling

Current code:
[Paste the problematic code]

Error details:
[Include error messages and stack traces]
```

### For Deployment and Configuration
```
Help me deploy the Zoqta website to production with:
1. Vercel deployment configuration
2. Environment variables setup
3. Custom domain configuration
4. Performance optimization for production
5. Security headers and CSP setup
6. Analytics and monitoring setup
7. CI/CD pipeline with GitHub Actions

Current setup:
[Describe current configuration]
```

## Advanced Prompting Techniques

### Context-Rich Prompts
Always provide context about:
- The specific section/component you're working on
- How it fits into the overall Zoqta brand and website
- User experience expectations
- Technical constraints and requirements
- Integration points with other components

### Iterative Development Approach
1. Start with basic structure and functionality
2. Add styling and responsive design
3. Implement animations and micro-interactions
4. Add accessibility features
5. Optimize performance
6. Add error handling and edge cases

### Code Review Prompts
```
Please review this code for the Zoqta website and provide feedback on:
1. Code quality and best practices
2. Performance implications
3. Accessibility compliance
4. Security considerations
5. Maintainability and readability
6. TypeScript usage and type safety
7. Next.js specific optimizations

Code to review:
[Paste your code]
```

## Project-Specific Considerations

### Brand Consistency
Always remind Cursor AI about:
- Zoqta's brand values (AI-first, speed over perfection, developer-focused)
- Design inspiration from UXPERT (clean, minimalist, professional)
- Target audience (engineering teams, developers, tech professionals)
- Business model (parent company with product incubators)

### Technical Requirements
Emphasize:
- Modern, elegant design without complexity
- Fast loading times and performance
- Developer-friendly architecture
- Scalability for future products
- Integration readiness for Stripe/Supabase

### Quality Standards
Maintain:
- 90+ Lighthouse scores
- WCAG 2.1 AA accessibility compliance
- Mobile-first responsive design
- TypeScript strict mode compliance
- Comprehensive error handling

This configuration will help Cursor AI understand your project context and provide more accurate, relevant assistance throughout the development process.