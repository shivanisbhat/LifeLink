# LifeLink

> Building Strong Bonds in The Digital Age

A modern web application built with React, TypeScript, and cutting-edge frontend technologies.

## 🚀 Features

- **Modern Stack**: Built with React 18, TypeScript, and Vite for lightning-fast development
- **Beautiful UI**: Styled with Tailwind CSS and shadcn-ui components
- **Responsive Design**: Optimized for all device sizes
- **Type-Safe**: Full TypeScript support for enhanced developer experience

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn-ui

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js)

Alternatively, install Node.js using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating):
```bash
# Install nvm (if not already installed)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install and use the latest LTS version
nvm install --lts
nvm use --lts
```

## 🚀 Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/shivanisbhat/LifeLink.git
   cd LifeLink
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### GitHub Codespaces

1. Navigate to the repository on GitHub
2. Click the "Code" button (green button)
3. Select the "Codespaces" tab
4. Click "New codespace"
5. Edit files directly in the cloud-based development environment

### Edit Directly on GitHub

1. Navigate to any file in the repository
2. Click the pencil icon (Edit) at the top right
3. Make your changes and commit them directly

## 📦 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linting
npm run lint
```

## 🏗️ Project Structure

```
LifeLink/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── lib/            # Utility functions
│   ├── hooks/          # Custom React hooks
│   └── App.tsx         # Main application component
├── public/             # Static assets
├── index.html          # Entry HTML file
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── tailwind.config.ts  # Tailwind CSS configuration
```

## 🎨 Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling and [shadcn-ui](https://ui.shadcn.com/) for pre-built, accessible components. The design system is fully customizable through the Tailwind configuration file.

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

### Deploy to Hosting Platforms

You can deploy the built application to various hosting platforms:

- **Vercel**: Connect your GitHub repository and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions to deploy automatically
- **Any static hosting**: Upload the contents of the `dist` folder

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📝 Development Workflow

1. **Make changes** locally or through GitHub
2. **Test locally** using `npm run dev`
3. **Build** for production with `npm run build`
4. **Deploy** to your preferred hosting platform

## 🐛 Bug Reports

If you encounter any issues, please [open an issue](https://github.com/shivanisbhat/LifeLink/issues) with:
- A clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Shivani S Bhat** - [@shivanisbhat](https://github.com/shivanisbhat)

## 🙏 Acknowledgments

- UI components from [shadcn-ui](https://ui.shadcn.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Built with [Vite](https://vitejs.dev/)

---

⭐ Star this repository if you find it helpful!
