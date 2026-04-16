# shah.knits Crochet Landing Page - Product Requirements Document

## Original Problem Statement
Build a simple landing page for crochet business "shah.knits" with:
- Product catalog with prices
- Cute aesthetic website design
- Instagram handle: @shah.knits
- Phone number: 9160188322
- Order placement through Instagram DM

## User Personas
- **Primary User**: Young women (18-35) interested in handmade, artisanal fashion accessories
- **Secondary User**: Gift shoppers looking for unique, handcrafted items

## Core Requirements (Static)
1. **Design Aesthetic**: Soft pastel colors (pink, lavender, mint, cream) with handmade & artisanal vibe
2. **Sections**: Hero, Categorized Products with carousel, Instagram CTA, Contact
3. **Products**: 14 crochet items including hair clips, claw clips, and accessories
4. **Contact Methods**: Instagram (@shah.knits) and Phone (9160188322)
5. **Typography**: Playfair Display (headings) + Inter (body text)

## What's Been Implemented (December 2025)

### Frontend (Completed - Dec 2025)
- ✅ Hero section with pastel yarn balls image and brand messaging
- ✅ Sticky navigation header with Instagram follow button
- ✅ **UPDATED: Product catalog with 20 handcrafted items from PDF** organized in 4 categories:
  - **Hair Clips (7 items)**: Floral Clip ₹95, Cute Angry Clip ₹155, Cherry Bow Clip ₹175, Tulip Clutch Clip ₹190, Sunflower Clutch Clip ₹190, Daisy Pinteresty Clip ₹230, Daisy Clutch Clip ₹230
  - **Claw Clips (6 items)**: Rosy Charm ₹125, Daisy ₹145, Sunflower ₹145, Beige ₹155, Cocoa ₹195
  - **Keychains (3 items - NEW)**: Cookie Keychain ₹150, Daisy Keychain ₹150, Tulip Keychain ₹200
  - **Accessories (4 items)**: Floral Airpods Pouch ₹220, Forever Gajra ₹380, Skyview Blossom ₹499, Loop Love Bag ₹699, Enchanted Lavender Whispers ₹699
- ✅ Category tabs with filtering functionality (5 tabs: All + 4 categories)
- ✅ Product cards showing name, description, and price (NO order buttons per user request)
- ✅ **Individual product images using high-quality crochet photos** (instead of catalog sheets)
- ✅ Instagram CTA section with pink gradient background and image carousel
- ✅ Contact section with Instagram DM and Phone call options
- ✅ Footer with brand information and social links
- ✅ Responsive design with mobile optimization
- ✅ Soft pastel color palette implementation
- ✅ Custom fonts (Playfair Display + Inter)

### Design Features Implemented
- Handmade & artisanal aesthetic with serif headings
- Soft pastel gradient backgrounds
- Smooth transitions and hover effects on product cards
- Backdrop blur on sticky header
- Shadow effects and rounded corners
- Pink accent color (#ec4899) for CTAs and interactive elements

## Tech Stack
- **Frontend**: React 19.0.0, React Router DOM 7.5.1
- **UI Components**: Shadcn UI (Tabs, Cards, Buttons, Carousel)
- **Styling**: Tailwind CSS 3.4.17 with custom color palette
- **Icons**: Lucide React
- **Backend**: FastAPI (not yet implemented)
- **Database**: MongoDB (not yet implemented)

## Next Tasks
1. **P0 - Critical**:
   - No backend implementation needed (static landing page as requested)
   
2. **P1 - High Priority** (Future Enhancements):
   - Add product image optimization
   - Implement analytics tracking
   - Add WhatsApp ordering option
   - Create custom order inquiry form

3. **P2 - Nice to Have**:
   - Add customer testimonials section
   - Implement product reviews
   - Add blog/care instructions section
   - Multi-language support

## Product Data Structure (Mock)
```javascript
{
  id: number,
  name: string,
  price: number (in INR),
  category: 'hair-clips' | 'claw-clips' | 'accessories',
  image: string (URL),
  description: string
}
```

## Color Palette
- Pink: #fdf2f8 (50), #fce7f3 (100), #ec4899 (500), #db2777 (600)
- Lavender: #faf5ff (50), #f3e8ff (100), #e9d5ff (200)
- Cream: #fefce8 (50)
- Neutral: Gray scale for text and backgrounds

## Files Created
- `/app/frontend/src/pages/Home.jsx` - Main landing page component
- `/app/frontend/src/data/mockProducts.js` - Product catalog data
- `/app/frontend/src/App.js` - Updated routing
- `/app/frontend/src/index.css` - Custom fonts and global styles
- `/app/frontend/tailwind.config.js` - Custom color palette
