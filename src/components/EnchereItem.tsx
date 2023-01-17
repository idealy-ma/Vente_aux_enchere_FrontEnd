import { IonItem, IonIcon, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonInput } from "@ionic/react";
import { paperPlane, rocket, code} from "ionicons/icons";
import Enchere from "../model/Enchere";

interface Liste{
    encheres: Enchere;
}

const EnchereItem: React.FC<Liste> = ({ encheres })=>{
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Enchere numero {encheres.getIdEnchere()}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonItem>
                    <IonIcon icon={code}></IonIcon>
                </IonItem>
                <IonItem>
                    
                </IonItem>
            </IonCardContent>
        </IonCard>
    );
}

export default EnchereItem;