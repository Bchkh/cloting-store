import { IonContent,  IonPage,IonHeader,IonBackButton,IonButtons,IonToolbar,IonTitle } from '@ionic/react';

import './coats_and_jackets_w.css';

const Joggers: React.FC = () => {
  return (
    <IonPage>
         <IonHeader > 
      <IonToolbar >
        <IonButtons slot="start" >
          <IonBackButton defaultHref="womens" />
        </IonButtons>
        <IonTitle className='title'>Tracksuites and Joggers</IonTitle> 
      </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <div>
            <img src="https://www.twinset.com/dw/image/v2/BCKJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd15ffae7/images/TwinSet/Images/Catalog/222LI23EE-00006-01.JPG?sw=565&sh=690" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop black tracksuite</p> 
            <strong>£79.00</strong>
        </div>
        <div>
            <img src="https://media.nastygal.com/i/nastygal/agg04957_sand_xl?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop beige tracksuite </p> 
            <strong>£98.00</strong>
        </div>
        <div>
            <img src="https://media.boohoo.com/i/boohoo/gzz40533_navy_xl?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop blue  tracksuite </p> 
            <strong>£102.00</strong>
        </div>
        
       
      </IonContent>
    </IonPage>
  );
};

export default Joggers;