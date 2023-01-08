import { IonContent,  IonPage,IonHeader,IonBackButton,IonButtons,IonToolbar,IonTitle } from '@ionic/react';

import './coats_and_jackets_w.css';

const Joggersm: React.FC = () => {
  return (
    <IonPage>
         <IonHeader > 
      <IonToolbar >
        <IonButtons slot="start" >
          <IonBackButton defaultHref="mens" />
        </IonButtons>
        <IonTitle className='titlem'>Tracksuites and Joggers</IonTitle> 
      </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <div>
            <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18962632/2022/8/26/6baaca64-1bc9-441c-bd90-7d69a47977b01661511535057-AS-M-NK-CLUB-LND-WVN-TRK-SUIT-1581661511534321-1.jpg" alt="img" />
            <button className='btnm'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btnm'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop black tracksuite</p> 
            <strong>£79.00</strong>
        </div>
        <div>
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/66a88928-fc70-4b74-9665-b00f4ce45392/fc-football-tracksuit-l0L2xk.png" alt="img" />
            <button className='btnm'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btnm'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop black tracksuite </p> 
            <strong>£98.00</strong>
        </div>
        <div>
            <img src="https://media.boohoo.com/i/boohoo/mzz03796_grey%20marl_xl?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit" alt="img" />
            <button className='btnm'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btnm'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop beige  tracksuite </p> 
            <strong>£102.00</strong>
        </div>
        
       
      </IonContent>
    </IonPage>
  );
};

export default Joggersm;