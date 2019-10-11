const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const RESET = 'RESET';

function createRequestTypes(base: string) {
    const res: any = {};
    [REQUEST, SUCCESS, FAILURE, RESET].forEach(
        (type: string) => (res[type] = `${base}_${type}`)
    );
    return res;
}

export const IsTypeOf = (
    requestTypes: string[],
    actionType: string
): boolean => {
    const _arr = actionType.split('_');
    const _requestType = _arr[_arr.length - 1];
    return requestTypes.includes(_requestType);
};

// Cryptocurrency Actions
export const GET_LATEST_LISTINGS = createRequestTypes('GET_LATEST_LISTINGS');