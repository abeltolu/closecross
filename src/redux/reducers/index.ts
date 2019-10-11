import { combineReducers } from 'redux';
import cryptos from './cryptos';

type IAction = {
    type: string;
};

const rehydrated = (state = false, action: IAction) => {
    switch (action.type) {
        case 'persist/REHYDRATE':
            return true;
            break;
        default:
            return state;
    }
};

const reducer = combineReducers({
    rehydrated,
    cryptos,
});

export default reducer;
