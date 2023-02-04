import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { camera, closeCircleOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { supPhoto, usePhotoGallery } from '../usePhotoGallery';
import './Home.css';

const Acceuil: React.FC = () => {
    const { photos, takePhoto, __photo } = usePhotoGallery();
    var [ph, setPh] = useState(__photo);
    ph = __photo;
    function supPh(id: String) {
        var __ph = supPhoto(id);
        setPh(__ph);
    }

    const [categorie, setCategorie] = useState<any[]>();
    const [nomProduit, setNomProduit] = useState('');
    const [dateDebut, setDateDebut] = useState('');
    const [dateFin, setDateFin] = useState('');
    const [prixMin, setPrixMin] = useState('');
    const [description, setDescription] = useState('');
    const [categorieValue, setCategorieValue] = useState('');
    const [sary,setSary] = useState('');


    useEffect(()=>{
        fetch("https://vae-client-backend-production.up.railway.app/categories").then((response) => {
            return response.json();
        }).then((liste) =>{
            setCategorie(liste.data)
        })
    },[]);

    const saveEnchere = async () => {
      var id:any=sessionStorage.getItem('userId'); 
        var hash:any=sessionStorage.getItem('hash'); 
        for (let index = 0; index < __photo.length; index++) {
            fetch('https://vae-client-backend-production.up.railway.app/encheres',{
              method: "POST",
              headers:{
                "Content-Type":"application/json",
                "userId":id,
                "hash":hash,
              },
              body: JSON.stringify({"nomProduit":nomProduit,"dateDebut":dateDebut,"dateFin":dateFin,"prixMin":prixMin,"description":description,"idCategorie":categorieValue,"idClient":sessionStorage.getItem("userId"),"photos":__photo[index][0],"etat":(index+1)})
        })

              
          }
        
        
    };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ajout enchere</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

            <div className="login-logo">
        </div>

        <form onSubmit={saveEnchere}>
          <IonList>
            <IonItem>
              <IonLabel position="stacked" color="primary">Nom produit:</IonLabel>
              <IonInput name="nomproduit" type="text" value={nomProduit} spellCheck={false} autocapitalize="off" onIonChange={e => setNomProduit(e.detail.value!)}
                required>
              </IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked" color="primary">Date debut:</IonLabel>
              <IonInput name="dateDebut" type="datetime-local" value={dateDebut} onIonChange={e => setDateDebut(e.detail.value!)}>
              </IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked" color="primary">Date fin:</IonLabel>
              <IonInput name="dateFin" type="datetime-local" value={dateFin} onIonChange={e => setDateFin(e.detail.value!)}>
              </IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked" color="primary">Prix min:</IonLabel>
              <IonInput name="prixMin" type="text" value={prixMin} onIonChange={e => setPrixMin(e.detail.value!)}>
              </IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked" color="primary">Déscription:</IonLabel>
              <IonInput name="description" type="text" value={description} onIonChange={e => setDescription(e.detail.value!)}>
              </IonInput>
            </IonItem>

            <IonItem>
              <IonSelect name="categorieValue" onIonChange={e => setCategorieValue(e.detail.value!)}>
                    {categorie?.map((element:any)=>
                        <IonSelectOption value={element.idCategorie} >{element.nomCategorie}</IonSelectOption>
                    )}
               </IonSelect>
            </IonItem>

          </IonList>

                <IonGrid>
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
                <IonButton onClick={saveEnchere}>Save</IonButton>
        </form>

      </IonContent>
    </IonPage>
  );
};

export default Acceuil;
