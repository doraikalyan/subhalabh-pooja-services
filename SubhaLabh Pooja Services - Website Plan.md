# SubhaLabh Pooja Services - Website Plan

## Project Overview
- **Domain**: Religious Services & Spiritual Ceremonies
- **Technology**: Next.js 15.3.3, TypeScript, Tailwind CSS
- **Deployment**: Static export for hosting
- **Target**: Hindu devotees seeking traditional religious services

## Website Structure

### 1. Homepage
- Hero section with spiritual imagery and main value proposition
- Featured services carousel
- Service categories grid (9 categories)
- About section highlighting expertise
- Testimonials/reviews section
- Contact information and CTA

### 2. Service Categories (9 Main Categories)
1. **Homam Services** - Fire rituals (6 services, ₹2,500-₹7,500)
2. **Pooja Services** - Worship ceremonies (4 services, ₹1,500-₹3,500)
3. **Pariharam Services** - Remedial rituals (5 services, ₹4,000-₹7,500)
4. **Japam Services** - Mantra chanting
5. **Abhishekam Services** - Sacred bathing
6. **Archana Services** - Flower offerings
7. **Temple Services** - Temple-specific rituals
8. **Astrology Services** - Consultations
9. **Vastu Services** - Architectural guidance

### 3. Service Detail Pages
Each service includes:
- Service title, description, and pricing
- Significance and benefits
- Materials required
- Step-by-step procedures
- Best time for ritual
- Associated deity
- FAQ section
- Package options (Basic/Premium)
- Booking CTA

### 4. Booking System (7-step process)
1. Service selection
2. Package selection (radio buttons)
3. Date picker (past dates disabled)
4. Time range selection
5. Contact information form
6. Booking confirmation
7. Success page with next steps

### 5. Admin Dashboard
- User management
- Booking management
- Analytics and reports
- Platform settings
- Quick stats overview

## Design Approach

### Visual Theme
- **Colors**: Traditional Indian colors (saffron, gold, deep red, white)
- **Typography**: Clean, readable fonts with Sanskrit-inspired headings
- **Imagery**: Hindu religious symbols, temple architecture, ritual items
- **Style**: Modern with traditional elements, spiritual and trustworthy

### Layout Principles
- Mobile-first responsive design
- Clean, organized information hierarchy
- Easy navigation with breadcrumbs
- Prominent CTAs for booking
- Loading states and smooth transitions

### Key Features
- Service search and filtering
- Price display in INR
- Image galleries for services
- FAQ sections
- Contact forms
- Social media integration
- SEO optimization

## Technical Implementation
- Next.js with static export
- TypeScript for type safety
- Tailwind CSS for styling
- Client-side routing
- Responsive design
- Image optimization
- Performance optimization (< 3 seconds load time)

## URL Structure
- `/` - Homepage
- `/services` - All services
- `/services/[category]` - Category pages
- `/services/[category]/[service]` - Service detail pages
- `/booking/[service]` - Booking pages
- `/dashboard/admin` - Admin dashboard

