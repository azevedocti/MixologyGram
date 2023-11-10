import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import "./style.css";
import "/workspaces/MixologyGram/src/pages/productpage.css";
import "/workspaces/MixologyGram/src/pages/feedpage.css";
const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);
