import { IonItem, IonIcon, IonLabel } from "@ionic/react";
import { informationCircle, paperPlane, rocket } from "ionicons/icons";

interface Liste{
    information: any;
}

const DetailItem: React.FC<Liste> = ({ information })=>{
    return (
        <IonItem>
            <IonLabel>
                    <p><b>Date :</b> {information.dateKm}</p>
                    <p><b>Debut :</b> {information.debutKm}</p>
                    <p><b>Fin :</b> {information.finKm}</p>
            </IonLabel>
        </IonItem>
    );
}

export default DetailItem;