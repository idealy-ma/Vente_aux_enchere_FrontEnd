import { IonItem, IonIcon, IonLabel, IonList, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonBackButton } from "@ionic/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import EnchereItem from "../components/EnchereItem";
import Enchere from "../model/Enchere";


const DetailsEnchere: React.FC = ()=>{

    const { id } = useParams<{id : string; }>();
    const [enchere,setEnchere] = useState<Enchere>();

    function getDetail() {
        const enchereDetails : Enchere = new Enchere();
        enchereDetails.setIdEnchere(parseInt(id));
        enchereDetails.find();
        setEnchere(enchereDetails);
    }

    useEffect(()=>{
        getDetail();
    },[]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                    {/* <IonMenuButton /> */}
                    <IonBackButton />
                </IonButtons>
                <IonTitle>Detail enchere</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <EnchereItem enchere={enchere} />
            </IonContent>
        </IonPage>
    );
}

export default DetailsEnchere;