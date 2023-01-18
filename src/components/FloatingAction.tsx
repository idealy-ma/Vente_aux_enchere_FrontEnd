import {
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { paperPlaneOutline, paperPlaneSharp, logInOutline, bookOutline, bookSharp, chevronUpCircle, colorPalette, globe, addOutline, addSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Ajout-Enchere',
    url: '/AddEnchere',
    iosIcon: addOutline,
    mdIcon: addSharp
  },
  {
    title: 'Verification Assurance',
    url: '/Assurance',
    iosIcon: bookOutline,
    mdIcon: bookSharp
  },
];

const Menu: React.FC = () => {
  const location = useLocation();
  return (
    <IonFab slot="fixed" vertical="bottom" horizontal="end">
      <IonFabButton size='small'>
        <IonIcon icon={chevronUpCircle}></IonIcon>
      </IonFabButton>
      <IonFabList side="top">
        {appPages.map((appPage) => {
          return (
            <IonFabButton routerLink={appPage.url}>
                  <IonIcon ios={appPage.iosIcon} md={appPage.mdIcon} />
            </IonFabButton>
          );
        })}
      </IonFabList>
    </IonFab>
  );
};

export default Menu;
