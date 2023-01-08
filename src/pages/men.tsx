import { IonContent,  IonPage, IonHeader,IonToolbar,IonBackButton,IonButtons,IonTitle } from '@ionic/react';

import './men.css';

const Men: React.FC = () => {
  return (
    <IonPage>
      <IonHeader > 
      <IonToolbar >
        <IonButtons slot="start" >
          <IonBackButton defaultHref="log"/>
        </IonButtons>
        <IonTitle className='titlem'>Men</IonTitle> 
      </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='divm'>
            <img src="https://images.pexels.com/photos/840916/pexels-photo-840916.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
            <button className='buttonm'><a href='coats_and_jackets_m'className='a'>coats and jackets</a></button>
        </div>
        <div className='divm'>
            <img src="https://images.pexels.com/photos/2731361/pexels-photo-2731361.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
            <button className='buttonm'><a href='jumpers_and_cardigans_m'className='a'>jumpers and cardigans</a></button>
        </div>
        <div className='divm'>
            <img src="https://sc04.alicdn.com/kf/Hf22a30b425d441259571bc01c7b38cfeG.jpg" alt="img" />
            <button className='buttonm'><a href='tracksuites_and_joggers_m'className='a'>tracksuites and joggers</a></button>
        </div>
        
        <div className='divm'>
            <img src="https://cdn03.nnnow.com/web-images/medium/styles/MZFU9RPHFVG/1625213667732/1.jpg" alt="img" />
            <button className='buttonm'><a href='blasers_m'className='a'>blasers</a></button>
        </div>
        <div className='divm'>
            <img src="https://images.asos-media.com/groups/topman-polyester-blend-set-in-black/66682-group-1?$n_480w$&wid=476&fit=constrain" alt="img" />
            <button className='buttonm'><a href='co-ords_m'className='a'>co-ords</a></button>
        </div>
        <div className='divm'>
            <img src="https://images.pexels.com/photos/6311687/pexels-photo-6311687.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
            <button className='buttonm'><a href='hoodies_and_sweatshirts_m 'className='a'>hoodies and sweatshirts </a></button>
        </div>
        <div className='divm'>
            <img src="https://images.pexels.com/photos/3048457/pexels-photo-3048457.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
            <button className='buttonm'><a href='jeans_m'className='a'>jeans</a></button>
        </div>
        <div className='divm'>
            <img src="https://images.pexels.com/photos/10397680/pexels-photo-10397680.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
            <button className='buttonm'><a href='shirts_blouses_m'className='a'>shirts & blouses</a></button>
        </div>
        

        
      </IonContent>
    </IonPage>
  );
};

export default Men;