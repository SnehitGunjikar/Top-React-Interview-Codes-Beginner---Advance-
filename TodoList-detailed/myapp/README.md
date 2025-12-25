# TodoList-Detailed App

A comprehensive and user-friendly Todo List application built with React and Vite. This app allows users to manage their daily tasks with features like adding, editing, marking as complete, and deleting tasks.

## 🚀 Features

- **Add Tasks**: Easily add new tasks to your todo list
- **Mark Complete/Pending**: Toggle task status with checkboxes
- **Edit Tasks**: Inline editing of task titles
- **Delete Tasks**: Remove tasks you no longer need
- **Visual Status Badges**: Clear visual indicators for completed and pending tasks
- **Responsive Design**: Clean, modern UI that works on different screen sizes
- **Real-time Updates**: Instant feedback and state management

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Language**: JavaScript (ES6+)
- **Styling**: Inline CSS with React
- **Linting**: ESLint with React-specific rules
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd TodoList-detailed/myapp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## 🚀 Running the Application

### Development Mode
Start the development server with hot reload:
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
Serve the production build locally:
```bash
npm run preview
```

### Linting
Run ESLint to check for code quality issues:
```bash
npm run lint
```

## 📁 Project Structure

```
myapp/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Asset files
│   ├── App.css           # Component styles (if used)
│   ├── App.jsx           # Main application component
│   ├── index.css         # Global styles
│   └── main.jsx          # Application entry point
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint configuration
└── README.md            # This file
```

## 🎯 Usage

1. **Adding a Task**:
   - Type your task in the input field
   - Click the "Add" button or press Enter

2. **Completing a Task**:
   - Click the checkbox next to any task to mark it as complete
   - Completed tasks show a green "Completed" badge

3. **Editing a Task**:
   - Click the "✎ Edit" button next to any task
   - Modify the text in the input field that appears
   - Press Enter or click outside to save changes

4. **Deleting a Task**:
   - Click the "✕" button next to any task to remove it

## 🔧 Key Implementation Details

### State Management
- Uses React's `useState` hook for local state management
- Maintains an array of task objects with `id`, `title`, and `completed` properties

### Component Architecture
- Single-component architecture with all logic in `App.jsx`
- Inline styling for component-specific CSS
- Event handlers for user interactions

### Features Implementation
- **Task Addition**: Form submission with input validation
- **Task Editing**: Inline editing with focus management
- **Task Deletion**: Array filtering for removal
- **Status Toggle**: State mapping for completion status

## 🤝 Contributing

This is a demo project for interview purposes. For contributions:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational and interview demonstration purposes.

## 📞 Support

If you have any questions about this TodoList application, feel free to reach out or create an issue in the repository.

---

**Happy task managing! 🎉**
