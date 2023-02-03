import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { groupEnd } from 'console';
import { IonApp, IonBadge, IonButton, IonCheckbox, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonModal, IonNote, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { close, closeCircle, logOut } from "ionicons/icons";

const ListeEnchere: React.FC = () => {
  const [list_,setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch('https://containers-us-west-145.railway.app:6046/encheres')
      .then(data => data.json())
      .then(res => {
        setList(res.data);
        setLoading(false);
      })
  }, [])
    const groupList = list_.map(group => {
      return (<tr key={group.idEnchere}>
        <td style={{whiteSpace: 'nowrap'}}>{group.nomProduit}</td>
        <td style={{whiteSpace: 'nowrap'}}>{group.dateDebut}</td>
        <td style={{whiteSpace: 'nowrap'}}>{group.dateFin}</td>
        <td style={{whiteSpace: 'nowrap'}}>{group.prixMin}</td>
      </tr>
    )})
  
    return (
      <div>
          <h3>Liste des avions</h3>
           <table border={1} >
              <tr>
                <th>Nom du produit</th>
                <th>Date debut</th>
                <th>Date fin</th>
                <th>Prix min</th>
              </tr>
                {groupList}
            </table>         
      </div>
      
    );
  };
  
  export default ListeEnchere;
  