function swDev() {
    if("serviceWorker" in navigator) {
        // Register a service worker hosted at the root of the site using the default scope.
        navigator.serviceWorker.register("/sw.js").then((registration) => {
            console.warn("Service worker registration succeeded", registration);
        }).catch((error) => {
            console.error("Service worker registration failed! " + error);
        })
    } else {
        console.log("Service workers are not supported!");
    }
}

export { swDev };