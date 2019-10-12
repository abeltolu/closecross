import numeral from 'numeral';

export const convertPrice = (value:any) => {
    return numeral(value).format('$0,0.00');
}

export const convertMarketCap = (value:any) => {
    return numeral(value).format('$0.00a').toUpperCase();
}

export const covertToPercentage = (value:any) => {
    return numeral(value).format('0.00') + '%';
}

export const isPricePositive = (value:number) => {
    let res = value.toString().charAt(0);
    return (res && res == '-') ? false : true;
}

export const getCryptoImage = (id: number) => {
    return `https://s2.coinmarketcap.com/static/img/coins/32x32/${id}.png`;
}

export const getCryptoSparkLine = (id: number) => {
    return `https://s2.coinmarketcap.com/generated/sparklines/web/7d/usd/${id}.png`;
}