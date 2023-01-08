import { Redirect, Route} from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Women from "./pages/women";
import Log from "./pages/log";
import Men from "./pages/men";
import Coatsw from "./pages/women/coats_and_jackets_w";
import Jumpersw from "./pages/women/jumpers_and_cardigans";
import Dresse from "./pages/women/dresses";
import Joggers from "./pages/women/tracksuites_and_joggers_w";
import Blaserw from "./pages/women/bleasers";
import Coordw from "./pages/women/co-ords_w";
import Hoodiesw from "./pages/women/hoodiesw";
import Jeansw from "./pages/women/jeansw";
import Shirtw from "./pages/women/shirtsw";
import Skirt from "./pages/women/skirts";
import Tops from "./pages/women/tops";
import Tryon from "./pages/tryon";

import Coatsm from "./pages/man/coats_and_jackets_m";
import Jumpersm from "./pages/man/jumpers_and_cardigans_m";
import Joggersm from "./pages/man/tracksuites_and_joggers_m";
import Blaserm from "./pages/man/bleasersm";
import Coordm from "./pages/man/co-ords_m";
import Hoodiesm from "./pages/man/hoodiesm";
import Jeansm from "./pages/man/jeansm";
import Shirtm from "./pages/man/shirtsm";
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
import FinalLoock from './pages/finalLoock';
import Pannier from './pages/panier/panier';
import Final from './pages/finale';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/log">
          <Log />
        </Route>
        <Route exact path="/womens">
          <Women />
        </Route>
        <Route exact path="/mens">
          <Men />
        </Route>
      
        <Route exact path="/coats_and_jackets_w">
          <Coatsw />
        </Route>
        <Route exact path="/coats_and_jackets_m">
          <Coatsm />
        </Route>
        <Route exact path="/jumpers_and_cardigans_w">
          <Jumpersw />
        </Route>
        <Route exact path="/jumpers_and_cardigans_m">
          <Jumpersm />
        </Route>
        <Route exact path="/dresses">
          <Dresse />
        </Route>
        <Route exact path="/tracksuites_and_joggers_w">
          <Joggers />
        </Route>
        <Route exact path="/tracksuites_and_joggers_m">
          <Joggersm />
        </Route>
        <Route exact path="/tops">
          <Tops />
        </Route>
        <Route exact path="/blasers_w">
          <Blaserw />
        </Route>
        <Route exact path="/blasers_m">
          <Blaserm />
        </Route>
        <Route exact path="/co-ords_w">
          <Coordw />
        </Route>
        <Route exact path="/co-ords_m">
          <Coordm />
        </Route>
        <Route exact path="/hoodies_and_sweatshirts_w">
          <Hoodiesw />
        </Route>
        <Route exact path="/hoodies_and_sweatshirts_m">
          <Hoodiesm />
        </Route>
        <Route exact path="/jeans_w">
          <Jeansw />
        </Route>
        <Route exact path="/jeans_m">
          <Jeansm />
        </Route>
        <Route exact path="/shirts_blouses_w">
          <Shirtw />
        </Route>
        <Route exact path="/shirts_blouses_m">
          <Shirtm />
        </Route>
        <Route exact path="/skirts">
          <Skirt />
        </Route>
        <Route exact path="/tryon">
          <Tryon />
        </Route>
        <Route exact path="/finalLook">
          <FinalLoock />
        </Route>
        <Route exact path="/panier">
          <Pannier />
        </Route>
        <Route exact path="/final">
          <Final />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
