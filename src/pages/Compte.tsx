import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { groupEnd } from 'console';
import { IonApp, IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonMenuButton, IonModal, IonNote, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, closeCircle, logOut } from "ionicons/icons";
import HistoriqueRechargement from './HistoriqueRechargement';

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
    fetch('https://vae-client-backend-production.up.railway.app/soldes/'+id,{
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
      <IonPage id="inscri-page">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
              <IonTitle>Porte Feuille</IonTitle>
              
            </IonToolbar>
          </IonHeader>
          <IonContent>
              <IonCard color="tertiary">
            <IonCardHeader>
              <IonCardTitle>Mon Compte</IonCardTitle>
              <IonCardSubtitle>Solde restant</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                Solde: {list_} Ar
            </IonCardContent>
          </IonCard>  
          <HistoriqueRechargement></HistoriqueRechargement>
          {/* <IonButton onClick={historique}>
              Historique de mes rechargements 
          </IonButton>       */}
          <IonFab slot="fixed" vertical="bottom" horizontal="end" >
            <IonFabButton routerLink='/recharge' size="small">
              <IonIcon icon={add}></IonIcon>
            </IonFabButton>
          </IonFab>
          </IonContent>
        </IonPage>
    </div>    
  );
};

export default Compte;
