import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './Menu.tsx';
import Admin from './Admin.tsx';
import './index.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

const queryClient = newQueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}></QueryClientProvider>
    <BrowserRouter>
    <nav className='bg-black'>
      <Link to="/">Home</Link> | <Link to="/admin"><Admin></Admin></Link>
    </nav>

    <main>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </main>
      
      
    </BrowserRouter>
  </React.StrictMode>,
)
