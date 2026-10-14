import { useEffect } from "react";

const VantaBodyEffect = () => {
    useEffect(() => {
        const loadScriptsAndInit = async () => {
            const loadScript = (src) =>
                new Promise((resolve, reject) => {
                    const script = document.createElement("script");
                    script.src = src;
                    script.async = true;
                    script.onload = resolve;
                    script.onerror = reject;
                    document.body.appendChild(script);
                });

            // Load both scripts in sequence
            await loadScript("/three.r134.min.js");
            await loadScript("/vanta.waves.min.js");

            // Initialize Vanta after both are loaded
            if (window.VANTA?.WAVES) {
                window.VANTA.WAVES({
                    el: document.body,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0x60606,
                });

                document.body.style.margin = "0";
            } else {
                console.error("VANTA.WAVES failed to load.");
            }
        };

        loadScriptsAndInit();
    }, []);

    return null;
};

export default VantaBodyEffect;