import { IonContent,  IonPage,IonHeader,IonBackButton,IonButtons,IonToolbar,IonTitle } from '@ionic/react';

import './coats_and_jackets_w.css';

const Blaserw: React.FC = () => {
  return (
    <IonPage>
         <IonHeader > 
      <IonToolbar >
        <IonButtons slot="start">
          <IonBackButton defaultHref="womens" />
        </IonButtons>
        <IonTitle className='title'>Blasers</IonTitle> 
      </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <div>
            <img src="https://n.nordstrommedia.com/id/sr3/99e686a9-c21f-4742-b943-27f80cff1467.jpeg?h=365&w=240&dpr=2" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop black blaser</p> 
            <strong>£79.00</strong>
        </div>
        <div>
            <img src="https://lookagain.scene7.com/is/image/OttoUK/553w/tailored-double-breasted-blazer-by-star-by-julien-macdonald~79D404FRSP.jpg" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop white blaser </p> 
            <strong>£98.00</strong>
        </div>
        <div>
            <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1664812963-e3ad6e5a-9be6-4d76-8b81-4b853df44900.jpg?crop=1xw:1xh;center,top&resize=480:*" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop blaser </p> 
            <strong>£102.00</strong>
        </div>
        
       
      </IonContent>
    </IonPage>
  );
};

export default Blaserw;