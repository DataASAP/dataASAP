import Types from '../actions/types';

export default function(state={}, action) {
    if (typeof action.payload === 'undefined') {
        return state;
    }
    switch(action.type){
        case Types.SET_CONFIG_PARAMETERS:
            return  action.payload;
        default:
            return state;
    }
}