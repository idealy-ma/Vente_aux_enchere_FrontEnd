import { IonButtons, IonContent, IonHeader, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import EnchereListItem from '../components/EnchereListItem';
import FloatingAction from '../components/FloatingAction';
import Enchere from '../model/Enchere';
import './Page.css';

const ListeEnchere: React.FC = () => {
    const [encheres, setEncheres] = useState<Enchere[]>();

    function getDataEncheres() {
        const enchereList : Enchere[]  = [];
        const e : Enchere = new Enchere();
        e.setIdEnchere(1);
        e.setDescription("Vente de vase");

        enchereList.push(e);
        setEncheres(enchereList);
    }

    useEffect(()=>{
        fetch("http://localhost:8080/encheres").then((response) => {
            return response.json();
        }).then((liste) =>{
            setEncheres(liste.data)
        })
        //getDataEncheres();
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
                    {encheres?.map((element:any)=> <EnchereListItem encheres={element}/>)}
                </IonList>
                <FloatingAction />
            </IonContent>
        </IonPage>
    );
};

export default ListeEnchere;
