import { IonContent,  IonPage,IonHeader,IonBackButton,IonButtons,IonToolbar,IonTitle } from '@ionic/react';

import './coats_and_jackets_w.css';

const Coatsw: React.FC = () => {
  return (
    <IonPage>
         <IonHeader > 
      <IonToolbar >
        <IonButtons slot="start" >
          <IonBackButton defaultHref="mens" />
        </IonButtons>
        <IonTitle className='titlem'>Coats and Jackets</IonTitle> 
      </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <div>
            <img src="https://slimages.macysassets.com/is/image/McomMedia/media/MensMensCoatsJacketsOvercoatsPeacoats2878265_1482598.jpg" alt="img" />
            <button className='btnm'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btnm'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop double breasted long coat in dark camel</p> 
            <strong>£79.00</strong>
        </div>
        <div>
            <img src="https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,w_800,c_scale/v1/NA/Style/ECOMM/M3RL45WF4G2-G9D5" alt="img" />
            <button className='btnm'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btnm'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop double breasted short coat in beige</p> 
            <strong>£98.00</strong>
        </div>
        <div>
            <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/6832161/2018/11/14/2a3c5f0a-d90e-439a-9d71-577d0ba8b1201542196198359-WROGN-Men-Black-Solid-Bomber-3181542196198219-1.jpg" alt="img" />
            <button className='btnm'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btnm'><a href='/panier'className='a1'>Achete</a></button>
            <p> black short jacket</p> 
            <strong>£102.00</strong>
        </div>
        
       
      </IonContent>
    </IonPage>
  );
};

export default Coatsw;