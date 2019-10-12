import * as types from './actionTypes';
import { IActionPayload } from './types';

export function getLatestListingsRequest(payload?: IActionPayload) {
    return {
        type: types.GET_LATEST_LISTINGS.REQUEST,
        payload,
    };
}

export function getLatestListingsSuccess(response: any) {
    return {
        type: types.GET_LATEST_LISTINGS.SUCCESS,
        response,
    };
}

export function getLatestListingsFailure(err: any) {
    return {
        type: types.GET_LATEST_LISTINGS.FAILURE,
        err,
    };
}

export function getHistoricalQuotesRequest(payload?: IActionPayload) {
    return {
        type: types.GET_HISTORICAL_QUOTES.REQUEST,
        payload,
    };
}

export function getHistoricalQuotesSuccess(response: any) {
    return {
        type: types.GET_HISTORICAL_QUOTES.SUCCESS,
        response,
    };
}

export function getHistoricalQuotesFailure(err: any) {
    return {
        type: types.GET_HISTORICAL_QUOTES.FAILURE,
        err,
    };
}

export function setCurrentCryptoDetails(currency: any) {
    return {
        type: types.SET_CURRENT_CRYPTO_DETAILS,
        currency,
    };
}
