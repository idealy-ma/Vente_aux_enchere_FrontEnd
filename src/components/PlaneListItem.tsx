import { IonItem, IonIcon, IonLabel } from "@ionic/react";
import { paperPlane, rocket } from "ionicons/icons";

interface Liste{
    plane: any;
}

const PlaneListeItem: React.FC<Liste> = ({ plane })=>{
    return (
        <IonItem routerLink={"/Kilometrage/"+plane.idAvion}>
            <IonIcon slot='start' icon={paperPlane}></IonIcon>
            <IonLabel>
                <h2>{plane.numeroAvion}</h2>
                <p>{plane.photoAvion}</p>
            </IonLabel>
        </IonItem>
    );
}

export default PlaneListeItem;