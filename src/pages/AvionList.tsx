import { IonButtons, IonContent, IonHeader, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import PlaneListeItem from '../components/PlaneListItem';
import './Page.css';

const AvionList: React.FC = () => {
    const [avions, setAvion] = useState<any[]>();

    useEffect(()=>{
        fetch("https://alluring-coach-production.up.railway.app/avions").then((response) => {
            return response.json();
        }).then((liste) =>{
            setAvion(liste.data)
        })
    },[]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Liste des Avions</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Liste des Avions</IonTitle>
                </IonToolbar>
                </IonHeader>
                <IonList>
                    {avions?.map((element:any)=> <PlaneListeItem plane={element}/>)}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default AvionList;
