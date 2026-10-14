import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import VantaBodyBackground from './components/VantaBodyBackground/VantaBodyBackground.jsx';

createRoot(document.getElementById('root')).render(
    <>
        <VantaBodyBackground />
        <div style={{ position: "relative", zIndex: 1 }}>
            <Home />
        </div>
    </>,
);