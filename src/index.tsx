import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import "../src/components/css/style.css";

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);
