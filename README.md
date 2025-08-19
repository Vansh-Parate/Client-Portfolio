# 3D Portfolio - React Application

A modern, responsive portfolio website for a 3D model designer built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Dark theme with cyan accents and glassmorphism effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: 
  - Filterable portfolio gallery
  - Before/after sliders for case studies
  - Interactive testimonials carousel
  - Expandable FAQ section
  - Contact form with file upload
- **Performance Optimized**: Lazy loading images and optimized components
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server
- **React Hooks** - State management

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation and mobile menu
│   ├── Hero.tsx            # Hero section with 3D model preview
│   ├── About.tsx           # About section with capabilities
│   ├── Skills.tsx          # Skills and software proficiency
│   ├── Portfolio.tsx       # Filterable portfolio gallery
│   ├── CaseStudies.tsx     # Before/after comparison sliders
│   ├── Services.tsx        # Service offerings and workflow
│   ├── Testimonials.tsx    # Client testimonials carousel
│   ├── FAQ.tsx             # Expandable FAQ section
│   ├── Contact.tsx         # Contact form and information
│   ├── Footer.tsx          # Footer with navigation
│   ├── Preloader.tsx       # Loading screen
│   └── BackgroundAccents.tsx # Decorative background elements
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles and Tailwind imports
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Cyan (#22d3ee)
- **Background**: Dark neutral (#0a0a0b)
- **Text**: Light neutral (#f9fafb)
- **Accents**: Emerald, Fuchsia, Indigo, Rose

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Display Font**: Space Grotesk (Google Fonts)

### Interactive Elements
- Hover effects on cards and buttons
- Smooth transitions and animations
- Custom scrollbar styling
- Range slider customization

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 3d-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Components

### Portfolio Gallery
- Filter by category (Game, Architecture, Product, Character, Environment)
- Filter by software (Blender, Maya, 3ds Max, etc.)
- Responsive grid layout
- Image lazy loading

### Contact Form
- Multi-step form with validation
- File upload support
- Budget slider with real-time display
- Form submission handling

### Interactive Elements
- Mobile navigation menu
- Testimonials carousel with navigation
- FAQ accordion
- Before/after image sliders
- Back-to-top button

## 🎨 Customization

### Colors
Update the color scheme in `src/index.css` and component files.

### Content
Modify the content in each component file to match your portfolio.

### Images
Replace placeholder images with your actual portfolio work.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, please open an issue in the repository.

---

Built with ❤️ using React and Tailwind CSS
