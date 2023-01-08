import React, { useState } from "react";
import { IonContent,  IonPage, IonHeader,IonToolbar,IonBackButton,IonButtons,IonTitle } from '@ionic/react';
import './tryon.css';
import axios from "axios";

const Tryon: React.FC = () => {
  const [image , setImage ]= useState({file:[]})
  function handleImage(e:any) {
    setImage({
      ...image,
      file : e.target.files[0],
    })

  }
  function handleApi() {
    const formeData = new FormData();
    formeData.append('image', image.file[0]);
    axios.post('http://localhost:8080/imageupload',formeData,{
      headers : {"Content-Type": "multipart/form-data"}
    }).then((res) =>{
      console.warn(res)
    })
     
  }
  
  
   return (
    <IonPage>
      <IonHeader > 
      <IonToolbar >
        <IonButtons slot="start" >
          <IonBackButton defaultHref="log"/>
        </IonButtons>
        <IonTitle className='titlem'>Try On</IonTitle> 
      </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
         <div className="d">
          <p>Telecharger une photo de votre corps</p>
          <input type="file" name="file" onChange={handleImage}/>
          <button className="b" onClick={handleApi}>Submit</button>
          <br />
          <img src="https://i5.walmartimages.com/asr/d48ee5ce-724d-4d56-afad-2c85b0f643f4.b38e11dcc873678e6aad289a64a17489.jpeg"alt="im"/>
          <button className="b" ><a className="a" href="finalLook">Continue</a></button>
         </div>
         
        
        
      </IonContent>
    </IonPage>
   
  );
};

export default Tryon;