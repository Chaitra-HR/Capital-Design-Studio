import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Global styles first so component CSS Modules can override them.
import '@/styles/global.css';
import { App } from '@/app/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
