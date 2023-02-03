import { Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Inscription from './pages/Inscription';
import ListeEnchere from './pages/ListeEnchere';
import Compte from './pages/Compte';
import RechargementCompte from './pages/RechargementCompte';
import HistoriqueRechargement from './pages/HistoriqueRechargement';
import Acceuil from './pages/Acceuil';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
  <IonReactRouter>
    <Route exact path="/" component={Login} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/inscription" component={Inscription} />
    <Route exact path="/menu" component={Menu} />
    <Route exact path="/lEnchere">
      <IonSplitPane contentId="main">
        <Menu/>
        <IonRouterOutlet id="main">
            <ListeEnchere />
        </IonRouterOutlet>
      </IonSplitPane> 
    </Route>
    <Route exact path="/checkCompte">
      <IonSplitPane contentId="main">
        <Menu/>
        <IonRouterOutlet id="main">
            <Compte />
        </IonRouterOutlet>
      </IonSplitPane> 
    </Route>
    <Route exact path="/recharge">
      <IonSplitPane contentId="main">
        <Menu/>
        <IonRouterOutlet id="main">
            <RechargementCompte />
        </IonRouterOutlet>
      </IonSplitPane> 
    </Route>
    <Route exact path="/historique">
      <IonSplitPane contentId="main">
        <Menu/>
        <IonRouterOutlet id="main">
            <HistoriqueRechargement />
        </IonRouterOutlet>
      </IonSplitPane> 
    </Route>
    <Route exact path="/addEnchere">
      <IonSplitPane contentId="main">
        <Menu/>
        <IonRouterOutlet id="main">
            <Acceuil />
        </IonRouterOutlet>
      </IonSplitPane> 
    </Route>
</IonReactRouter>
</IonApp>
);

export default App;
