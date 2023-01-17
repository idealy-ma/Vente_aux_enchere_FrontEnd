import { IonItem, IonIcon, IonLabel, IonList, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailItem from "../components/DetailItem";


const Detail: React.FC = ()=>{

    const { id } = useParams<{id : string; }>();
    const [kilometrage,setKilometrage] = useState<any[]>();
    const [entretient,setEntretient] = useState<any[]>();

    function getDetail() {
        fetch("https://alluring-coach-production.up.railway.app/kilometrages/"+id).then((response) => {
            return response.json();
        }).then((liste) =>{
            setKilometrage(liste.data)
        })
    }

    function getEntretiens(){
        fetch("https://alluring-coach-production.up.railway.app/entretiens/"+id).then((response) => {
            return response.json();
        }).then((liste) =>{
            setEntretient(liste.data)
        })
    }

    useEffect(()=>{
        getDetail();
        getEntretiens();
    },[]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Detail de l'Avion {id}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Detail de l'Avion {id}</IonTitle>
                </IonToolbar>
                </IonHeader>
                <IonItem>
                    <IonList>
                        <IonLabel><h2>Detail Kilometrage</h2></IonLabel>
                        {kilometrage?.map((element:any)=> <DetailItem information={element}/>)}
                    </IonList>
                </IonItem>
                <IonItem>
                    <IonList>
                        <IonLabel><h2>Detail Entretient</h2></IonLabel>
                        {entretient?.map((element:any)=> <DetailItem information={element}/>)}
                    </IonList>
                </IonItem>
            </IonContent>
        </IonPage>
    );
}

export default Detail;