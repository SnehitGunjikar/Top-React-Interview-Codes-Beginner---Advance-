# Data Fetch App

A modern React application that demonstrates API integration and async data fetching. This project fetches product data from the FakeStore API and displays it in a clean, organized list format.

## 📋 Overview

The Data Fetch App is a practical demonstration of how to fetch data from external APIs in React using the Fetch API and React hooks. It showcases loading states, error handling, and dynamic data rendering - essential skills for real-world React applications.

## ✨ Features

- **API Data Fetching**: Retrieves product data from FakeStore API
- **Loading State**: Displays "Loading..." message while fetching data
- **Error Handling**: Gracefully handles fetch errors and data validation
- **Dynamic Rendering**: Maps API response data to list items
- **Product Display**: Shows product title and description
- **Clean UI**: Simple, readable list format for product information
- **Fast Development**: Hot Module Replacement (HMR) for instant feedback

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **HTTP Client**: Native Fetch API
- **State Management**: React Hooks (useState, useEffect)
- **Styling**: CSS
- **Linting**: ESLint with React-specific rules
- **Package Manager**: npm

## 📦 Installation

1. **Navigate to the project directory**:
   ```bash
   cd DataFetchApp/DataFetchApp
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
DataFetchApp/
├── public/                 # Static assets
├── src/
│   ├── App.jsx           # Main Data Fetch component
│   ├── App.css           # Component styling (if used)
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
The component uses React's `useState` hook to manage two pieces of state:

```javascript
const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(true);
```

- `data`: Stores the fetched product array
- `isLoading`: Tracks whether data is still being fetched

### API Integration
The `useEffect` hook handles the API call when the component mounts:

```javascript
useEffect(() => {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setData(data);
      setIsLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    })
}, []);
```

**Process:**
1. Fetch products from FakeStore API
2. Parse JSON response
3. Update state with data
4. Handle errors gracefully
5. Always stop loading

### Conditional Rendering
The component renders different content based on state:

```javascript
// Show loading state
if (isLoading) return <p>Loading...</p>;

// Show error state
if (!data || !Array.isArray(data)) 
    return <p>No data available or data format is incorrect.</p>;

// Show product list
return (
  <ul>
    {data.map(item => (
      <li key={item.id}>
        <p>{item.title}</p>
        <p>{item.description}</p>
      </li>
    ))}
  </ul>
);
```

## 🎯 Usage

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **View the application** in your browser at `http://localhost:5173`

3. **Wait for loading**: You'll see "Loading..." initially

4. **View products**: Once loaded, you'll see a list of products with titles and descriptions

## 📊 API Reference

This app uses the **FakeStore API**:
- **Endpoint**: `https://fakestoreapi.com/products`
- **Method**: GET
- **Response**: Array of product objects

### Product Object Structure:
```json
{
  "id": 1,
  "title": "Fjallraven Backpack",
  "price": 109.95,
  "description": "Your perfect pack for everyday adventures...",
  "category": "electronics",
  "image": "...",
  "rating": { "rate": 3.9, "count": 120 }
}
```

## 🔧 Key Concepts Demonstrated

- **Async/Await Pattern**: Handling asynchronous operations
- **Fetch API**: Making HTTP requests from React
- **Error Handling**: Try-catch patterns and graceful fallbacks
- **Loading States**: User feedback during data fetching
- **Data Validation**: Checking data format before rendering
- **Array Mapping**: Rendering lists from API data
- **useEffect Hook**: Side effects management
- **Component Lifecycle**: Mounting and data fetching

## 🚀 Potential Enhancements

Consider extending this project with:
- **Search/Filter**: Filter products by name or category
- **Sorting**: Sort by price, rating, or name
- **Pagination**: Display products in pages
- **Details View**: Click product to see full details
- **Favorites**: Save favorite products to localStorage
- **Error Boundary**: Better error handling component
- **Caching**: Cache API responses to reduce requests
- **Loading Skeleton**: Visual skeleton loader during fetch
- **Retry Logic**: Automatic retry on failed requests
- **TypeScript**: Add type safety to the project

## 🌐 Real-world API Testing

You can modify the API endpoint to fetch from different resources:
- All products: `https://fakestoreapi.com/products`
- Specific category: `https://fakestoreapi.com/products/category/electronics`
- Limit results: `https://fakestoreapi.com/products?limit=5`
- Specific product: `https://fakestoreapi.com/products/1`

## 📄 License

This project is for educational and interview demonstration purposes.

## 📞 Support

For questions about this Data Fetch App, feel free to reach out or create an issue in the repository.

---

**Happy data fetching! 🚀**
