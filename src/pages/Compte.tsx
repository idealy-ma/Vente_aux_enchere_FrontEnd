import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { groupEnd } from 'console';
import { IonApp, IonBadge, IonButton, IonCheckbox, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonModal, IonNote, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { close, closeCircle, logOut } from "ionicons/icons";

const Compte: React.FC = () => {
  var id:any=sessionStorage.getItem('userId'); 
  var hash:any=sessionStorage.getItem('hash'); 
  const [list_,setList] = useState('');

  const [error,setError] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const recharger = async() =>{
    window.location.href="/recharge";
  };
  const historique = async() =>{
    window.location.href="/historique";
  };

  useEffect(() => {
    setLoading(true);
    fetch('https://containers-us-west-145.railway.app:6046/soldes/'+id,{
        method: "GET",
        headers:{
          "Content-Type":"application/json",
          "userId":id,
          "hash":hash,
        },
      }).then(data => data.json())
      .then(res => {
        setList(res.data[0].soldeClient);
        setLoading(false);
      })
  })

  return (
    <div>
        <p>Solde: {list_} Ar</p>  
        <IonButton onClick={recharger}>
            Recharger mon compte
        </IonButton>  
        <IonButton onClick={historique}>
            Historique de mes rechargements 
        </IonButton>      
    </div>    
  );
};

export default Compte;
