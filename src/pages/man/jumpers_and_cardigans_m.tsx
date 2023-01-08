import { IonContent,  IonPage,IonHeader,IonBackButton,IonButtons,IonToolbar,IonTitle } from '@ionic/react';

import './coats_and_jackets_w.css';

const Jumpersm: React.FC = () => {
  return (
    <IonPage>
         <IonHeader > 
      <IonToolbar >
        <IonButtons slot="start" >
          <IonBackButton defaultHref="mens" />
        </IonButtons>
        <IonTitle className='titlem'>Jumpers and Cardigans</IonTitle> 
      </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <div>
            <img src="https://i.pinimg.com/736x/ae/80/a6/ae80a65a29c06391cfdee8317ea798b2.jpg" alt="img" />
            <button className='btnm'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btnm'><a href='/panier'className='a1'>Achete</a></button>
            <p> pink jumper  </p> 
            <strong>£79.00</strong>
        </div>
        <div>
            <img src="https://cdn.shopify.com/s/files/1/1181/5370/products/4836-ECRU-MODEL-MENS-SUBMARINER-ROLL-NECK-JUMPER-3_400x.jpg?v=1669637818" alt="img" />
            <button className='btnm'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btnm'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop double jumper in beige</p> 
            <strong>£98.00</strong>
        </div>
        <div>
            <img src="https://media.gq.com/photos/6322253b8b78ce2d64b8c86d/master/w_1280%2Cc_limit/cardi10.jpg" alt="img" />
            <button className='btnm'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btnm'><a href='/panier'className='a1'>Achete</a></button>
            <p> peige cardigan short </p> 
            <strong>£102.00</strong>
        </div>
        </IonContent>
    </IonPage>
  );
};

export default Jumpersm;