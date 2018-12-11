import Types from '../actions/types';

var initialState = {
    'configItemsChanged': false
}

export default function(state=initialState, action) {
    if (typeof action.payload === 'undefined') {
        return state;
    }
    switch(action.type){
        case Types.DEFAULT_VALUE_CHANGED:
            return  action.payload;
        default:
            return state;
    }
}