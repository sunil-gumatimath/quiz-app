# Quiz App

A simple, interactive quiz application built with React and Vite. This application presents users with 5 multiple-choice questions covering various topics including technology, geography, and general knowledge. Users can select answers and receive immediate visual feedback.

## Features

- 🎯 Interactive multiple-choice quiz with 5 questions
- ✅ Immediate feedback on answer selection (correct/incorrect highlighting)
- 🎨 Clean, modern UI with purple-themed design
- 📱 Responsive layout that works on different screen sizes
- ⚡ Fast loading with Vite build system
- 🔒 Answer locking to prevent multiple selections

## Quiz Topics

The quiz covers the following topics:
- Computer hardware and networking
- World geography
- Email and internet terminology
- Operating systems
- Web technologies

## Tech Stack

- **React 19** - Modern React with hooks (useState, useRef)
- **Vite** - Fast build tool and development server
- **CSS3** - Custom styling with modern design
- **Bun** - Package manager for fast installs and builds
- **ESLint** - Code linting and quality assurance

## Getting Started

### Prerequisites

- **Bun** (recommended) or Node.js (version 16 or higher)
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sunil-gumatimath/quiz-app.git
cd quiz-app
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `bun run dev` - Start the development server
- `bun run build` - Build the project for production
- `bun run preview` - Preview the production build locally
- `bun run lint` - Run ESLint to check code quality

## Project Structure

```
quiz-app/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── assets/            # Quiz data and static files
│   │   └── data.js       # Quiz questions and answers
│   ├── components/        # React components
│   │   └── Quiz/         # Quiz component and styles
│   │       ├── quiz.jsx  # Main quiz component
│   │       └── Quiz.css  # Quiz styling
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── index.html             # HTML template
├── package.json           # Project dependencies and scripts
├── vite.config.js         # Vite configuration
├── bun.lock              # Bun lock file
└── README.md             # Project documentation
```

## How to Play

1. The quiz displays one question at a time with 4 multiple-choice options
2. Click on your chosen answer to select it
3. The correct answer will be highlighted in green, incorrect answers in red
4. Use the "Next" button to proceed to the next question (Note: Next button functionality can be enhanced)
5. The question counter shows your current progress (e.g., "1 of 5 questions")

## Development

### Adding New Quiz Questions

To add new questions, edit the `src/assets/data.js` file:

```javascript
{
  question: "Your question here?",
  option1: "Option A",
  option2: "Option B",
  option3: "Option C",
  option4: "Option D",
  ans: 1, // The correct answer (1-4)
}
```

### Customization

- **Styling**: Modify `src/components/Quiz/Quiz.css` for quiz-specific styles
- **Global Styles**: Update `src/index.css` for overall application styling
- **Quiz Logic**: Enhance the quiz component in `src/components/Quiz/quiz.jsx`
- **Configuration**: Adjust settings in `vite.config.js`

### Current Limitations and Enhancement Opportunities

- Next button functionality needs implementation
- Score tracking can be added
- Quiz completion handling can be enhanced
- Timer functionality could be added for timed quizzes
- Question categories and difficulty levels can be implemented

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
