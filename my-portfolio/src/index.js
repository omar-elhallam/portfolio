import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Import your global CSS (you can customize this file)
import App from './App';  // Import the main App component

ReactDOM.render(
  <React.StrictMode>
    <App />  // This is where your app's UI will be rendered
  </React.StrictMode>,
  document.getElementById('root')  // Attaches to the DOM element with id "root"
);