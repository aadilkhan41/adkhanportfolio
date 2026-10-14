import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import AuroraBackground from './components/AuroraBackground/AuroraBackground';

createRoot(document.getElementById('root')!).render(
    <>
        <AuroraBackground />
        <div style={{ position: "relative", zIndex: 1 }}>
            <Home />
        </div>
    </>,
);
