import { IonContent,  IonPage,IonHeader,IonBackButton,IonButtons,IonToolbar,IonTitle } from '@ionic/react';

import './coats_and_jackets_w.css';

const Shirtm: React.FC = () => {
  return (
    <IonPage>
         <IonHeader > 
      <IonToolbar >
        <IonButtons slot="start" >
          <IonBackButton defaultHref="mens" />
        </IonButtons>
        <IonTitle className='titlem'>Shirts</IonTitle> 
      </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <div>
            <img src="https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/25082022/21452_44_1661411706_6307217a2969d-1099112493083.jpg" alt="img" />
            <button className='btnm'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btnm'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop black and white shirt</p> 
            <strong>£79.00</strong>
        </div>
        <div>
            <img src="https://images.asos-media.com/products/asos-design-regular-check-shirt-in-black/201445045-1-black?$n_480w$&wid=476&fit=constrain" alt="img" />
            <button className='btnm'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btnm'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop white shirt </p> 
            <strong>£98.00</strong>
        </div>
        <div>
            <img src="https://m.media-amazon.com/images/I/81LThZqBayL._AC._SR360,460.jpg" alt="img" />
            <button className='btnm'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btnm'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop black and red shirt </p> 
            <strong>£102.00</strong>
        </div>
        
       
      </IonContent>
    </IonPage>
  );
};

export default Shirtm;