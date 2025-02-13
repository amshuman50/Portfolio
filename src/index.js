import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Resume from './pages/resume';
import Contact from './pages/contact';
import Head from './pages/head';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
          <Route path="head" element={<Head />} />
        </Route >
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
