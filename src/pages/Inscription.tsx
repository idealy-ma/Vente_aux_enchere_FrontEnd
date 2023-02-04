import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput, IonText } from '@ionic/react';
import { RouteComponentProps } from 'react-router';


interface OwnProps extends RouteComponentProps {}


const Inscription:React.FC = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [nomError, setNomError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState('');

  const inscri = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    if(!nom) {
      setUsernameError(true);
    }
    if(!username) {
      setUsernameError(true);
    }
    if(!password) {
      setPasswordError(true);
    }

    if(username && password && nom) {
    }
    fetch(
      'https://vae-client-backend-production.up.railway.app/clients',{
        method: "POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify({"nom":nom,"prenom":prenom,"email":username,"mdp":password})
      })
      .then((response )=>{
        return response.json()
      })
      .then((res) => {
        if(res.error!==undefined){
          setError(res.error.message);
        }
        else{   
            window.alert("Mety");
            window.location.href="/login";
            
          }
      });
  };

  return (
    <IonPage id="inscri-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Formulaire d'inscription</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <div className="inscri-logo">
        </div>

        <form noValidate onSubmit={inscri}>
          <IonList>
          <IonItem>
              <IonLabel position="stacked" color="primary">Nom</IonLabel>
              <IonInput name="nom" type="text" value={nom} spellCheck={false} autocapitalize="off" onIonChange={e => setNom(e.detail.value!)}
                required>
              </IonInput>
            </IonItem>
            {formSubmitted && nomError && <IonText color="danger">
              <p className="ion-padding-start">
                Veuillez saisir votre nom
              </p>
            </IonText>}
            <IonItem>
              <IonLabel position="stacked" color="primary">Prenom</IonLabel>
              <IonInput name="prenom" type="text" value={prenom} onIonChange={e => setPrenom(e.detail.value!)}>
              </IonInput>
            </IonItem>
            <IonItem>
            <IonLabel position="stacked" color="primary">Email</IonLabel>
              <IonInput name="username" type="text" value={username} spellCheck={false} autocapitalize="off" onIonChange={e => setUsername(e.detail.value!)}
                required>
              </IonInput>
            </IonItem>

            {formSubmitted && usernameError && <IonText color="danger">
              <p className="ion-padding-start">
                Veuillez saisir votre email
              </p>
            </IonText>}

            <IonItem>
              <IonLabel position="stacked" color="primary">Mot de passe</IonLabel>
              <IonInput name="password" type="password" value={password} onIonChange={e => setPassword(e.detail.value!)}>
              </IonInput>
            </IonItem>

            {formSubmitted && passwordError && <IonText color="danger">
              <p className="ion-padding-start">
              Veuillez saisir votre mot de passe
              </p>
            </IonText>}
          </IonList>

          <IonRow>
            <IonCol>
              <IonButton type="submit" expand="block">s'inscrire</IonButton>
            </IonCol>
          </IonRow>
        </form>

      </IonContent>

    </IonPage>
  );
};

export default Inscription;