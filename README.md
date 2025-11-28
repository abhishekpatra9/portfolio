# Abhisek Patra - Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring a dark theme with purple/pink gradient accents, smooth animations, and an animated radial gradient background.

## Features

- **Animated Background**: Continuously moving radial gradient background inspired by chaicode.com
- **Dark/Light Mode**: Toggle between dark and light themes with persistent preference
- **Smooth Animations**: Framer Motion animations throughout the site
- **Responsive Design**: Fully responsive across all devices
- **Interactive Sections**:
  - Hero section with rotating developer role text animation
  - About section with education and internship experience
  - Skills section with categorized technologies
  - Projects section with search functionality, live demo and GitHub links
  - Contact section with info and message form
  - Footer with social media links

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Installation

1. Clone the repository or download the ZIP file:
\`\`\`bash
git clone <your-repo-url>
cd portfolio-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Project Structure

\`\`\`
portfolio-website/
├── app/
│   ├── layout.js          # Root layout with fonts and metadata
│   ├── page.js            # Main page assembling all sections
│   └── globals.css        # Global styles and theme tokens
├── components/
│   ├── AnimatedBackground.js  # Animated gradient background
│   ├── Header.js              # Navigation header with theme toggle
│   ├── Hero.js                # Hero section with profile
│   ├── About.js               # About section with experience
│   ├── Skills.js              # Skills categorized by type
│   ├── Projects.js            # Projects with search and links
│   ├── Contact.js             # Contact info and message form
│   ├── Footer.js              # Footer with social links
│   └── ThemeProvider.js       # Theme context provider
├── public/
│   └── *.png, *.jpg          # Images and assets
└── README.md
\`\`\`

## Customization

### Update Personal Information

**Hero Section** (`components/Hero.js`):
- Update name, developer roles, and profile photo
- Add your resume link to the Download Resume button

**About Section** (`components/About.js`):
- Update education details
- Add/modify internship experiences
- Update years of experience

**Skills Section** (`components/Skills.js`):
- Add or remove technologies in each category
- Modify skill categories as needed

**Projects Section** (`components/Projects.js`):
- Update the `projects` array with your actual projects:
\`\`\`javascript
{
  title: "Your Project Name",
  description: "Project description",
  technologies: ["Tech1", "Tech2"],
  liveLink: "https://your-live-demo.com",
  githubLink: "https://github.com/yourusername/project",
  image: "/your-project-image.jpg"
}
\`\`\`

**Contact Section** (`components/Contact.js`):
- Update email, phone, and location
- Update GitHub and LinkedIn URLs

**Footer** (`components/Footer.js`):
- Update social media links
- Modify copyright information

### Change Theme Colors

Edit `app/globals.css` to customize the color scheme:
\`\`\`css
@theme inline {
  --background: ...;
  --foreground: ...;
  --primary: ...;
  /* Modify other color tokens */
}
\`\`\`

### Add More Sections

Create new components in the `components/` folder and import them in `app/page.js`:
\`\`\`javascript
import YourNewSection from '@/components/YourNewSection'

// Add to page.js
<YourNewSection />
\`\`\`

## Deployment

### Deploy to Vercel

1. Click the "Publish" button in the v0 interface, or
2. Push your code to GitHub and import it to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Deploy with default settings

### Deploy to Other Platforms

\`\`\`bash
npm run build
npm run start
\`\`\`

## Contact

- **Email**: abhishekpata.dev9@gmail.com
- **Phone**: +91 7894935341
- **GitHub**: [github.com/abhisekpatra](https://github.com/abhishekpatra9)
- **LinkedIn**: [linkedin.com/in/abhisekpatra](https://www.linkedin.com/in/abhishekpatra9/)

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built by Abhisek Patra with ❤️ using Next.js and Tailwind CSS
