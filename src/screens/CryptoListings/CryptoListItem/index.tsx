import React from 'react';
import { pure } from 'recompose';
import AutoHeightImage from 'react-native-auto-height-image';
import {
    Currency,
    CurrencyLogo,
    CurrencyDetails,
    CurrencyName,
    CurrencyCap,
    CurrencySparkLine,
    CurrencyPriceContainer,
    CurrencyPrice,
    CurrencyPriceChange
} from './style';
import { convertMarketCap, convertPrice, isPricePositive, covertToPercentage, getCryptoImage, getCryptoSparkLine } from '@utils/functions';
type IProps = {
    currency: any;
    onPress?: () => void;
};
const CryptoListItem: React.SFC<IProps> = ({ currency, ...rest }) => {
    const { id, symbol, quote } = currency;
    const { USD } = quote;
    const price = USD && convertPrice(USD.price) || '$0';
    const marketCap = USD && convertMarketCap(USD.market_cap) || '$0';
    const isPositive = USD && 
        USD.percent_change_24h && isPricePositive(USD.percent_change_24h) || false;
    const percentageChange = `${isPositive ? '+' : ''}` + (USD && covertToPercentage(USD.percent_change_24h) || '0%');
    const cryptoImage = getCryptoImage(id);
    const sparkLine = getCryptoSparkLine(id);
    return (
        <Currency {...rest}>
            <CurrencyLogo>
                <AutoHeightImage source={{uri: cryptoImage}} width={20} />
            </CurrencyLogo>
            <CurrencyDetails>
                <CurrencyName>{symbol}</CurrencyName>
                <CurrencyCap>{marketCap}</CurrencyCap>
            </CurrencyDetails>
            <CurrencySparkLine>
                <AutoHeightImage source={{uri: sparkLine}} width={100}  />
            </CurrencySparkLine>
            <CurrencyPriceContainer>
                <CurrencyPrice>{price}</CurrencyPrice>
                <CurrencyPriceChange positive={isPositive}>
                    {percentageChange}
                </CurrencyPriceChange>
            </CurrencyPriceContainer>
        </Currency>
    )
}

export default pure(CryptoListItem);