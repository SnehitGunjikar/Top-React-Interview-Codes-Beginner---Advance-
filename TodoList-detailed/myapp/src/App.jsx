import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Buy groceries', completed: true },
    { id: 2, title: 'Walk the dog', completed: false },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  // --- Actions ---
  const addTask = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const newTask = { id: Date.now(), title: inputValue, completed: false };
    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditValue(task.title);
  };

  const saveEdit = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, title: editValue } : t));
    setEditingId(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div style={styles.pageBackground}>
      <div style={styles.appContainer}>
        <h1 style={styles.header}>To-Do App</h1>
        
        {/* Input Card */}
        <form onSubmit={addTask} style={styles.inputContainer}>
          <input 
            style={styles.mainInput}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task..."
          />
          <button type="submit" style={styles.addBtn}>Add</button>
        </form>

        {/* Task List */}
        <div style={styles.listContainer}>
          {tasks.map(task => (
            <div key={task.id} style={styles.taskCard}>
              <div style={styles.taskLeft}>
                <input 
                  type="checkbox" 
                  checked={task.completed} 
                  onChange={() => toggleComplete(task.id)}
                  style={styles.checkbox}
                />
                {editingId === task.id ? (
                  <input 
                    style={styles.editInput}
                    value={editValue} 
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={() => saveEdit(task.id)}
                    autoFocus
                  />
                ) : (
                  <span style={{
                    ...styles.taskText,
                    fontWeight: task.completed ? 'bold' : 'normal',
                    color: task.completed ? '#333' : '#555'
                  }}>{task.title}</span>
                )}
              </div>

              <div style={styles.taskRight}>
                <span style={task.completed ? styles.badgeCompleted : styles.badgePending}>
                  {task.completed ? 'Completed' : 'Pending'}
                </span>
                <button onClick={() => startEdit(task)} style={styles.editBtn}>
                  ✎ Edit
                </button>
                <button onClick={() => deleteTask(task.id)} style={styles.deleteBtn}>
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Styles to match the image ---
const styles = {
  pageBackground: { backgroundColor: '#e9effd', minHeight: '100vh', padding: '40px 20px', fontFamily: 'sans-serif' },
  appContainer: { maxWidth: '600px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', overflow: 'hidden' },
  header: { textAlign: 'center', color: '#444', fontSize: '24px', margin: '20px 0' },
  inputContainer: { display: 'flex', padding: '20px', borderBottom: '1px solid #f0f0f0', gap: '10px' },
  mainInput: { flex: 1, padding: '12px', borderRadius: '4px', border: '1px solid #ddd', outline: 'none' },
  addBtn: { backgroundColor: '#5c85d6', color: 'white', border: 'none', padding: '0 25px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' },
  listContainer: { padding: '20px' },
  taskCard: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 15px', border: '1px solid #eee', borderRadius: '6px', marginBottom: '10px' },
  taskLeft: { display: 'flex', alignItems: 'center', gap: '12px', flex: 1 },
  checkbox: { width: '18px', height: '18px', cursor: 'pointer', accentColor: '#4caf50' },
  taskText: { fontSize: '15px' },
  taskRight: { display: 'flex', alignItems: 'center', gap: '10px' },
  badgeCompleted: { backgroundColor: '#eef9f1', color: '#5cb85c', padding: '4px 12px', borderRadius: '4px', fontSize: '12px', border: '1px solid #e0f2e4' },
  badgePending: { backgroundColor: '#fff9e6', color: '#f0ad4e', padding: '4px 12px', borderRadius: '4px', fontSize: '12px', border: '1px solid #fcf2d4' },
  editBtn: { backgroundColor: '#5c85d6', color: 'white', border: 'none', padding: '6px 15px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' },
  deleteBtn: { background: 'none', border: 'none', color: '#ccc', cursor: 'pointer', fontSize: '18px' },
  editInput: { padding: '4px', border: '1px solid #5c85d6', borderRadius: '3px', width: '80%' }
};

export default TodoApp;