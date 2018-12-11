
import Types from './types';

export function setConfigParameters(type, domain, config) {
    return {
        type: Types.SET_CONFIG_PARAMETERS,
        payload: {
            'type': type,
            'domain': domain,
            'config': config
        }
    };
};

export function defaultValueChanged(value) {

    return {
        type: Types.DEFAULT_VALUE_CHANGED,
        payload:{
            'configItemsChanged': value
        }
    }
}
