import styled from 'styled-components/native';
import { fontSize, colors } from '@utils/constants';

export const HeaderCryptoName = styled.Text`
    font-size: ${fontSize.f14}px;
    margin-right: 5px;
    font-weight: 500;
    color: ${colors.BLACK};
`;

export const HeaderCryptoSymbol = styled.Text`
    font-size: ${fontSize.f12}px;
    font-weight: 400;
    color: ${colors.GREY};
`;

export const PriceContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

export const CryptoPrice = styled.Text`
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 5px;
    color: ${colors.CUSTOM_BLACK};
`;

export const PercentChangeContainer = styled.View`
    display: flex;
    flex-direction: row;
`;

export const PercentChangeHour = styled.Text`
    font-size: ${fontSize.f10}px;
    color: ${colors.GREY};
    text-transform: uppercase;
    margin-left: 2px;
    font-weight: 500;
`;

export const ChartBox = styled.View`
`;

export const ChartActions = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const ChartActionTitle = styled.Text<{color?: string;}>`
    font-size: ${fontSize.f10}px;
    font-weight: 400;
    color: ${(props) => props.color || colors.BLACK};
`;

export const ChartActionBTN = styled.TouchableOpacity<{isActive?: boolean;}>`
    padding: 8px 10px;
    border-radius: 3px;
    border-width: 1px;
    border-color: ${(props) => props.isActive ? colors.CUSTOM_BLACK : '#eee'};
    background-color: ${(props) => props.isActive ? colors.CUSTOM_BLACK : '#FFF'};
`;

export const ActionButtonGroup = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ActionButton = styled.TouchableOpacity<{bgColor?: string;}>`
    flex-basis: 48%;
    padding: 15px 30px;
    border-radius: 3px;
    border-width: 1px;
    border-color: ${(props) => props.bgColor || colors.BLACK};
    background-color: ${(props) => props.bgColor || colors.BLACK};
    display: flex;
    align-items: center;
`;

export const ActionButtonTitle = styled.Text`
    font-size: ${fontSize.f12}px;
    font-weight: 500;
    color: #FFF;
`;