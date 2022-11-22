import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import One from './components/One';

function App() {
  return (
    <div className='App'>
   <div className='ui raised very padded text container segment' >
    <AuthContextProvider>
    <ThemeContextProvider>
    <Navbar/>
    <TodoList/>
    <One/>
    </ThemeContextProvider>
    </AuthContextProvider>
   </div>
   </div>
  );
}

export default App;
