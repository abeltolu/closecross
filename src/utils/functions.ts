import numeral from 'numeral';
import dayjs from 'dayjs';

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

export const getFakeChartData  =() => {
    return [
        {
            value: 100,
            date: dayjs('2018-06-22T19:10:37.000Z'),
        },
        {
            value: 101.3,
            date: dayjs('2018-06-22T19:20:33.000Z'),
        },
        {
            value: 102,
            date: dayjs('2018-06-22T19:30:33.000Z'),
        },
        {
            value: 101.8,
            date: dayjs('2018-06-22T19:40:33.000Z'),
        },
        {
            value: 101.9,
            date: dayjs('2018-06-22T19:50:33.000Z'),
        },
        {
            value: 102.1,
            date: dayjs('2018-06-22T20:00:33.000Z'),
        },
        {
            value: 102,
            date: dayjs('2018-06-22T20:10:33.000Z'),
        },
        {
            value: 101.8,
            date: dayjs('2018-06-22T20:20:33.000Z'),
        },
        {
            value: 101.9,
            date: dayjs('2018-06-22T20:30:33.000Z'),
        },
        {
            value: 102.5,
            date: dayjs('2018-06-22T20:40:33.000Z'),
        },
        {
            value: 102.8,
            date: dayjs('2018-06-22T20:50:33.000Z'),
        },
        {
            value: 103,
            date: dayjs('2018-06-22T21:00:33.000Z'),
        },
        {
            value: 103.3,
            date: dayjs('2018-06-22T21:10:33.000Z'),
        },
        {
            value: 103.8,
            date: dayjs('2018-06-22T21:20:33.000Z'),
        },
    ]
}

export const getChartActions = () => {
    return [
        { title: '1H', key: 'hour' },
        { title: '1D', key: 'day' },
        { title: '1W', key: 'week' },
        { title: '1M', key: 'month' },
        { title: '1Y', key: 'year' },
        { title: 'All', key: 'all' }
    ]
}