# React Searchbar Component

A simple, reusable React searchbar component built with Vite that demonstrates real-time filtering functionality. Perfect for interview preparation and learning React fundamentals.

## 🚀 Features

- **Real-time Search**: Instant filtering of items as you type
- **Case-Insensitive**: Search works regardless of letter casing
- **Reusable Component**: Easy to integrate into any React project
- **React Hooks**: Built using modern React functional components with `useState`
- **Fast Development**: Powered by Vite for lightning-fast HMR (Hot Module Replacement)

## 📋 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Component API](#component-api)
- [Features Explained](#features-explained)
- [Development](#development)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Interview Talking Points](#interview-talking-points)

## 🛠️ Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd searchbar
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## 💻 Usage

### Basic Implementation

The searchbar component is already implemented in `App.jsx`. Here's how it works:

```jsx
import React, { useState } from "react";

const Searchbar = ({ items }) => {
  const [query, setQuery] = useState("");

  const filteredItems = items.filter((item) => 
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
        placeholder="Search..." 
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const items = ["coconut", "apple", "banana", "orange", "date", "grapes", "mango"];
  return (
    <div>
      <Searchbar items={items} />
    </div>
  );
};

export default App;
```

### Using with Different Data

You can easily customize the component to work with different data:

```jsx
// Example 1: Countries
const countries = ["India", "USA", "Canada", "Australia", "Japan"];
<Searchbar items={countries} />

// Example 2: Programming Languages
const languages = ["JavaScript", "Python", "Java", "C++", "Ruby"];
<Searchbar items={languages} />
```

## 📦 Component API

### Searchbar Props

| Prop    | Type     | Required | Description                           |
|---------|----------|----------|---------------------------------------|
| `items` | `array`  | Yes      | Array of strings to be searched       |

## ✨ Features Explained

### 1. Real-Time Filtering
The component uses the `filter()` method to instantly filter items as the user types:
```jsx
const filteredItems = items.filter((item) => 
  item.toLowerCase().includes(query.toLowerCase())
);
```

### 2. Case-Insensitive Search
Both the search query and items are converted to lowercase before comparison:
```jsx
item.toLowerCase().includes(query.toLowerCase())
```

### 3. State Management
Uses React's `useState` hook to manage the search query:
```jsx
const [query, setQuery] = useState("");
```

### 4. Controlled Input
The input field is a controlled component, with its value tied to React state:
```jsx
<input 
  type="text" 
  value={query} 
  onChange={e => setQuery(e.target.value)} 
/>
```

## 🔧 Development

### Available Scripts

- **`npm run dev`**: Start development server with hot reload
- **`npm run build`**: Build for production
- **`npm run lint`**: Run ESLint to check code quality
- **`npm run preview`**: Preview production build locally

### Development Dependencies

- `vite`: Fast build tool and dev server
- `eslint`: Code linting
- `@vitejs/plugin-react`: React support for Vite

## 📁 Project Structure

```
searchbar/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, icons, etc.
│   ├── App.css          # App styles
│   ├── App.jsx          # Main App component with Searchbar
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── .gitignore
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── README.md            # This file
└── vite.config.js       # Vite configuration
```

## 🛠️ Technologies Used

- **React 19.2.0**: JavaScript library for building user interfaces
- **Vite 7.2.4**: Next-generation frontend tooling
- **ESLint**: Code quality and consistency
- **JavaScript (ES6+)**: Modern JavaScript features

## 🎯 Interview Talking Points

When discussing this project in interviews, highlight:

### 1. **React Fundamentals**
- Understanding of functional components
- Proper use of React Hooks (`useState`)
- Controlled vs uncontrolled components

### 2. **JavaScript Skills**
- Array methods (`filter`, `map`)
- String methods (`toLowerCase`, `includes`)
- Event handling (`onChange`)

### 3. **Component Design**
- **Reusability**: Component accepts props for flexibility
- **Single Responsibility**: Component does one thing well
- **State Management**: Proper state handling for user input

### 4. **Performance Considerations**
- **Current Implementation**: Filters on every keystroke (fine for small datasets)
- **Potential Optimization**: Could add debouncing for larger datasets
- **Key Props**: Using index as key (acceptable here, but could be improved with unique IDs)

### 5. **Potential Enhancements**
You could discuss how to extend this component:
- Add debouncing for better performance
- Highlight matching text
- Add sorting options
- Support for multiple search criteria
- Empty state handling
- Loading states for async data
- Accessibility improvements (ARIA labels)

## 🚀 Future Improvements

Here are some ideas to enhance this component:

1. **Debouncing**: Add a delay before filtering to improve performance
2. **Highlighting**: Highlight matching text in results
3. **Empty States**: Show a message when no results are found
4. **Keyboard Navigation**: Add arrow key navigation through results
5. **Advanced Filtering**: Support for multiple filters or search operators
6. **TypeScript**: Add type safety
7. **Testing**: Add unit tests with Jest/Vitest and React Testing Library
8. **Styling**: Enhance UI with CSS frameworks or styled-components
9. **Object Support**: Extend to filter arrays of objects, not just strings
10. **Async Search**: Integrate with an API for remote data fetching

## 📝 License

This project is for educational and interview preparation purposes.

## 👨‍💻 Author

Created as part of React interview preparation materials.

---

**Happy Coding! 🚀**
