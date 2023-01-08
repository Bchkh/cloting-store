import { IonContent,  IonPage,IonHeader,IonBackButton,IonButtons,IonToolbar,IonTitle } from '@ionic/react';

import './coats_and_jackets_w.css';

const Hoodiesw: React.FC = () => {
  return (
    <IonPage>
         <IonHeader > 
      <IonToolbar >
        <IonButtons slot="start" >
          <IonBackButton defaultHref="womens" />
        </IonButtons>
        <IonTitle className='title'>Hoodies</IonTitle> 
      </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <div>
            <img src="https://www.beyoung.in/api/cache/catalog/products/new_plain_hoodies_for_women/plain_pista_green_hoodies_women_base_400x533.jpg" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop green hoodie</p> 
            <strong>£79.00</strong>
        </div>
        <div>
            <img src="https://m.media-amazon.com/images/I/71ESLvPRZ3L._UY550_.jpg" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop pink hoodie</p> 
            <strong>£98.00</strong>
        </div>
        <div>
            <img src="https://assets.vogue.com/photos/636aa18a36667ff150e73dd7/3:4/w_1280%2Cc_limit/slide_23.jpg" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop pink hoodie </p> 
            <strong>£102.00</strong>
        </div>
        
       
      </IonContent>
    </IonPage>
  );
};

export default Hoodiesw;