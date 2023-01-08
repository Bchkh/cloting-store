import { IonContent,  IonPage,IonHeader,IonBackButton,IonButtons,IonToolbar,IonTitle } from '@ionic/react';

import './coats_and_jackets_w.css';

const Coodrew: React.FC = () => {
  return (
    <IonPage>
         <IonHeader > 
      <IonToolbar >
        <IonButtons slot="start" >
          <IonBackButton defaultHref="womens" />
        </IonButtons>
        <IonTitle className='title'>Co-ords</IonTitle> 
      </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <div>
            <img src="https://cdn.shopify.com/s/files/1/2290/7887/products/F0033205317-md_3.jpg?v=1666260255" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop co-ord</p> 
            <strong>£79.00</strong>
        </div>
        <div>
            <img src="https://i.ebayimg.com/images/g/~xsAAOSwftNgwkIP/s-l1600.jpg" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop long co-ord </p> 
            <strong>£98.00</strong>
        </div>
        <div>
            <img src="https://media.boohoo.com/i/boohoo/pzz59537_beige_xl_3/female-petite-rib-knitted-top-and-wide-leg-pants-co-ord" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop beige co-ord</p> 
            <strong>£102.00</strong>
        </div>
        
       
      </IonContent>
    </IonPage>
  );
};

export default Coodrew;