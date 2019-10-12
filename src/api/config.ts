import { stringify } from 'query-string';
import transform from 'lodash/transform';
import upperFirst from 'lodash/upperFirst';

export const API_BASE_URL = 'https://pro-api.coinmarketcap.com/v1';
export const ClientID = 'crmSeries.Mobile';
export const ClientSecret = '(Added From User Secrets)';
export const Scope = 'crmSeriesAPI offline_access';
export enum EndPoint {
    cryptocurrency = '/cryptocurrency',
}

export enum QueryOptions {
    full = 'full',
    paged = 'paged',
    all = 'all',
}

export enum GrantType {
    password = 'password',
    refresh_token = 'refresh_token',
}

export enum RecordType {
    branch = 'Branch',
    broker = 'Broker',
    company = 'Company',
    companyAssignedAddress = 'CompanyAssignedAddress',
    companyCategory = 'CompanyCategory',
    companyRank = 'CompanyRank',
    contact = 'Contact',
    contactAssignedAddress = 'ContactAssignedAddress',
    deal = 'Deal',
    equipment = 'Equipment',
    lead = 'Lead',
    note = 'Note',
    opportunity = 'Opportunity',
    outputTemplate = 'OutputTemplate',
    outputTemplateCategory = 'OutputTemplateCategory',
    outputTemplateField = 'OutputTemplateField',
    rank = 'Rank',
    task = 'Task',
    user = 'User',
    userRole = 'UserRole',
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
