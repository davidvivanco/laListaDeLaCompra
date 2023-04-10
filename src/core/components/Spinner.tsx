import { IonSpinner } from "@ionic/react";


const Spinner: React.FC = ({  size = '3' }) => {
    return (
        <>
            <div className="w-100 h-100 flex jc-c ai-c">
                <IonSpinner
                    style={{ transform: `scale(${size})` }}
                    color="primary" className="fs-12" name="lines-sharp"></IonSpinner>
            </div>
        </>
    );
};

export default Spinner;


