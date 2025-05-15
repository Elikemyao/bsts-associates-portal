
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ScrollToTopButton from './components/ScrollToTopButton.tsx'

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <ScrollToTopButton />
  </>
);
