import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

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
import AvionList from './pages/ListeEnchere';
import LoginPage from './pages/Login';
import Detail from './pages/Detail';
import Assurance from './pages/Assurance';
import AssuranceList from './pages/AssuranceList';
import ListeEnchere from './pages/ListeEnchere';
import DetailsEnchere from './pages/DetailsEnchere';
import FloatingAction from './components/FloatingAction';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <FloatingAction />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/Login" />
            </Route>
            <Route path="/Login" exact={true}>
              <LoginPage />
            </Route>
            <Route path="/Liste" exact={true}>
              <ListeEnchere />
            </Route>
            <Route path="/Details/:id" exact={true}>
              <DetailsEnchere />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;