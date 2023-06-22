import { useIonRouter } from '@ionic/react';
import { Button } from '@mui/material';

const ListEmpty: React.FC = () => {
  const router = useIonRouter();
  const onContinue = () => {
    router.push('add-item');
  };
  return (
    <>
      <div className="img w-100 mt-18 flex jc-c ai-c fd-col">
        <img height={300} src={'assets/images/empty-list.png'} alt="" />
        <div className="flex jc-c mt-10">No hay elementos en la lista</div>
      </div>
      <div className='flex jc-c mt-20'>
        <Button onClick={onContinue} className="btn-primary" size="large" >
          Añadir elementos
        </Button>
      </div>
    </>
  );
};

export default ListEmpty;
