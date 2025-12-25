# Counter Component App

A simple yet elegant counter application built with React and Vite. This project demonstrates fundamental React concepts including component creation, state management using hooks, and event handling.

## 📋 Overview

The Counter Component App is a basic but complete React application that allows users to increment and decrement a counter value. It's an excellent starting point for learning React fundamentals and serves as a reference implementation for interview preparation.

## ✨ Features

- **Increment Counter**: Click the "Increment" button to increase the counter by 1
- **Decrement Counter**: Click the "Decrement" button to decrease the counter by 1
- **Real-time Display**: Counter value updates instantly on the page
- **Clean UI**: Simple, intuitive interface focused on core functionality
- **Fast Development**: Hot Module Replacement (HMR) for instant feedback during development

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Language**: JavaScript (ES6+)
- **Styling**: CSS
- **Linting**: ESLint with React-specific rules
- **Package Manager**: npm

## 📦 Installation

1. **Navigate to the project directory**:
   ```bash
   cd Counter_Component/CounterApp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## 🚀 Running the Application

### Development Mode
Start the development server with Hot Module Replacement:
```bash
npm run dev
```
The app will be available at `http://localhost:5173` (default Vite port).

### Build for Production
Create an optimized production build:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Linting
Run ESLint to check code quality:
```bash
npm run lint
```

## 📁 Project Structure

```
CounterApp/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Asset files
│   ├── App.css           # Component styling
│   ├── App.jsx           # Main Counter component
│   ├── index.css         # Global styles
│   └── main.jsx          # Application entry point
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint configuration
└── README.md            # This file
```

## 💡 How It Works

### State Management
The Counter Component uses React's `useState` hook to manage the counter state:

```javascript
const [count, setCount] = useState(0);
```

- `count`: Current counter value (initialized to 0)
- `setCount`: Function to update the counter value

### Event Handlers
The component includes two simple event handlers:

1. **Increment**:
   ```javascript
   onClick={() => setCount(count + 1)}
   ```
   Increases the counter by 1

2. **Decrement**:
   ```javascript
   onClick={() => setCount(count - 1)}
   ```
   Decreases the counter by 1

## 🎯 Usage

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **View the application** in your browser at the provided localhost URL

3. **Use the buttons**:
   - Click "Increment" to add 1 to the counter
   - Click "Decrement" to subtract 1 from the counter
   - The counter value updates in real-time

## 🔧 Key Concepts Demonstrated

- **React Functional Components**: Simple, modern React component syntax
- **React Hooks**: Using `useState` for state management
- **Event Handling**: Handling click events with inline callbacks
- **Hot Module Replacement**: Fast refresh during development
- **Component Rendering**: JSX syntax and component rendering

## 🎓 Learning Resources

This project is perfect for:
- Beginners learning React fundamentals
- Interview preparation and demonstrations
- Understanding state management basics
- Learning about React hooks
- Practice with event handling

## 🤝 Contributing

This is a demo project for educational and interview purposes. Improvements and extensions are welcome!

### Potential Enhancements
- Reset button to set counter to 0
- Step size configuration (increment/decrement by custom amounts)
- Counter history/undo functionality
- Persistent state using localStorage
- Dark mode toggle
- Accessibility improvements

## 📄 License

This project is for educational and interview demonstration purposes.

## 📞 Support

For questions about this Counter Component application, feel free to reach out or create an issue in the repository.

---

**Happy coding! 🎉**
