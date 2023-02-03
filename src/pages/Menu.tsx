import { IonContent, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle } from '@ionic/react';
import { useLocation } from 'react-router-dom';

interface lesMenus {
    url : string;
    titre: string;
}

const menus : lesMenus[] = [
    {
        url : '/lEnchere',
        titre : 'Liste de mes enchères',
    },    
    {
        url : '/checkCompte',
        titre : 'Consulter mon compte',
    },
    {
        url : '/addEnchere',
        titre : 'Ajout enchere',
    }
]
const Menu: React.FC = () => {
    const location = useLocation();
    
    return(
        <IonMenu contentId="main" type="overlay">
    
        <IonContent>
            <IonList>
            <IonListHeader>Les menus</IonListHeader>
            {menus.map((menu, index) => {
                return (
                <IonMenuToggle key={index} autoHide={false}>
                    <IonItem className={location.pathname === menu.url ? 'selected' : ''} routerLink={menu.url} routerDirection="none" lines="none" detail={false}>
                    <IonLabel>{menu.titre}</IonLabel>
                    </IonItem>
                </IonMenuToggle>
                );
            })}
            </IonList>
        </IonContent>
        </IonMenu>
    );
};
export default Menu;