import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { groupEnd } from 'console';
import { IonApp, IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonMenuButton, IonModal, IonNote, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { close, closeCircle, logOut } from "ionicons/icons";

const ListeEnchere: React.FC = () => {
  const [list_,setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch('https://vae-client-backend-production.up.railway.app/encheres')
      .then(data => data.json())
      .then(res => {
        setList(res.data);
        setLoading(false);
      })
  }, [])

    if(loading){
      return(
          <IonPage id="inscri-page">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
              <IonTitle>Liste de mes encheres</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <p>Loading ...</p>
          </IonContent>
        </IonPage>
      )
    } else {
      return (
        <IonPage id="inscri-page">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Liste de mes encheres</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {
            list_.map((group) => {
            return (
              <IonCard>
                <img src={group.lesSary[0]} />
                <IonCardHeader>
                  <IonCardTitle>{group.nomProduit}</IonCardTitle>
                  <IonCardSubtitle>{group.nomCategorie}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  {group.description}
                </IonCardContent>
              </IonCard>
            )})
          }
          </IonContent>
        </IonPage> );
    }
  };
  
  export default ListeEnchere;
  
