import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import { ConnectedRouter } from 'react-router-redux';
import { createMemoryHistory } from 'history';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
//import routes from './routes';
import configureStore from './store';
import { Container } from 'semantic-ui-react';
//import store from './reducers';
import Header from './components/Header';
import NCPDP_D0_Config from './screens/NCPDP_D0_Config';
import SCRIPT_10_6_Config from './screens/SCRIPT_10_6_Config';

const syncHistoryWithStore = (store, history) => {
  const { routing } = store.getState();
  if (routing && routing.location) {
    history.replace(routing.location);
  }
};

const initialState = {};
const routerHistory = createMemoryHistory();
const store = configureStore(initialState, routerHistory);
syncHistoryWithStore(store, routerHistory);

const rootElement = document.querySelector(document.currentScript.getAttribute('data-container'));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className="app" style={{padding: '10px'}}>
                <Container fluid>
                    <Header />
                    <Switch>
                        <Route path='/NCPDP_D0' component={NCPDP_D0_Config} />
                        <Route path='/SCRIPT_10_6' component={SCRIPT_10_6_Config} />
                    </Switch>
                </Container>
            </div>
        </Router>
    </Provider>, rootElement
  );
