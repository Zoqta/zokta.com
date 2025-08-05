# Complete Website Redesign Prompt for Cursor AI

## Urgent Design Issues to Address

Looking at your current Zoqta website, I can see several critical design problems that need immediate attention:

### ❌ Current Problems Identified:
1. **Poor Layout Structure** - Elements are misaligned and scattered
2. **Inconsistent Spacing** - No proper spacing system in place
3. **Typography Issues** - Poor font hierarchy and readability
4. **Mobile Responsiveness** - Layout breaks on different screen sizes
5. **Visual Hierarchy** - No clear focus or content prioritization
6. **Color Scheme** - Lacks professional cohesion
7. **Component Alignment** - Headers, sections, and content blocks are poorly positioned

---

## COMPLETE REDESIGN INSTRUCTIONS FOR CURSOR AI

**IMPORTANT**: We're starting from scratch. Ignore all previous code and create a completely new, professional website.

### 🎯 Design Direction
Create a **clean, modern, professional** website inspired by successful AI companies like:
- Linear.app (clean, minimal interface)
- Vercel.com (professional developer focus)
- Stripe.com (elegant, trustworthy design)
- OpenAI.com (sophisticated AI company aesthetic)

### 🎨 Visual Design System

#### Color Palette
```css
/* Primary Colors */
--primary: #0066FF;        /* Professional blue */
--primary-dark: #0052CC;   /* Darker blue for hover states */
--primary-light: #E6F2FF;  /* Light blue for backgrounds */

/* Neutral Colors */
--gray-900: #0A0A0A;       /* Almost black for headings */
--gray-800: #1A1A1A;       /* Dark gray for text */
--gray-700: #2D2D2D;       /* Medium gray */
--gray-300: #D1D5DB;       /* Light gray for borders */
--gray-100: #F9FAFB;       /* Very light gray for backgrounds */
--white: #FFFFFF;          /* Pure white */

/* Accent Colors */
--success: #10B981;        /* Green for success states */
--warning: #F59E0B;        /* Orange for warnings */
```

#### Typography
```css
/* Font Stack */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Type Scale */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */
```

#### Spacing System
```css
/* 8-point spacing system */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### 📐 Layout Structure

#### Header/Navigation
```
- Clean, minimal header with proper alignment
- Logo on the left, navigation menu centered, CTA button on right
- Sticky navigation with subtle background blur
- Mobile-responsive hamburger menu
- Proper spacing: 64px height, 24px internal padding
```

#### Hero Section
```
LAYOUT:
- Container: max-width 1200px, centered
- Grid: 60% content / 40% visual
- Vertical alignment: center
- Spacing: 120px top/bottom padding

CONTENT:
- Headline: text-5xl (48px), font-weight 700, gray-900
- Subheading: text-xl (20px), font-weight 400, gray-700
- CTA buttons: Primary + Secondary with proper spacing
- Visual: Clean illustration or abstract graphic
```

#### Content Sections
```
STRUCTURE:
- Each section: 96px top/bottom padding
- Container: max-width 1200px, centered
- Grid systems: Use CSS Grid, not floats
- Consistent 32px spacing between elements

ALIGNMENT:
- All text left-aligned (easier to read)
- Images and graphics right-aligned or centered
- Buttons aligned to content start, not center
```

### 🛠 Technical Implementation

#### CSS Framework
```html
<!-- Use modern CSS approach -->
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.0/dist/tailwind.min.css" rel="stylesheet">
<!-- OR write custom CSS with CSS Grid and Flexbox -->
```

#### Responsive Breakpoints
```css
/* Mobile First Approach */
/* Base styles: 320px and up */

@media (min-width: 640px) {
  /* Small tablets and large phones */
}

@media (min-width: 768px) {
  /* Tablets (768px and up) */
}

@media (min-width: 1024px) {
  /* Desktops (1024px and up) */
}

@media (min-width: 1280px) {
  /* Large desktops (1280px and up) */
}
```

### 📱 Page Structure

#### 1. Homepage Layout
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zoqta - AI-First Tools for Engineering Teams</title>
    <link href="styles.css" rel="stylesheet">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <nav class="nav-container">
            <div class="logo">Zoqta</div>
            <ul class="nav-menu">
                <li><a href="#about">About</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#approach">Approach</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button class="cta-button">Get Started</button>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>AI-First Tools for Engineering Teams</h1>
                <p>We build practical, focused AI tools that solve real problems for engineering and productivity-focused teams — faster, smarter, and at scale.</p>
                <div class="hero-buttons">
                    <button class="btn-primary">Explore Our Tools</button>
                    <button class="btn-secondary">Learn More</button>
                </div>
            </div>
            <div class="hero-visual">
                <!-- Add clean illustration or abstract graphic -->
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="about">
        <div class="container">
            <div class="section-header">
                <h2>Who We Are</h2>
                <p>Building the future of AI-powered productivity tools</p>
            </div>
            <div class="about-content">
                <!-- Content grid layout -->
            </div>
        </div>
    </section>

    <!-- Continue with other sections... -->
</body>
</html>
```

### 🎯 Specific Fixes Needed

#### 1. Typography Hierarchy
```css
/* Implement proper heading hierarchy */
h1 { 
    font-size: 3rem; 
    font-weight: 700; 
    line-height: 1.1; 
    margin-bottom: 1.5rem; 
}

h2 { 
    font-size: 2.25rem; 
    font-weight: 600; 
    line-height: 1.2; 
    margin-bottom: 1rem; 
}

h3 { 
    font-size: 1.875rem; 
    font-weight: 600; 
    line-height: 1.3; 
    margin-bottom: 0.75rem; 
}

p { 
    font-size: 1.125rem; 
    line-height: 1.6; 
    margin-bottom: 1rem; 
}
```

#### 2. Alignment System
```css
/* Use CSS Grid for main layouts */
.hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    min-height: 80vh;
}

/* Use Flexbox for component alignment */
.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}

/* Consistent container system */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}
```

#### 3. Button System
```css
.btn-primary {
    background: var(--primary);
    color: white;
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-1px);
}

.btn-secondary {
    background: transparent;
    color: var(--primary);
    padding: 0.75rem 2rem;
    border: 2px solid var(--primary);
    border-radius: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
}
```

### 📋 Step-by-Step Implementation

#### Phase 1: Foundation (30 minutes)
1. **Reset and Clean Slate**
   ```
   - Delete all existing CSS
   - Start with a proper CSS reset
   - Set up the design system variables
   - Create base typography styles
   ```

2. **Layout Structure**
   ```
   - Build the header/navigation
   - Create the hero section
   - Set up proper container system
   - Implement CSS Grid/Flexbox layouts
   ```

#### Phase 2: Content Sections (45 minutes)
1. **Section by Section**
   ```
   - About section with proper grid
   - Services/What We Do section
   - Products showcase
   - Why Choose Zoqta section
   ```

2. **Typography and Spacing**
   ```
   - Apply consistent heading hierarchy
   - Implement 8-point spacing system
   - Ensure proper line heights and margins
   ```

#### Phase 3: Polish and Responsive (30 minutes)
1. **Mobile Optimization**
   ```
   - Test on mobile breakpoints
   - Adjust grid layouts for mobile
   - Optimize typography scaling
   ```

2. **Final Touches**
   ```
   - Add subtle animations/transitions
   - Implement hover states
   - Final alignment checks
   ```

### 🚨 Critical Requirements

1. **NO FLOATS** - Use CSS Grid and Flexbox only
2. **CONSISTENT SPACING** - Follow the 8-point system religiously
3. **MOBILE FIRST** - Design for mobile, then scale up
4. **PROPER ALIGNMENT** - Everything should line up perfectly
5. **READABLE TYPOGRAPHY** - Clear hierarchy, proper line heights
6. **PROFESSIONAL COLOR SCHEME** - Stick to the defined palette

### 🔍 Testing Checklist

Before considering the design complete:

- [ ] All elements align properly on desktop (1920px)
- [ ] Layout works perfectly on tablet (768px)
- [ ] Mobile design is clean and usable (375px)
- [ ] Typography hierarchy is clear and readable
- [ ] Spacing is consistent throughout
- [ ] Colors follow the defined system
- [ ] Buttons and interactive elements work properly
- [ ] Navigation is intuitive and accessible

### 💡 Success Criteria

The redesigned website should:
- Look as professional as Stripe, Linear, or Vercel
- Have perfect alignment and spacing
- Be fully responsive across all devices
- Load fast and perform well
- Convey trust and expertise in AI tools
- Convert visitors into leads

---

## FINAL INSTRUCTIONS FOR CURSOR AI

**Start completely fresh. Ignore all previous attempts.** 

Create a modern, professional website that positions Zoqta as a premium AI tools company. Focus on:

1. **Clean, minimal design** with plenty of whitespace
2. **Perfect alignment** using CSS Grid and Flexbox
3. **Professional typography** with clear hierarchy
4. **Consistent spacing** following the 8-point system
5. **Mobile-first responsive design**
6. **Fast loading performance**

Build this systematically, section by section, testing alignment and responsiveness at each step. The final result should look like it was designed by a top-tier design agency.

**No shortcuts. No compromises. Professional quality only.**