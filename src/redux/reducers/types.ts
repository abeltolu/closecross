type IStoreDefaultState1 = {
    isFetching: boolean;
};

type IStoreDefaultState2 = {
    start: number;
    limit: number;
    volume_24h_min: number;
    convert: string;
    convert_id: string;
    sort: string;
    sort_dir: string;
    cryptocurrency_type: string;
    aux: string;
};

export type IStoreCryptoState = {
    currencies: any[];
    currency: any;
    historicalQuotes: any[];
} & IStoreDefaultState1 &
    IStoreDefaultState2;

export type IStoreState = {
    cryptos: IStoreCryptoState;
};
