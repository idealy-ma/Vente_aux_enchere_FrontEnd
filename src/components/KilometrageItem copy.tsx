import { IonItem, IonIcon, IonLabel } from "@ionic/react";
import { paperPlane, rocket } from "ionicons/icons";

interface Liste{
    kilometrage: any;
}

const PlaneListeItem: React.FC<Liste> = ({ kilometrage })=>{
    return (
        <IonItem>
            <IonIcon slot='start' icon={paperPlane}></IonIcon>
            <IonLabel>
                <h2>{kilometrage.numeroAvion}</h2>
                <p>{kilometrage.photoAvion}</p>
            </IonLabel>
        </IonItem>
    );
}

export default PlaneListeItem;