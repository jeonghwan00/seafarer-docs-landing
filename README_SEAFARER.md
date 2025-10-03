# SeaDocs - Seafarer Documentation Automation Landing Page

A modern, responsive landing page for seafarer documentation automation SaaS built with React and TypeScript.

## Project Structure

```
src/
├── components/
│   ├── atoms/          # Smallest reusable components
│   │   ├── Button.tsx
│   │   ├── Typography.tsx
│   │   ├── Card.tsx
│   │   └── Container.tsx
│   ├── molecules/      # Composite components
│   │   ├── NavBar.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── PainPointCard.tsx
│   │   └── TestimonialCard.tsx
│   └── organisms/      # Page sections
│       ├── HeroSection.tsx
│       ├── PainPointsSection.tsx
│       ├── HowItWorksSection.tsx
│       ├── DifferentiatorsSection.tsx
│       ├── SocialProofSection.tsx
│       ├── CTASection.tsx
│       └── Footer.tsx
├── styles/
│   └── GlobalStyles.ts
└── App.tsx
```

## Features

- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Component-Based Architecture**: Modular and maintainable code structure
- **Modern Design**: Clean, professional design inspired by leading SaaS companies
- **Styled Components**: CSS-in-JS for dynamic styling
- **TypeScript**: Full type safety and better developer experience

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Component Hierarchy

1. **Atomic Components**: Basic building blocks (Button, Typography, Card)
2. **Molecular Components**: Combinations of atoms (NavBar, FeatureCard)
3. **Organism Components**: Complete sections (HeroSection, Footer)
4. **Page**: Full landing page assembly

## Design Tokens

The design system uses CSS custom properties for consistency:

- **Colors**: Primary navy, secondary blue, accent teal
- **Spacing**: 8px grid system (xs, sm, md, lg, xl, 2xl, 3xl)
- **Typography**: Hierarchical sizing from h1 to caption
- **Shadows**: Three levels (sm, md, lg)
- **Border Radius**: Three sizes (sm, md, lg)

## Technologies Used

- React 18
- TypeScript
- Styled Components
- Lucide React (Icons)
- Create React App

## Customization

### Changing Colors
Edit the CSS variables in `src/styles/GlobalStyles.ts`

### Modifying Content
Update the content arrays in each organism component

### Adding Sections
1. Create a new organism component
2. Import and add it to `App.tsx`

## Deployment

The build folder can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

## License

This project is created for demonstration purposes.