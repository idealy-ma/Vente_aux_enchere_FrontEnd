import { IonButtons, IonContent, IonHeader, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import EnchereItem from '../components/EnchereItem';
import './Page.css';

const ListeEnchere: React.FC = () => {
    const [encheres, setEncheres] = useState<any[]>();

    useEffect(()=>{
        // fetch("https://alluring-coach-production.up.railway.app/avions").then((response) => {
        //     return response.json();
        // }).then((liste) =>{
        //     setAvion(liste.data)
        // })
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
                    {encheres?.map((element:any)=> <EnchereItem encheres={element}/>)}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default ListeEnchere;
