import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonItem } from "@ionic/react";
import { code, informationCircleOutline } from "ionicons/icons";
import Enchere from "../model/Enchere";

interface Item{
    enchere: Enchere | undefined;
}

const EnchereItem: React.FC<Item> = ({ enchere })=>{
    return (
        <>
            <IonCard>
                <IonIcon icon={code}></IonIcon>
                <IonCardHeader>
                    <IonCardTitle>Enchere {enchere?.getIdEnchere()}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonItem>
                        <h3>{enchere?.getDescription()}</h3>
                        <ul>
                            <li><b>Nom produit :</b> {enchere?.getNomProduit()}</li>
                            <li><b>Date debut :</b> {enchere?.getDateDebut()}</li>
                            <li><b> :</b> {enchere?.getClient()?.getNom()}</li>
                        </ul>
                    </IonItem>
                </IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardContent>
                    <IonButton color={"success"}>
                        Miser
                    </IonButton>
                </IonCardContent>
            </IonCard>
        </>
    );
}

export default EnchereItem;