import { all } from 'redux-saga/effects';
import cryptos from './cryptos';

const root = function* root() {
    yield all([...cryptos]);
};

export default root;
