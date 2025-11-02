# 82 Gym & Fitness Studio Website

A modern, responsive one-page website for 82 Gym & Fitness Studio located in Lalitpur, Nepal.

## Features

- Modern black, grey, and teal color scheme
- Fully responsive design
- Smooth scrolling navigation
- EmailJS contact form integration
- Google Maps location integration
- Social media links (Instagram, Email, Phone)
- SEO optimized with meta tags

## Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Create a new repository on GitHub (e.g., `82gym`)
2. Initialize it with the files from this project

### Step 2: Update URLs

Before deploying, replace `yourusername` with your actual GitHub username in these files:

- `index.html` (lines 16, 19, 23, 26 - Open Graph and Twitter meta tags)
- `robots.txt` (line 5 - Sitemap URL)
- `sitemap.xml` (all `<loc>` tags)

### Step 3: Configure EmailJS

**IMPORTANT: EmailJS credentials are now secured and NOT committed to git.**

#### Local Development:
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template
4. Copy `config.example.js` to `config.js`:
   ```bash
   cp assets/js/config.example.js assets/js/config.js
   ```
5. Edit `assets/js/config.js` with your actual EmailJS credentials:
   ```javascript
   const CONFIG = {
       EMAILJS_SERVICE_ID: 'service_abc123',     // Your service ID
       EMAILJS_TEMPLATE_ID: 'template_xyz789',   // Your template ID
       EMAILJS_PUBLIC_KEY: 'user_ABCdef123XYZ'   // Your public key
   };
   ```
6. `assets/js/config.js` is gitignored and will NOT be committed

#### GitHub Pages Deployment:
For GitHub Pages, you have two options:

**Option 1 (Quick)**: Update the default values in `assets/js/script.js` before deployment
- Edit `assets/js/script.js` lines 18-22 with your actual credentials
- Only do this right before deploying (don't commit sensitive values to public repos)

**Option 2 (Recommended)**: Use GitHub Secrets and build process
- Store credentials in GitHub repository secrets
- Use GitHub Actions to inject them during build

### Step 4: Enable GitHub Pages

1. Go to your repository Settings
2. Navigate to "Pages" section
3. Under "Source", select "main" branch
4. Click Save
5. Your site will be available at: `https://yourusername.github.io/82gym/`

### Step 5: Optimize Images (Recommended)

- Compress `assets/images/logo.jpg` using tools like [TinyPNG](https://tinypng.com/)
- Recommended size: under 200KB
- Create a favicon.ico file (16x16 and 32x32 pixel versions)

### Step 6: Custom Domain (Optional)

1. Purchase a domain name
2. Add a `CNAME` file with your domain
3. Configure DNS settings with your domain provider
4. Add the custom domain in GitHub Pages settings

## File Structure

```
82gym/
├── index.html            # Main HTML file
├── robots.txt            # Search engine crawler instructions
├── sitemap.xml           # SEO sitemap
├── .nojekyll             # GitHub Pages configuration
├── .gitignore            # Git ignore rules (protects sensitive files)
├── .env.example          # Environment variables template
├── README.md             # This file
├── SECURITY.md           # Security documentation
└── assets/
    ├── css/
    │   └── styles.css    # Main stylesheet
    ├── js/
    │   ├── script.js     # JavaScript (EmailJS integration, form validation)
    │   ├── config.example.js  # EmailJS config template (copy to config.js)
    │   └── config.js     # (gitignored) Your actual EmailJS credentials
    ├── images/
    │   └── logo.jpg      # Gym logo
    └── fonts/            # Custom fonts (if needed)
```

## Security Features

✓ **EmailJS credentials protected** - Not committed to git (use config.js)
✓ **Content Security Policy** - XSS protection
✓ **Form validation** - Client-side input validation
✓ **Subresource Integrity** - Verified CDN scripts
✓ **Security headers** - X-Frame-Options, X-Content-Type-Options, Referrer-Policy

## Pre-Deployment Checklist

### Required Tasks (Must Complete):
- [ ] **Replace placeholder URLs** (`yourusername` → your GitHub username)
  - [ ] `index.html` lines 16, 19, 23, 26
  - [ ] `robots.txt` line 5
  - [ ] `sitemap.xml` all `<loc>` tags
- [ ] **Configure EmailJS credentials** (see Step 3 above)
- [ ] **Test contact form** works with your EmailJS account
- [ ] **Verify all links** are correct and working

### Recommended Tasks:
- [ ] Test all navigation links
- [ ] Verify responsive design on mobile devices
- [ ] Check Google Maps functionality
- [ ] Test all social media links
- [ ] Verify logo displays correctly
- [ ] Run security audit (browser DevTools)
- [ ] Check SEO meta tags with [SEO Checker](https://www.seobility.net/en/seocheck/)
- [ ] Test form validation (try invalid inputs)
- [ ] Verify Content Security Policy doesn't block resources

## Quick Start (Local Development)

1. **Clone/download this repository**
2. **Set up EmailJS** (optional for testing without email):
   ```bash
   cp assets/js/config.example.js assets/js/config.js
   # Edit assets/js/config.js with your EmailJS credentials
   ```
3. **Open in browser**:
   ```bash
   # Simple: Just open index.html in your browser
   # Or use a local server:
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```
4. **Test the site** - Check navigation, forms, and responsiveness

## Contact Information

- **Location**: Kharibot, Harisiddhi -28, Lalitpur, Nepal 44700
- **Hours**: Sunday - Friday, 5:00 AM - 9:00 PM
- **Phone**: +977 976-2608549
- **Email**: 82gymnfitness@gmail.com
- **Instagram**: [@82gymnfitness](https://www.instagram.com/82gymnfitness/)

## License

© 2025 Eighty Two Gym & Fitness Club. All rights reserved.
