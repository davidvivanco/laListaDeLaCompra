import { IonImg } from "@ionic/react";
import { Button } from "@mui/material";


const ListEmpty: React.FC = () => {

    return (
        <>
            <div className='banner mt-12'>
                <IonImg src="./assets/images/empty-list-banner.jpg" alt=""></IonImg>
            </div>
            <div className='ion-padding'>
                <div className='flex jc-c fw-500 fs-m'>
                    No hay ningun elemento en la lista.
                </div>
                <div className='mt-xl'>
                    <Button
                        fullWidth variant="contained">Añadir Elementos</Button>
                </div>
            </div></>
    );
};

export default ListEmpty;
