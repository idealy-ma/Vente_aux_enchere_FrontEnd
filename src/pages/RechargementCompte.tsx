import React, { useRef, useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput, IonText } from '@ionic/react';
import { Redirect, RouteComponentProps } from 'react-router';

interface OwnProps extends RouteComponentProps {}


const RechargementCompte:React.FC = () => {
  var id:any=sessionStorage.getItem('userId'); 
        var hash:any=sessionStorage.getItem('hash'); 
const userId = sessionStorage.getItem("userId");
  const [montant, setMontant] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [montantError, setMontantError] = useState(false);
  const [error, setError] = useState('');

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    if(!montant) {
      setMontantError(true);
    }
   fetch(
    'https://containers-us-west-145.railway.app:6046/soldes',{
      method: "POST",
      headers:{
        "Content-Type":"application/json",
        "userId":id,
        "hash":hash,
      },
      body: JSON.stringify({"idClient":userId,"montant":montant})
    })
    .then((response )=>{
      return response.json()
    })
    .then((res) => {
      if(res.error!==undefined){
        setError(res.error.message);
      }
      else{   
          window.location.href="/checkCompte";
          
        }
    });
  };

  return (
    <IonPage id="login-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Rechargement compte</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <div className="login-logo">
        </div>

        <form onSubmit={login}>
          <IonList>
            <IonItem>
              <IonLabel position="stacked" color="primary">Montant</IonLabel>
              <IonInput name="email" type="text" value={montant} spellCheck={false} autocapitalize="off" onIonChange={e => setMontant(e.detail.value!)}
                required>
              </IonInput>
            </IonItem>
          </IonList>
          {formSubmitted && error && <IonText color="danger">
              <p className="ion-padding-start">
                Error
              </p>
            </IonText>}
          <IonRow>
            <IonCol>
              <IonButton type="submit" expand="block">Valider</IonButton>
            </IonCol>
          </IonRow>
        </form>

      </IonContent>

    </IonPage>
  );
};

export default RechargementCompte;


