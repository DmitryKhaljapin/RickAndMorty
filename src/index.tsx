import { createRoot} from 'react-dom/client';
import { App } from './components/App';
import React from 'react';
import './styles.css';

const root = createRoot(document.getElementById('app'));

root.render(<App />);
