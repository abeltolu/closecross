import * as types from './actionTypes';

export function getLatestListingsRequest(payload: any) {
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
