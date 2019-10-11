import axios from 'axios';
import { EndPoint, QueryOptions, getAPIURL } from '@api/config';
import { pageSize } from '@utils/constants';

export const getLatestListings = (payload: any) => {
    const API_URL = getAPIURL(
        EndPoint.cryptocurrency, 
        ['listings', 'latest'], 
        [], 
        {
            ...payload,
            limit: payload && payload.pageSize ? payload.pageSize : pageSize.SMALL,
        }
    );
    return axios
        .get(API_URL, {})
        .then(response => {
            return response;
        })
        .catch(error => {
            throw error.response;
        });
};
