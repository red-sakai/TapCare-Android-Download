# TapCare Download Page

A responsive web application for downloading and installing the TapCare Emergency Response App, designed specifically for Rizal High School students.

## Overview

TapCare is an emergency response application that provides quick access to emergency services, school safety resources, and immediate help when needed most. This download page offers a seamless experience for users to download the APK file and get detailed installation instructions.

## Features

- **Responsive Design**: Optimized for both mobile and desktop devices
- **TapCare Branding**: Custom logo and matching color scheme (red gradient)
- **Direct APK Download**: One-click download of the TapCare app
- **Installation Guide**: Step-by-step instructions with visual aids
- **Google Play Protect Handling**: Detailed guide for bypassing security warnings
- **Mobile-First Approach**: Touch-friendly interface for mobile users

## Project Structure

```
tapcare/
├── src/
│   └── app/
│       ├── page.tsx              # Main download page
│       ├── instructions/
│       │   └── page.tsx          # Installation instructions page
│       └── layout.tsx            # App layout and metadata
├── public/
│   ├── tapcare-logo.png          # TapCare logo
│   ├── app-release.apk           # Android APK file
│   ├── step1.jpg                 # Google Play Protect screenshot 1
│   └── step2.jpg                 # Google Play Protect screenshot 2
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tapcare
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Add required files to the `public` folder:
   - `tapcare-logo.png` - TapCare app logo
   - `app-release.apk` - Android application file
   - `step1.jpg` - Google Play Protect warning screenshot
   - `step2.jpg` - Install without scanning screenshot

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the download page.

### Building for Production

```bash
npm run build
npm start
```

## Pages

### Main Download Page (`/`)
- TapCare branding and description
- Direct APK download button
- Automatic redirect to instructions after download
- Mobile-responsive design

### Instructions Page (`/instructions`)
- Step-by-step installation guide
- Visual guides for Google Play Protect handling
- Mobile-optimized layout
- Return navigation to main page

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Next.js Image**: Optimized image loading

## Deployment

### Vercel (Recommended)
1. Connect your repository to [Vercel](https://vercel.com)
2. Deploy automatically with each push to main branch

### Other Platforms
Build the project and deploy the `out` folder:
```bash
npm run build
```

## File Requirements

Ensure these files are placed in the `public` directory:

- `tapcare-logo.png` - App logo (recommended: 512x512px)
- `app-release.apk` - Android APK file
- `step1.jpg` - Google Play Protect warning screen
- `step2.jpg` - Install without scanning option screen

## Customization

### Branding
- Update logo: Replace `public/tapcare-logo.png`
- Modify colors: Edit Tailwind classes in component files
- Change text: Update content in `page.tsx` files

### APK File
- Replace `public/app-release.apk` with your APK file
- Update download filename in `src/app/page.tsx` if needed

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is created for Rizal High School's Student Safety Initiative.

## Support

For technical support or questions about the TapCare app, contact Rizal High School IT Support.
