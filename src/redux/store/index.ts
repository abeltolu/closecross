import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reducers from '@redux/reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from '@redux/sagas';
import authMiddleware from './authMiddleware';
import { AsyncStorage } from 'react-native';

const config = {
    key: 'primary',
    storage: AsyncStorage,
    blacklist: ['cryptos'],
};

const persistedReducer = persistReducer(config, reducers);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    persistedReducer,
    undefined,
    compose(applyMiddleware(sagaMiddleware, authMiddleware))
);
sagaMiddleware.run(sagas);
const persistor = persistStore(store);
// persistor.purge();

export const getPersistor = () => persistor;
export const getStore = () => store;
export const getState = () => {
    return store.getState();
};
