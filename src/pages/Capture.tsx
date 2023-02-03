import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    IonText,
    IonSelect,
    IonSelectOption,
} from '@ionic/react';
import { camera, closeCircleOutline } from 'ionicons/icons';
import { useRef, useState } from 'react';
import { supAll, supPhoto, usePhotoGallery } from '../usePhotoGallery';
const Capture: React.FC = () => {
    const { photos, takePhoto, __photo } = usePhotoGallery();
    var [ph, setPh] = useState(__photo);
    ph = __photo;
    function supPh(id: String) {
        var __ph = supPhoto(id);
        setPh(__ph);
    }
    var nom = useRef<HTMLIonInputElement>(null);
    var prix = useRef<HTMLIonInputElement>(null);
    var categorieid = useRef<HTMLIonSelectElement>(null);
    var duree = useRef<HTMLIonInputElement>(null);
    var [erreur, setErreur] = useState("");
    var [success, setSuccess] = useState("");
    function Ajouter() {
        var body="";
        for (let index = 0; index < __photo.length; index++) {
            body = body + __photo[index][0] + ",";
        }
        alert(body);
        
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Photo Gallery</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid>
                    <IonButton onClick={Ajouter}>Save</IonButton>
                    <IonRow>
                        {ph.map((p) => (
                            <IonCol size="6" >
                                <IonIcon icon={closeCircleOutline} onClick={() => supPh(p[1])}>{p[1]}</IonIcon>
                                <IonImg src={p[0] + ""} />
                            </IonCol>
                        ))}
                    </IonRow>
                    <div className="ion-text-center">
                        Ajout photo(s)
                        <IonButton onClick={() => takePhoto()}>
                            <IonIcon icon={camera}></IonIcon>
                        </IonButton>
                    </div>
                </IonGrid>
                </IonContent>
        </IonPage>
    );
};

export default Capture;
