import { Middleware } from 'redux';
import API from '@src/api';

const authMiddleware: Middleware = ({
    dispatch,
    getState,
}) => next => action => {
    API.setHeader();
    next(action);
};

export default authMiddleware;
