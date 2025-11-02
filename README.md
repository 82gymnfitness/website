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

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template
4. Update `script.js` with your credentials:
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`
   - `EMAILJS_PUBLIC_KEY`

### Step 4: Enable GitHub Pages

1. Go to your repository Settings
2. Navigate to "Pages" section
3. Under "Source", select "main" branch
4. Click Save
5. Your site will be available at: `https://yourusername.github.io/82gym/`

### Step 5: Optimize Images (Recommended)

- Compress `Gym_Logo.jpg` using tools like [TinyPNG](https://tinypng.com/)
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
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript (EmailJS integration)
├── Gym_Logo.jpg        # Gym logo
├── robots.txt          # Search engine crawler instructions
├── sitemap.xml         # SEO sitemap
├── .nojekyll          # GitHub Pages configuration
└── README.md          # This file
```

## Testing Checklist

- [ ] Test all navigation links
- [ ] Test contact form with EmailJS
- [ ] Verify responsive design on mobile devices
- [ ] Check Google Maps functionality
- [ ] Test all social media links
- [ ] Verify logo displays correctly
- [ ] Check SEO meta tags with tools like [SEO Checker](https://www.seobility.net/en/seocheck/)

## Contact Information

- **Location**: Kharibot, Harisiddhi -28, Lalitpur, Nepal 44700
- **Hours**: Sunday - Friday, 5:00 AM - 9:00 PM
- **Phone**: +977 976-2608549
- **Email**: 82gymnfitness@gmail.com
- **Instagram**: [@82gymnfitness](https://www.instagram.com/82gymnfitness/)

## License

© 2025 Eighty Two Gym & Fitness Club. All rights reserved.
