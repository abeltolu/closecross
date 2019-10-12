import * as types from '@actions/actionTypes';
import { IAction } from '@actions/types';
import { IStoreCryptoState } from '@reducers/types';
import { initialCryptoState } from '@reducers/initialStates';

export default function cryptos(
    state: IStoreCryptoState = initialCryptoState,
    action: IAction
) {
    switch (action.type) {
        case types.GET_LATEST_LISTINGS.REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case types.GET_LATEST_LISTINGS.SUCCESS:
            return {
                ...state,
                isFetching: false,
                currencies: [ ...state.currencies,...action.response],
                start: state.start + 100
            };
        case types.GET_LATEST_LISTINGS.SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: action.err
            };
        case types.GET_HISTORICAL_QUOTES.REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case types.GET_HISTORICAL_QUOTES.SUCCESS:
            return {
                ...state,
                isFetching: false,
                historicalQuotes: action.response && action.response.quotes,
            };
        case types.GET_HISTORICAL_QUOTES.SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: action.err
            };
        case types.SET_CURRENT_CRYPTO_DETAILS:
            return {
                ...state,
                currency: action.currency
            };
        default:
            return state;
    }
}
