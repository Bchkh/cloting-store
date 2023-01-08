import { IonContent,  IonPage, IonHeader,IonToolbar,IonBackButton,IonButtons,IonTitle } from '@ionic/react';

import './women.css';

const Womens: React.FC = () => {
  return (
    <IonPage>
      <IonHeader > 
      <IonToolbar >
        <IonButtons slot="start" >
          <IonBackButton defaultHref="log" />
        </IonButtons>
        <IonTitle className='title'>Women</IonTitle> 
      </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='div'>
            <img src="https://assets.ajio.com/medias/sys_master/root/20220928/2Wso/63336c15aeb269dbb3ac3d26/campus_sutra_black_quilted_zip-front_jacket.jpg" alt="img" />
            <button><a href='coats_and_jackets_w'className='a'>coats and jackets</a></button>
        </div>
        <div className='div'>
            <img src="https://www.esprit.eu/dw/image/v2/BDSS_PRD/on/demandware.static/-/Sites-esprit-master/default/dwc1b50bb6/images/10/122/122EE1I323_285_10.jpg?sfrm=jpg&sw=700&sh=1050&sm=fit" alt="img" />
            <button><a href='jumpers_and_cardigans_w'className='a'>jumpers and cardigans</a></button>
        </div>
        <div className='div'>
            <img src="https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
            <button><a href='dresses'className='a'>dresses</a></button>
        </div>
        <div className='div'>
            <img src="https://images.pexels.com/photos/6311264/pexels-photo-6311264.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
            <button><a href='tracksuites_and_joggers_w'className='a'>tracksuites and joggers</a></button>
        </div>
        <div className='div'>
            <img src="https://images.pexels.com/photos/7244106/pexels-photo-7244106.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
            <button><a href='tops'className='a'>tops</a></button>
        </div>
        <div className='div'>
            <img src="https://images.pexels.com/photos/6813471/pexels-photo-6813471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
            <button><a href='blasers_w'className='a'>blasers</a></button>
        </div>
        <div className='div'>
            <img src="https://images.asos-media.com/groups/jdy-exclusive-knitted-jumper-and-wide-leg-co-ord-in-rose-pink/124645-group-1?$n_480w$&wid=476&fit=constrain" alt="img" />
            <button><a href='co-ords_w'className='a'>co-ords</a></button>
        </div>
        <div className='div'>
            <img src="https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
            <button><a href='hoodies_and_sweatshirts_w'className='a'>hoodies and sweatshirts </a></button>
        </div>
        <div className='div'>
            <img src="https://images.pexels.com/photos/2343661/pexels-photo-2343661.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
            <button><a href='jeans_w'className='a'>jeans</a></button>
        </div>
        <div className='div'>
            <img src="https://images.pexels.com/photos/10041258/pexels-photo-10041258.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
            <button><a href='shirts_blouses_w'className='a'>shirts & blouses</a></button>
        </div>
        <div className='div'>
            <img src="https://images.pexels.com/photos/1007019/pexels-photo-1007019.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
            <button><a href='skirts'className='a'>skirts</a></button>
        </div>

        
      </IonContent>
    </IonPage>
  );
};

export default Womens;