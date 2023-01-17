import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { personCircleOutline } from 'ionicons/icons';
import { useState } from 'react';
import './Page.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState('responsable@gmail.com');
    const [password, setPassword] = useState('responsable');

    function login() {
        alert("YOU HAVE TO IMPLEMENT THIS FUNCTIONNALITY");
        /**
         * 
         */
        // alert(email);
        // alert(password);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Login</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonItem>
                    <IonIcon icon={personCircleOutline}></IonIcon>
                </IonItem>
                <IonItem>
                    <IonLabel>Email</IonLabel>
                    <IonInput onIonChange={(event:any)=>setEmail(event.target.value)} type="email" value={email}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel>Mot de passe</IonLabel>
                    <IonInput onIonChange={(event:any)=>setPassword(event.target.value)} type="password" value={password}></IonInput>
                </IonItem>
                <IonButton expand='block' color='tertiary' onClick={login}>Login</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Login;