import { IonContent,  IonPage, IonHeader,IonToolbar,IonBackButton,IonButtons,IonTitle } from '@ionic/react';

import './men.css';

const finalLoock: React.FC = () => {
  return (
    <IonPage>
      <IonHeader > 
      <IonToolbar >
        <IonButtons slot="start" >
          <IonBackButton defaultHref="log"/>
        </IonButtons>
        <IonTitle className='titlem'>Final Loock</IonTitle> 
      </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='divm'>
            <img src="..\..\public\image\r1.png" alt="img" />
            <button className='buttonm'><a href='coats_and_jackets_m'className='a'>coats and jackets</a></button>
      </div>
        
        

        
      </IonContent>
    </IonPage>
  );
};

export default finalLoock;