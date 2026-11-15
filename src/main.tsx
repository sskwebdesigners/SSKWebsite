import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles.css';

const savedRoute = sessionStorage.getItem('gh-pages-route');
if (savedRoute?.startsWith(import.meta.env.BASE_URL)) {
  sessionStorage.removeItem('gh-pages-route');
  window.history.replaceState(null, '', savedRoute);
}

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><BrowserRouter basename={import.meta.env.BASE_URL}><App /></BrowserRouter></React.StrictMode>);
