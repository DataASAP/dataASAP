import Types from '../actions/types';

var initialState = {
    'userPrefsDefined': false
}

export default function(state=initialState, action) {
    if (typeof action.payload === 'undefined') {
        return state;
    }
    switch(action.type){
        case Types.USER_PREFS_DEFINED:
            return  action.payload;
        default:
            return state;
    }
}