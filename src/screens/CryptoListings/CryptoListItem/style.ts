import styled from 'styled-components/native';
import { fontSize, colors } from '@src/utils/constants';
export const CurrencyListContainer = styled.View`
    display: flex;
    flex-direction: column;
`;

export const Currency = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    padding-horizontal: 20px;
`;

export const CurrencyLogo = styled.View`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    border-radius: 5px;
    margin-right: 20px;
`;

export const CurrencyDetails = styled.View`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
`;

export const CurrencyName = styled.Text`
    font-size: ${fontSize.f12}px;
    font-weight: 400;
    color: ${colors.LIGHTBLACK};
    margin-bottom: 5px;
`;

export const CurrencyCap = styled.Text`
    font-size: ${fontSize.f10}px;
    font-weight: 400;
    color: ${colors.GREY};
`;

export const CurrencySparkLine = styled.View`
    flex: 1;
    align-items: center;
`;

export const CurrencyPriceContainer = styled.View`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    align-self: flex-end;
    align-items: flex-end;
`;

export const CurrencyPrice = styled.Text`
    font-size: ${fontSize.f12}px;
    font-weight: 500;
    color: ${colors.BLACK};
    margin-bottom: 5px;
`;