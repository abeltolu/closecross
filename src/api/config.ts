import { stringify } from 'query-string';
import transform from 'lodash/transform';

export const API_BASE_URL = 'https://pro-api.coinmarketcap.com/v1';
export enum EndPoint {
    cryptocurrency = '/cryptocurrency',
}

export enum QueryOptions {
    full = 'full',
    paged = 'paged',
    all = 'all',
}

export const getAPIURL = (
    endpoint: EndPoint,
    params: string[] = [],
    queryOptions: QueryOptions[] = [],
    queryObj?: any
) => {
    const transformedQueryObj = transform(queryObj || {}, function(
        result: any,
        value: any,
        key: any
    ) {
        result[key] = value;
    });
    const paramsString = params.length > 0 ? `/${params.join('/')}` : '';
    const queryOptionString =
        queryOptions.length > 0 ? `/${queryOptions.join('/')}` : '';
    const queryString =
        queryObj !== undefined ? `?${stringify(transformedQueryObj)}` : '';
    return (
        API_BASE_URL + endpoint + paramsString + queryOptionString + queryString
    );
};
