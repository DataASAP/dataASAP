import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../renderer/reducers';
import ConfigScreens from '../renderer/screens/ConfigScreens';

const reduxStore = createStore(reducers);
const rootElement = document.querySelector(document.currentScript.getAttribute('data-container'));

ReactDOM.render(
    <Provider store={reduxStore}>
        <ConfigScreens />
    </Provider>, rootElement
  );
