import { IonContent,  IonPage,IonHeader,IonBackButton,IonButtons,IonToolbar,IonTitle } from '@ionic/react';

import './coats_and_jackets_w.css';

const Skirtw: React.FC = () => {
  return (
    <IonPage>
         <IonHeader > 
      <IonToolbar >
        <IonButtons slot="start" >
          <IonBackButton defaultHref="womens" />
        </IonButtons>
        <IonTitle className='title'>Skirts</IonTitle> 
      </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <div>
            <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13545674/2022/4/21/87816efa-ce3d-40bf-a0e0-447efe0809ad1650517669533FableStreetBlackA-LineMidiSkirt1.jpg" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop black skirt</p> 
            <strong>£79.00</strong>
        </div>
        <div>
            <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/4/8/tr:w-270,/48f8e9dJP_JPKR1883_1.jpg?rnd=20200526195200" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop indian skirt </p> 
            <strong>£98.00</strong>
        </div>
        <div>
            <img src="https://lzd-img-global.slatic.net/g/p/03cb2018f9c0db4cd993ed2b3b039de5.jpg_720x720q80.jpg_.webp" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop grey skirt </p> 
            <strong>£102.00</strong>
        </div>
        
       
      </IonContent>
    </IonPage>
  );
};

export default Skirtw;