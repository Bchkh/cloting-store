import { IonContent,  IonPage,IonHeader,IonToolbar,IonBackButton,IonButtons,IonTitle } from '@ionic/react';
import'./panier.css';


const Pannier: React.FC = () => {
  return (
    <IonPage>
      <IonHeader > 
      <IonToolbar >
        <IonButtons slot="start" >
          <IonBackButton defaultHref="log"/>
        </IonButtons>
        <IonTitle className='titlem'>Panier</IonTitle> 
      </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <form>
  <label>
    Nom :
    <input type="text" name="name" />
  </label>
  <label>
    Prenom :
    <input type="text" name="prenom" />
  </label>
  <label>
    Email:
    <input type='email' name="email" />
  </label>
  <label>
    Numero:
    <input type='number' name="numero" />
  </label>
  <br />
  Remplir les information sur votre catre
  <label>
    card number :
    <input type='number' name="email"  />
  </label>
  <label>
    card expiry elements :
    <input type='date' name="email"  />
  </label>
  <label>
    card CVC  :
    <input type='number' name="email"  />
  </label>
  <button className='bt'><a className='a' href='/final'>submit</a></button>
</form>
        
       
       
      </IonContent>
    </IonPage>
  );
};

export default Pannier;