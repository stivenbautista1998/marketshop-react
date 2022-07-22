import React from "react";
import ReactDOM from "react-dom/client";
import { App } from './routes/App';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);

console.log(process.env.NODE_ENV);
console.log(process.env.PUBLIC_URL);
console.log(process.env.S3_API);

serviceWorkerRegistration.register({
    onUpdate: async (registration) => {
        // Corremos este código si hay una nueva versión de nuestra app
        // Detalles en: https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle
        if (registration && registration.waiting) {
            await registration.unregister();
            registration.waiting.postMessage({ type: "SKIP_WAITING" });
            // Des-registramos el SW para recargar la página y obtener la nueva versión. Lo cual permite que el navegador descargue lo nuevo y que invalida la cache que tenía previamente.
            window.location.reload();
        }
    },
});