import { takeLatest, put, fork, call } from 'redux-saga/effects';
import * as types from '@actions/actionTypes';
import API from '@src/api';
import * as cryptoActions from '@actions/cryptoActions';

//WORKERS
function* getLatestListingsRequestWorker(action: any) {
    try {
        const response = yield call(API.getLatestListings, action.payload);
        yield put(cryptoActions.getLatestListingsSuccess(response.data.data));
    } catch (err) {
        console.log('SAGA GET_LATEST_LISTINGS FAILURE: ', err);
        yield put(cryptoActions.getLatestListingsFailure(err));
    }
}

function* getHistoricalQuotesRequestWorker(action: any) {
    try {
        const response = yield call(API.getHistoricalQuotes, action.payload);
        yield put(cryptoActions.getHistoricalQuotesSuccess(response.data.data));
    } catch (err) {
        console.log('SAGA GET_LATEST_LISTINGS FAILURE: ', err);
        yield put(cryptoActions.getHistoricalQuotesFailure(err));
    }
}

//WATCHERS
const getLatestListingsRequestWatcher = function* getLatestListingsRequestWatcher() {
    yield takeLatest(types.GET_LATEST_LISTINGS.REQUEST, getLatestListingsRequestWorker);
};

const getHistoricalQuotesRequestWatcher = function* getHistoricalQuotesRequestWatcher() {
    yield takeLatest(types.GET_HISTORICAL_QUOTES.REQUEST, getHistoricalQuotesRequestWorker);
};

export default [
    fork(getLatestListingsRequestWatcher),
    fork(getHistoricalQuotesRequestWatcher),
];