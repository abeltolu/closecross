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