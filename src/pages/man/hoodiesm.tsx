import { IonContent,  IonPage,IonHeader,IonBackButton,IonButtons,IonToolbar,IonTitle } from '@ionic/react';

import './coats_and_jackets_w.css';

const Hoodiesm: React.FC = () => {
  return (
    <IonPage>
         <IonHeader > 
      <IonToolbar >
        <IonButtons slot="start" >
          <IonBackButton defaultHref="mens" />
        </IonButtons>
        <IonTitle className='titlem'>Hoodies</IonTitle> 
      </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <div>
            <img src="https://m.media-amazon.com/images/I/71xoOfrdfZL._UY550_.jpg" alt="img" />
            <button className='btnm'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btnm'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop green hoodie</p> 
            <strong>£79.00</strong>
        </div>
        <div>
            <img src="https://n.nordstrommedia.com/id/sr3/a7a2839b-e8b8-49ea-87d6-4e93f6b7533f.jpeg?h=365&w=240&dpr=2" alt="img" />
            <button className='btnm'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btnm'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop yellow hoodie</p> 
            <strong>£98.00</strong>
        </div>
        <div>
            <img src="https://m.media-amazon.com/images/I/51Hz7KZL2TL._AC._SR360,460.jpg" alt="img" />
            <button className='btnm'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btnm'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop grey hoodie </p> 
            <strong>£102.00</strong>
        </div>
        
       
      </IonContent>
    </IonPage>
  );
};

export default Hoodiesm;