import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { groupEnd } from 'console';
import { IonApp, IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonMenuButton, IonModal, IonNote, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { close, closeCircle, logOut } from "ionicons/icons";

const HistoriqueRechargement: React.FC = () => {
  const userId = sessionStorage.getItem("userId");
  const [list_,setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://vae-client-backend-production.up.railway.app/rechargements/'+userId)
      .then(data => data.json())
      .then(res => {
        setList(res.data);
        setLoading(false);
      })
  }, [])
    if(loading){
      return(
            <p>Loading ...</p>
      )
    } else {
      return (
        <>
          <h4 style={{textAlign:'center'}}>Historique demande creditage du compte</h4>
          {
            list_.map((group) => {
            return (
              <IonCard color="tertiary">
            <IonCardHeader>
              <IonCardTitle>{group.montant} Ar</IonCardTitle>
              <IonCardSubtitle>Le {group.dateRechargement}</IonCardSubtitle>
            </IonCardHeader>
              </IonCard>
            )})
          }
          </>);
    }
  };
  
  export default HistoriqueRechargement;
  