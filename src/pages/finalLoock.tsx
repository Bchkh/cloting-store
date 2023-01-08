import { IonContent,  IonPage  } from '@ionic/react';

import './Home.css';


const FinalLoock: React.FC = () => {
  return (
    <IonPage>
      
      <IonContent fullscreen>
        
        <img src='/image/result.png'alt='img'className='img'/>
        <button className='btn'><a href='/home'className='a1'>Back to Home</a></button>
        <button className='btn'><a href='/panier'className='a1'>Achete</a></button>
        
      </IonContent>
    </IonPage>
  );
};

export default FinalLoock;
