import { IonContent,  IonPage,IonHeader,IonBackButton,IonButtons,IonToolbar,IonTitle } from '@ionic/react';

import './coats_and_jackets_w.css';

const Jumpersw: React.FC = () => {
  return (
    <IonPage>
         <IonHeader > 
      <IonToolbar >
        <IonButtons slot="start" >
          <IonBackButton defaultHref="womens" />
        </IonButtons>
        <IonTitle className='title'>jumpers and cardigans</IonTitle> 
      </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <div>
            <img src="https://m.media-amazon.com/images/I/81Ufzl-UdfL._AC_UL320_.jpg" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> yellow jumper long </p> 
            <strong>£79.00</strong>
        </div>
        <div>
            <img src="https://babaa.es/wp-content/uploads/2020/02/jumper-woman-no17-dark-mist-03.jpg" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop double jumper in green</p> 
            <strong>£98.00</strong>
        </div>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX39NfPCgDN8gvJM_xLJWH2szr0cZjMNENB0YV3cYWIT9h3KsrFd-TlkI-gYkUgi32-AQ&usqp=CAU" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> peige cardigan short </p> 
            <strong>£102.00</strong>
        </div>
        </IonContent>
    </IonPage>
  );
};

export default Jumpersw;