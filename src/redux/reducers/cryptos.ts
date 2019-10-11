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
                currencies: action.response
            };
        case types.GET_LATEST_LISTINGS.SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: action.err
            };
        default:
            return state;
    }
}
