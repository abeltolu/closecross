import axios from 'axios';
import * as cryptocurrencyAPI from './cryptocurrency';

const CMC_PRO_API_KEY = '05b237b2-5deb-407b-bc75-a141e6e4b8b7';
class API {
    setHeader = () => {
        axios.defaults.headers.common['Accept'] = 'application/json';
        if (CMC_PRO_API_KEY) {
            axios.defaults.headers.common['X-CMC_PRO_API_KEY'] = CMC_PRO_API_KEY;
        }
    };

    //// cryptocurrencyAPI
    getLatestListings = (payload: any) => cryptocurrencyAPI.getLatestListings(payload);
    getHistoricalQuotes = (payload: any) => cryptocurrencyAPI.getHistoricalQuotes(payload);
}

const apiHandler = new API();
export default apiHandler;
