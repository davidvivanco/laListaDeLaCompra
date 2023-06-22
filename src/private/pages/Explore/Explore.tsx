import { IonContent, IonPage, useIonRouter } from "@ionic/react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/auth/AuthProvider";

const Explore: React.FC = () => {

    const router = useIonRouter();
    const { isLoggedIn } = useContext(AuthContext);

    useEffect(() => {
        isLoggedIn(router);
    }, [])

 
    return (
        <IonPage>
            <IonContent>
                EXPLORE
            </IonContent>
        </IonPage >
    );

};

export default Explore;

