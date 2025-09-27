# Dental Clinic Website

A modern, responsive dental clinic website built with React, TypeScript, and Tailwind CSS. This website provides comprehensive information about dental services including Ortopedia, Terapia, Study, and Surgery.

## Features

- 🦷 **Modern Design**: Clean, professional design with smooth animations
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast Performance**: Built with Vite for optimal performance
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid styling
- 🔧 **TypeScript**: Type-safe development with full TypeScript support
- 📋 **Booking System**: Interactive appointment booking modal
- 🧭 **Navigation**: Smooth navigation with React Router
- ♿ **Accessible**: Built with accessibility in mind

## Services

### Ortopedia
- Traditional braces
- Clear aligners
- Lingual braces
- Retainers

### Terapia
- Root canal therapy
- Periodontal treatment
- Pain management
- Emergency care

### Study
- Comprehensive dental exams
- Digital X-rays
- 3D imaging & CT scans
- Oral cancer screening

### Surgery
- Tooth extractions
- Dental implants
- Bone grafting
- Oral surgery

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dental-clinic-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   └── BookingModal.tsx # Appointment booking modal
├── pages/              # Page components
│   ├── HomePage.tsx    # Homepage
│   ├── OrtopediaPage.tsx
│   ├── TerapiaPage.tsx
│   ├── StudyPage.tsx
│   └── SurgeryPage.tsx
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`. You can modify the colors by updating the `dental` color scheme.

### Content
- Update service information in the respective page components
- Modify contact information in the Footer component
- Change images by updating the `src` attributes in the components

### Styling
- All styles use Tailwind CSS utility classes
- Custom styles are defined in `src/index.css`
- Component-specific styles are co-located with the components

## Features in Detail

### Booking System
- Interactive modal for appointment booking
- Form validation and submission
- Service selection dropdown
- Date and time picker

### Responsive Design
- Mobile-first approach
- Breakpoints for mobile, tablet, and desktop
- Touch-friendly interface elements

### Performance
- Optimized images with lazy loading
- Code splitting with React Router
- Minimal bundle size with Vite

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:
- Email: info@dentalclinic.com
- Phone: (123) 456-7890
