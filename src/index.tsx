import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import "./style.css";
import "./userpage.css";
const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <App name="StackBlitz" />
  </StrictMode>
);
