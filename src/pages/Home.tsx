import { IonContent,  IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      
      <IonContent fullscreen>
        
        <img src="https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=600"alt='img'className='image'/>
        <img src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=600"alt='img'className='image'/>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
