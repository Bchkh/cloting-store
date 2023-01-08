import { IonContent,  IonPage,IonHeader,IonBackButton,IonButtons,IonToolbar,IonTitle } from '@ionic/react';

import './coats_and_jackets_w.css';

const Blaserm: React.FC = () => {
  return (
    <IonPage>
         <IonHeader > 
      <IonToolbar >
        <IonButtons slot="start" >
          <IonBackButton defaultHref="mens" />
        </IonButtons>
        <IonTitle className='titlem'>Blasers</IonTitle> 
      </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <div>
            <img src="https://5.imimg.com/data5/SELLER/Default/2020/11/BU/SM/YF/44342278/33cfbaef-78ac-444b-aa06-57947626f692-1--250x250.jpg" alt="img" />
            <button className='btnm'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btnm'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop black blaser</p> 
            <strong>£79.00</strong>
        </div>
        <div>
            <img src="https://cdn.shopify.com/s/files/1/1042/4718/products/melangegrey_BZR004T_M_77b39fa9-0824-4153-9f4e-a38823fc30f6_800x.progressive.png.jpg?v=1618237678" alt="img" />
            <button className='btnm'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btnm'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop white blaser </p> 
            <strong>£98.00</strong>
        </div>
        <div>
            <img src="https://4.imimg.com/data4/SP/LC/MY-16635003/men-blazers-500x500.jpg" alt="img" />
            <button className='btnm'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btnm'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop blaser </p> 
            <strong>£102.00</strong>
        </div>
        
       
      </IonContent>
    </IonPage>
  );
};

export default Blaserm;