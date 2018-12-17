import { combineReducers } from 'redux';
import Config from './configReducer';
import StateChanged from './stateChangedReducer';
import UserPrefs from './userPrefsReducer';

const rootReducer = combineReducers({
    configParameters: Config,
    stateChanged: StateChanged,
    userPrefsDefined: UserPrefs
});
export default rootReducer;