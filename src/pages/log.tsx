import { IonContent,  IonPage } from '@ionic/react';
import'./log.css';


const Log: React.FC = () => {
  return (
    <IonPage>
      
      <IonContent fullscreen>
        <div className='container1'>
        <button className='btn1'><a href="womens"className='a'>Women</a></button>
        <img src='https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=600'alt='img'className='img'/>
        </div>
        <div className='container2'>
        <button className='btn2'><a href="mens"className='a'>Men</a></button>
        <img src='https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=600'alt='img'className='img'/>
        </div>
        
       
       
      </IonContent>
    </IonPage>
  );
};

export default Log;