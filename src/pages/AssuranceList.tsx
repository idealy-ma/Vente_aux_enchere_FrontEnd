import { IonItem, IonIcon, IonLabel, IonList, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from "@ionic/react";
import { paperPlane, rocket } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailItem from "../components/DetailItem";


const AssuranceList: React.FC = ()=>{
    const { mois } = useParams<{mois : string; }>();

    const [assurance, setAssurance] = useState<any[]>();

    useEffect(()=>{
        fetch("https://alluring-coach-production.up.railway.app/expiration/"+mois).then((response) => {
            return response.json();
        }).then((liste) =>{
            setAssurance(liste.data)
        })
    },[]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Liste des Avions, Assurance Fini dans {mois} mois</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Liste des Avions</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList>
                    {/* {assurance?.map((element:any)=> <PlaneListeItem plane={element.avion}/>)} */}
                </IonList>
            </IonContent>
        </IonPage>
    );
}

export default AssuranceList;