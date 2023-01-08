import { IonContent,  IonPage,IonHeader,IonBackButton,IonButtons,IonToolbar,IonTitle } from '@ionic/react';

import './coats_and_jackets_w.css';

const Dresse: React.FC = () => {
  return (
    <IonPage>
         <IonHeader > 
      <IonToolbar >
        <IonButtons slot="start" >
          <IonBackButton defaultHref="womens" />
        </IonButtons>
        <IonTitle className='title'>Dresses</IonTitle> 
      </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <div>
            <img src="https://assets.ajio.com/medias/sys_master/root/20221102/CBi1/6361934ef997ddfdbd4f6e6a/purvaja_black_chevrons_bodycon_dress.jpg" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop black and white dresse</p> 
            <strong>£79.00</strong>
        </div>
        <div>
            <img src="https://assets.ajio.com/medias/sys_master/root/20220817/aEGF/62fc174baeb26917617922df/aspora_black_floral_print_v-neck_gown_dress_with_bell_sleeves.jpg" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop black dresse with red flowers </p> 
            <strong>£98.00</strong>
        </div>
        <div>
            <img src="https://i.etsystatic.com/5609612/r/il/ab1829/3925514150/il_fullxfull.3925514150_mzzb.jpg" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> black classic dresse </p> 
            <strong>£102.00</strong>
        </div>
        
       
      </IonContent>
    </IonPage>
  );
};

export default Dresse;