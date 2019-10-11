const initialDefaultState1 = {
    isFetching: false,
};

//// For List of objects
const initialDefaultState2 = {
    start: 1,
    limit: 100,
    volume_24h_min: 1,
    convert: '',
    convert_id: '',
    sort: '',
    sort_dir: '',
    cryptocurrency_type: '',
    aux: '',
};

//// cryptos
export const initialCryptoState = {
    ...initialDefaultState1,
    ...initialDefaultState2,
    currencies: [],
};