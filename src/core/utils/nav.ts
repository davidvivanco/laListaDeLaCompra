import { UseIonRouterResult } from "@ionic/react";

const noDirectAccessHandler = (router: UseIonRouterResult) => {
    const pathname = window.location.pathname;
    if (!pathname.includes('login') && !pathname.includes('home')) {
        console.log('navigate', pathname);
        router.push("/tabs", "root");
    }
}

export { noDirectAccessHandler };