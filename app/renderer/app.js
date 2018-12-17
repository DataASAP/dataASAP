import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { createStore } from 'redux';
import reducers from '../renderer/reducers';
import Header from './components/Header';
import FileSelectScreen from './screens/FileSelectScreen';

const reduxStore = createStore(reducers);
const rootElement = document.querySelector(document.currentScript.getAttribute('data-container'));
// The redux store can be removed here, because it is in the config.js
// however, I think ideally it should be here??
ReactDOM.render(
    <Provider store={reduxStore}>
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