# Brodox George - Portfolio Website

A modern, responsive portfolio website built with React, featuring smooth animations and interactive components.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, Vite, and modern JavaScript
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Components**: 
  - Animated navigation with mobile menu
  - Interactive service cards with hover effects
  - Contact form with validation
  - Tabbed content in About section
- **SEO Optimized**: Meta tags and structured content
- **Fast Performance**: Optimized with Vite for quick loading

## 🛠️ Tech Stack

- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

## 📦 Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   - The app will open automatically at `http://localhost:3000`
   - Or manually navigate to the URL shown in the terminal

## 🏗️ Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Home.jsx        # Home page component
│   ├── About.jsx       # About page with tabs
│   ├── Services.jsx    # Services showcase
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer component
├── App.jsx             # Main app component
├── main.jsx           # React entry point
└── index.css          # Global styles with Tailwind

public/
├── img2.jpg - img11.jpg  # Portfolio images
└── index.html           # HTML template
```

## 🎨 Key Features Explained

### 1. **Interactive Navigation**
- Sticky header with smooth scroll effects
- Mobile-responsive hamburger menu
- Active page highlighting

### 2. **Animated Components**
- Page transitions with Framer Motion
- Hover effects on service cards
- Loading animations and micro-interactions

### 3. **Contact Form**
- Form validation
- Loading states
- Success feedback
- Responsive design

### 4. **Service Showcase**
- Interactive cards with hover effects
- Feature lists that expand on hover
- Color-coded service categories

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages
1. Add `gh-pages` dependency
2. Configure build scripts
3. Deploy with `npm run deploy`

## 🔧 Customization

### Adding New Services
Edit `src/components/Services.jsx` and add to the `services` array:

```javascript
{
  id: 7,
  title: 'New Service',
  description: 'Service description',
  icon: NewIcon,
  image: '/new-image.jpg',
  color: 'blue',
  features: ['Feature 1', 'Feature 2']
}
```

### Updating Contact Information
Edit `src/components/Contact.jsx` and `src/components/Footer.jsx`:

```javascript
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your-email@example.com',
    link: 'mailto:your-email@example.com'
  }
]
```

### Changing Colors
Update the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#your-color',
        600: '#your-color',
        700: '#your-color',
      }
    }
  }
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎯 Performance Tips

- Images are optimized for web
- Lazy loading for better performance
- Minimal bundle size with Vite
- Efficient animations with Framer Motion

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 📞 Contact

- **Email**: georgebrodox@gmail.com
- **Phone**: +254700868913
- **Location**: Mombasa, Kenya

---

**Built with ❤️ by Brodox George** 