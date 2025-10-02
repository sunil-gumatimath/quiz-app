# Quiz App

A modern, interactive quiz application built with React and Vite. This application allows users to take quizzes, track their scores, and provides an engaging learning experience.

## Features

- 🎯 Interactive quiz interface
- 📊 Score tracking and progress monitoring
- ⚡ Fast and responsive design
- 🎨 Modern UI with smooth animations
- 📱 Mobile-friendly responsive layout
- 🔧 Easy to customize and extend

## Tech Stack

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and quality assurance
- **CSS3** - Modern styling with CSS modules

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sunil-gumatimath/quiz-app.git
cd quiz-app
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

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
quiz-app/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── assets/            # Images and icons
│   ├── components/        # React components
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── index.html             # HTML template
├── package.json           # Project dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md             # Project documentation
```

## Development

### Adding New Quiz Questions

Quiz questions can be added by modifying the quiz data structure in the appropriate component files. The app is designed to be easily extensible for different types of quiz formats.

### Customization

- **Styling**: Modify `src/index.css` and component-specific CSS files
- **Quiz Logic**: Update quiz components in the `src/` directory
- **Configuration**: Adjust settings in `vite.config.js`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and all rights reserved.

## Support

For questions or support, please contact the development team.
