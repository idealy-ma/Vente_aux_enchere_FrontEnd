import { IonItem, IonLabel, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from "@ionic/react";
import { useEffect, useState } from "react";

const Assurance: React.FC = ()=>{
    const [mois,setMois] = useState();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Demande Assurance</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Demande Assurance</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonItem>
                    <IonLabel>Assurance expirer dans : </IonLabel>
                    <IonInput onIonChange={(e:any)=>setMois(e.target.value)} type="number" placeholder="Nombre de mois, Ex: 3"></IonInput>
                </IonItem>
                <IonButton routerLink={"/Assurance/"+mois}>Valider</IonButton>
            </IonContent>
        </IonPage>
    );
}

export default Assurance;