import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { groupEnd } from 'console';
import { IonApp, IonBadge, IonButton, IonCheckbox, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonModal, IonNote, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { close, closeCircle, logOut } from "ionicons/icons";

const HistoriqueRechargement: React.FC = () => {
  const userId = sessionStorage.getItem("userId");
  const [list_,setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://containers-us-west-145.railway.app:6046/rechargements/'+userId)
      .then(data => data.json())
      .then(res => {
        setList(res.data);
        setLoading(false);
      })
  }, [])
    const groupList = list_.map(group => {
      return (<tr key={group.idEnchere}>
        <td style={{whiteSpace: 'nowrap'}}>{group.dateRechargement}</td>
        <td style={{whiteSpace: 'nowrap'}}>{group.montant}</td>
        <td style={{whiteSpace: 'nowrap'}}>{group.etat}</td>
      </tr>
    )})
  
    return (
      <div>
          <h3>Historique de Rechargement</h3>
           <table border={1} >
              <tr>
                <th>Date de rechargement</th>
                <th>Montant</th>
                <th>Etat</th>
              </tr>
                {groupList}
            </table>         
      </div>
      
    );
  };
  
  export default HistoriqueRechargement;
  