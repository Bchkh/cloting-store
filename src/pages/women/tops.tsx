import { IonContent,  IonPage,IonHeader,IonBackButton,IonButtons,IonToolbar,IonTitle } from '@ionic/react';

import './coats_and_jackets_w.css';

const Tops: React.FC = () => {
  return (
    <IonPage>
         <IonHeader > 
      <IonToolbar >
        <IonButtons slot="start" >
          <IonBackButton defaultHref="womens" />
        </IonButtons>
        <IonTitle className='title'>Tops</IonTitle> 
      </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <div>
            <img src="https://assets.ajio.com/medias/sys_master/root/20221123/TwYq/637e1aa3f997ddfdbd93ea44/azira_navy_blue_abstract_printed_regular_top.jpg" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop black top with flowers</p> 
            <strong>£79.00</strong>
        </div>
        <div>
            <img src="https://m.media-amazon.com/images/I/61InLi2XGjL._UY550_.jpg" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop black top </p> 
            <strong>£98.00</strong>
        </div>
        <div>
            <img src="https://m.media-amazon.com/images/G/31/img19/Fashion/WA19/Topwear-Store/Tones/muted-grey._SY530_QL85_.jpg" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop grey top </p> 
            <strong>£102.00</strong>
        </div>
        
       
      </IonContent>
    </IonPage>
  );
};

export default Tops;