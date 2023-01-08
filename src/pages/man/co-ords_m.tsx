import { IonContent,  IonPage,IonHeader,IonBackButton,IonButtons,IonToolbar,IonTitle } from '@ionic/react';

import './coats_and_jackets_w.css';

const Coodrem: React.FC = () => {
  return (
    <IonPage>
         <IonHeader > 
      <IonToolbar >
        <IonButtons slot="start" >
          <IonBackButton defaultHref="mens" />
        </IonButtons>
        <IonTitle className='titlem'>Co-ords</IonTitle> 
      </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <div>
            <img src="https://cdn.shopify.com/s/files/1/0420/0392/3109/products/three-mens-co-ord-sets-patch-pocket-shirt-co-ord-nude-22682550337701_2000x.jpg?v=1607093751" alt="img" />
            <button className='btnm'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btnm'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop co-ord</p> 
            <strong>£79.00</strong>
        </div>
        <div>
            <img src="https://cdn.shopify.com/s/files/1/0530/1996/7666/products/1_57a1e675-f080-4996-8bc8-bbcc986367bb_600x.jpg?v=1650712325" alt="img" />
            <button className='btnm'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btnm'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop pink co-ord </p> 
            <strong>£98.00</strong>
        </div>
        <div>
            <img src="https://www.fashionbeans.com/wp-content/uploads/2019/08/coord-outfit-1.jpg" alt="img" />
            <button className='btnm'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btnm'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop beige co-ord</p> 
            <strong>£102.00</strong>
        </div>
        
       
      </IonContent>
    </IonPage>
  );
};

export default Coodrem;