import { IonContent,  IonPage,IonHeader,IonBackButton,IonButtons,IonToolbar,IonTitle } from '@ionic/react';

import './coats_and_jackets_w.css';

const Jeansw: React.FC = () => {
  return (
    <IonPage>
         <IonHeader > 
      <IonToolbar >
        <IonButtons slot="start" >
          <IonBackButton defaultHref="womens" />
        </IonButtons>
        <IonTitle className='title'>jeans</IonTitle> 
      </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <div>
            <img src="https://media.glamour.com/photos/62d5718be267d3801233d285/master/w_320%2Cc_limit/Levi%25E2%2580%2599s%2520Ribcage%2520Straight%2520Ankle%2520Jeans.png" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop blue jean</p> 
            <strong>£79.00</strong>
        </div>
        <div>
            <img src="https://images.meesho.com/images/products/154252480/ixbfx_512.jpg" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop blue jean </p> 
            <strong>£98.00</strong>
        </div>
        <div>
            <img src="https://media.everlane.com/image/upload/c_scale,dpr_3.0,f_auto,q_auto,w_auto/c_limit,w_400/v1/i/1bebbb62_0a5c.jpg" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop black jean </p> 
            <strong>£102.00</strong>
        </div>
        
       
      </IonContent>
    </IonPage>
  );
};

export default Jeansw;