# Toggle Switch App

A simple and interactive toggle switch application built with React and Vite. This project demonstrates fundamental React concepts including state management with hooks, event handling, and conditional rendering.

## 📋 Overview

The Toggle Switch App is a lightweight React application that showcases a functional toggle switch component. It allows users to switch between two states (ON/OFF) with a single click. Perfect for learning React basics and interview preparation.

## ✨ Features

- **Toggle State**: Click the button to switch between ON and OFF states
- **Real-time Status Display**: Shows current state of the switch in real-time
- **Dynamic Button Label**: Button text changes based on current state
- **Clean UI**: Minimalist design focused on core functionality
- **Fast Development**: Hot Module Replacement (HMR) for instant feedback

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
   cd Toggle_switch/ToggleSwitchApp
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
ToggleSwitchApp/
├── public/                 # Static assets
├── src/
│   ├── App.css           # Component styling
│   ├── App.jsx           # Main Toggle Switch component
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
The Toggle Switch component uses React's `useState` hook to manage the switch state:

```javascript
const [isOn, setOn] = useState(false);
```

- `isOn`: Boolean value representing the switch state (ON/OFF)
- `setOn`: Function to toggle the switch state

### Component Logic
The component renders a button that toggles between two states:

```javascript
<button onClick={() => setOn(!isOn)}>
  {isOn? 'OFF' : 'ON'}
</button>
```

The button label updates dynamically based on the current state:
- When `isOn` is `true`, the button shows "OFF"
- When `isOn` is `false`, the button shows "ON"

### Status Display
A paragraph element displays the current state:

```javascript
<p>The switch is {isOn ? 'OFF' : 'ON'}</p>
```

## 🎯 Usage

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **View the application** in your browser at the provided localhost URL

3. **Click the button** to toggle between ON and OFF states

4. **Observe the changes**:
   - Button label toggles between "ON" and "OFF"
   - Status message updates to reflect current state

## 🔧 Key Concepts Demonstrated

- **React State with Hooks**: Using `useState` for state management
- **Event Handling**: Handling click events with inline callbacks
- **Conditional Rendering**: Using ternary operators for dynamic content
- **Component Architecture**: Functional component design
- **Hot Module Replacement**: Fast refresh during development
- **Boolean Logic**: Toggle operations using the NOT operator (!)

## 🎓 Learning Resources

This project is perfect for:
- Beginners learning React fundamentals
- Understanding state management with hooks
- Learning conditional rendering in React
- Event handling practice
- Interview preparation and demonstrations

## 🚀 Potential Enhancements

Consider extending this project with:
- **Animated Toggle**: Add CSS animations for smooth transitions
- **Styled Switch**: Create a visual switch component with custom styling
- **Timer Feature**: Auto-toggle after a set duration
- **Multiple Switches**: Manage multiple toggle switches simultaneously
- **Keyboard Support**: Enable toggling with keyboard shortcuts (spacebar, Enter)
- **Accessibility**: Add ARIA labels and keyboard navigation
- **State Persistence**: Save state to localStorage
- **Switch History**: Track toggle history and add undo/redo functionality

## 📄 License

This project is for educational and interview demonstration purposes.

## 📞 Support

For questions about this Toggle Switch application, feel free to reach out or create an issue in the repository.

---

**Happy toggling! 🎉**
