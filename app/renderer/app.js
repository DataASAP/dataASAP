import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import { ConnectedRouter } from 'react-router-redux';
import { createMemoryHistory } from 'history';
//import routes from './routes';
import configureStore from './store';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import { Container } from 'semantic-ui-react';
//import store from './reducers';

import Header from './components/Header';
import FileSelectScreen from './screens/FileSelectScreen';




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
/*
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={routerHistory}>{routes}</ConnectedRouter>
  </Provider>,
  rootElement,
);
*/

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div className="app" style={{padding: '10px'}}>
        <Container fluid>
          <Header />
          <Switch>
            <Route path="/" 
              render={() => 
              <FileSelectScreen  />}  
              />
          </Switch>
          </Container>
        </div>
      </Router>
    </Provider>, rootElement

  );





