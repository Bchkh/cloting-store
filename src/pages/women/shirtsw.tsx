import { IonContent,  IonPage,IonHeader,IonBackButton,IonButtons,IonToolbar,IonTitle } from '@ionic/react';

import './coats_and_jackets_w.css';

const Shirtw: React.FC = () => {
  return (
    <IonPage>
         <IonHeader > 
      <IonToolbar >
        <IonButtons slot="start" >
          <IonBackButton defaultHref="womens" />
        </IonButtons>
        <IonTitle className='title'>Shirts</IonTitle> 
      </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <div>
            <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13722908/2021/3/3/d1ee19bd-73c9-4ca4-a8e9-624c18128a6e1614752690702-Roadster-Women-Black--White-Regular-Fit-Checked-Casual-Shirt-1.jpg" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop black and white shirt</p> 
            <strong>£79.00</strong>
        </div>
        <div>
            <img src="https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/06092022/19078_88_1648976028_6249609c7ca1e-831065568772.jpg" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop white shirt </p> 
            <strong>£98.00</strong>
        </div>
        <div>
            <img src="https://belk.scene7.com/is/image/Belk?layer=0&src=1803586_3AA67V893620_A_629&$DWP_PRODUCT_PLP_MOBILE_t1$" alt="img" />
            <button className='btn'><a href='/tryon'className='a1'>Try On</a></button>
            <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
            <p> Topshop black and red shirt </p> 
            <strong>£102.00</strong>
        </div>
        
       
      </IonContent>
    </IonPage>
  );
};

export default Shirtw;