# Dropdown Menu Component

A simple and reusable dropdown menu component built with **React** and **Vite**. This project demonstrates fundamental React concepts including state management with hooks, event handling, and component composition.

## Features

- ✨ **Toggle Functionality**: Click the button to show/hide the dropdown menu
- 🔄 **Reusable Component**: Easily customizable with different menu items
- ⚡ **Fast Development**: Built with Vite for lightning-fast HMR (Hot Module Replacement)
- 🎯 **React Hooks**: Uses `useState` for state management
- 📦 **Minimal Setup**: Quick to install and run

## Project Structure

```
dropdown_menu/
├── src/
│   ├── App.jsx          # Main component with DropdownMenu
│   ├── App.css          # Styling
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── package.json
└── vite.config.js
```

## Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd "H:\React codes for interviews\Dropdown_Menu\dropdown_menu"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## Component Overview

### `DropdownMenu` Component

The `DropdownMenu` is a functional component that accepts an array of items as props and renders a toggleable menu.

**Props:**
- `items` (Array): An array of strings representing menu items

**Example Usage:**

```jsx
import React from 'react';
import DropdownMenu from './DropdownMenu';

const App = () => {
  const items = ['Profile', 'Settings', 'Logout'];
  
  return <DropdownMenu items={items} />;
};

export default App;
```

### How It Works

1. **State Management**: Uses `useState` hook to track whether the menu is open or closed
2. **Toggle Functionality**: Clicking the button toggles the `isOpen` state
3. **Conditional Rendering**: Menu items are only displayed when `isOpen` is `true`
4. **Dynamic List**: Maps through the `items` array to render each menu option

## Customization

You can easily customize the dropdown menu by:

1. **Changing Menu Items**: Modify the `items` array in `App.jsx`
   ```jsx
   const items = ['Home', 'About', 'Contact', 'Services'];
   ```

2. **Styling**: Update the CSS in `App.css` to change appearance
3. **Adding Click Handlers**: Enhance menu items with onClick events
   ```jsx
   <li key={index} onClick={() => handleItemClick(item)}>
     {item}
   </li>
   ```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Technologies Used

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **ESLint** - Code linting

## Learning Objectives

This project demonstrates:
- ✅ React functional components
- ✅ React Hooks (`useState`)
- ✅ Event handling in React
- ✅ Conditional rendering
- ✅ Props and component composition
- ✅ Array mapping in JSX

## Browser Support

Works on all modern browsers that support ES6+ features.

## License

This project is for educational and interview preparation purposes.
