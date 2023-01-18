import { IonItem, IonIcon, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonButton } from "@ionic/react";
import { paperPlane, rocket, code, informationCircleOutline} from "ionicons/icons";
import Enchere from "../model/Enchere";

interface Liste{
    encheres: Enchere;
}

const EnchereListItem: React.FC<Liste> = ({ encheres })=>{
    return (
        <IonCard>
            <IonIcon icon={code}></IonIcon>
            <IonCardHeader>
                <IonCardTitle>Enchere numero {encheres.getIdEnchere()}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonItem>
                    <h4>{encheres.getDescription()}</h4>
                </IonItem>
                <IonItem>
                    <IonButton routerLink={"/Details/"+encheres.getIdEnchere()}>
                        <IonIcon icon={informationCircleOutline}></IonIcon>
                        Voirs details
                    </IonButton>
                    <IonButton color={"success"}>
                        Participer
                    </IonButton>
                </IonItem>
            </IonCardContent>
        </IonCard>
    );
}

export default EnchereListItem;