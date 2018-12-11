import { combineReducers } from 'redux';
import ConfigReducer from './configReducer';
import StateChanged from './stateChangedReducer';

const rootReducer = combineReducers({
    configParameters: ConfigReducer,
    stateChanged: StateChanged
});
export default rootReducer;