import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router";
import App from '@/App.tsx'
import '@/index.css'

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <HashRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </HashRouter>
  );
} else {
  // Optional: Handle the case where the element is not found
  console.error("Error: Could not find element with ID 'root'");
}