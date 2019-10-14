import styled from 'styled-components/native';
import { Content } from 'native-base';
import { colors, fontSize } from '@utils/constants';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

export const SearchContainer = styled.View`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ThreeColumnContainer = styled(SearchContainer)``;

export const HeaderRight = styled.View`
    width: 50px;
    margin-left: 10px;
    display: flex;
    align-items: flex-end;
`;

export const HeaderLeft = styled.View`
    width: 50px;
    margin-right: 10px;
    display: flex;
    align-items: flex-start;
`;

export const ContentView = styled(Content)`
    flex: 1;
    background-color: ${colors.WHITE};
    padding-horizontal: 20px;
    display: flex;
    flex-direction: column;
`;

export const HeaderBody = styled.View<{flexRow?: boolean; justifyCenter?: boolean;}>`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: ${(props) => props.flexRow ? 'row': 'column'};
    justify-content: ${(props) => props.justifyCenter ? 'center': 'flex-start'};
`;

export const CurrencyPriceChange = styled.Text<{positive?: boolean;}>`
    font-size: ${fontSize.f10}px;
    font-weight: 400;
    color: ${(props:any) => props.positive ? colors.GREEN : colors.RED};
`;

export const FilterIcon = styled(Icon).attrs({
    name: 'sort-amount-down',
    size: 20,
    color: colors.LIGHTBLACK,
})``;

export const BackIcon = styled(Icon).attrs({
    name: 'chevron-left',
    size: 20,
    color: colors.LIGHTBLACK,
})``;