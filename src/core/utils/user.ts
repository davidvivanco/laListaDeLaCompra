import { UseIonRouterResult } from "@ionic/react";

const isLoggedHandler = async (
    isLogged: boolean,
    router: UseIonRouterResult,
    uid: string,
    getUser: (uid: string) => Promise<void>
) => {
    if (isLogged) {
        await getUser(uid);
        router.push("/tabs", "root");
    }
}


export { isLoggedHandler };