import { IonContent,  IonPage, IonHeader,IonToolbar,IonBackButton,IonButtons,IonTitle } from '@ionic/react';

import './men.css';

const Final: React.FC = () => {
  return (
    <IonPage>
      <IonHeader > 
      <IonToolbar >
        <IonButtons slot="start" >
          <IonBackButton defaultHref="home"/>
        </IonButtons>
        <IonTitle className='titlem'></IonTitle> 
      </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>
            <p>Paiement effectué avec succés</p>

            <img src="https://www.chu-montpellier.fr/fileadmin/medias/Actualites/20200401-covid-merci.jpg" alt="img" />
            
        </div>
        
        
      </IonContent>
    </IonPage>
  );
};

export default Final;