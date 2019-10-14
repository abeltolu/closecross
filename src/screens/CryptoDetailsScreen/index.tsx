import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
    NavigationScreenProp, 
    NavigationParams, 
    NavigationState,
} from 'react-navigation';
import * as cryptoActions from '@actions/cryptoActions';
import { Container } from 'native-base';
import ScreenHeader from '@src/components/ScreenHeader';
import { 
    ThreeColumnContainer, 
    HeaderLeft, 
    BackIcon, 
    HeaderBody, 
    HeaderRight, 
    ContentView,
    CurrencyPriceChange
} from '@src/components';
import {
    HeaderCryptoName,
    HeaderCryptoSymbol,
    PriceContainer,
    CryptoPrice,
    PercentChangeContainer,
    PercentChangeHour,
    ChartBox,
    ChartActions,
    ChartActionBTN,
    ChartActionTitle,
    ActionButtonGroup,
    ActionButton,
    ActionButtonTitle
} from './style';
import AutoHeightImage from 'react-native-auto-height-image';
import { getCryptoImage, convertPrice, isPricePositive, covertToPercentage, getFakeChartData, getChartActions } from '@src/utils/functions';
import CustomAreaChart from '@src/components/CustomAreaChart';
import { colors } from '@src/utils/constants';

type OwnProps = {
    navigation: NavigationScreenProp<NavigationState>
};
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type IProps = OwnProps & StateProps & DispatchProps & NavigationScreenProp<NavigationState, NavigationParams>;
type IState = {
    data: any[];
    activeChartAction: string;
};

class CryptoDetailsScreen extends React.PureComponent<IProps, IState> {
    /*componentDidMount(){
        const { currency, getHistoricalQuotes } = this.props;
        //get historical quotes
        currency && currency.id && getHistoricalQuotes({
            id: currency.id
        })
    }*/

    state = {
        data: [],
        activeChartAction: 'day'
    }

    handleBack = () => {
        this.props.navigation.goBack();
    }

    render(){
        const { activeChartAction } = this.state;
        const { currency } = this.props;
        const { id, symbol, name, quote } = currency;
        const { USD } = quote;
        const price = USD && convertPrice(USD.price) || '$0';
        const isPositive = USD && 
        USD.percent_change_24h && isPricePositive(USD.percent_change_24h) || false;
        const percentageChange = `${isPositive ? '+' : ''}` + (USD && covertToPercentage(USD.percent_change_24h) || '0%');
        const chartData = getFakeChartData();
        const chartActions = getChartActions();

        return (
            <Container>
                {
                    currency && 
                    <Fragment>

                        {
                            /**
                             * Load Screen header
                             */
                        }
                        <ScreenHeader>
                            <ThreeColumnContainer>
                                <HeaderLeft>
                                    <BackIcon onPress={this.handleBack} />
                                </HeaderLeft>
                                <HeaderBody flexRow justifyCenter>
                                    <HeaderCryptoName>{name}</HeaderCryptoName>
                                    <HeaderCryptoSymbol>{symbol}</HeaderCryptoSymbol>
                                </HeaderBody>
                                <HeaderRight>
                                    <AutoHeightImage source={{uri: getCryptoImage(id)}} width={20} />
                                </HeaderRight>
                            </ThreeColumnContainer>
                        </ScreenHeader>

                        <ContentView >
                            {
                                /**
                                 * Load Price container
                                 */
                            }
                            <PriceContainer>
                                <CryptoPrice>{price}</CryptoPrice>
                                <PercentChangeContainer>
                                    <CurrencyPriceChange positive={isPositive}>
                                        {percentageChange}
                                    </CurrencyPriceChange>
                                    <PercentChangeHour>This Hour</PercentChangeHour>
                                </PercentChangeContainer>
                            </PriceContainer>

                            {
                                /**
                                 * Load Chart box
                                 */
                            }
                            <ChartBox>
                                <CustomAreaChart chartData={chartData} />
                                {
                                    chartActions && chartActions.length &&
                                    <ChartActions>
                                        {
                                            chartActions.map(({ title, key }) => (
                                                <ChartActionBTN 
                                                    isActive={key == activeChartAction} key={key}
                                                    onPress={() => this.setState({activeChartAction: key})}>
                                                    <ChartActionTitle 
                                                        color={(key == activeChartAction) ? '#FFF' : colors.BLACK}>
                                                        {title}
                                                    </ChartActionTitle>
                                                </ChartActionBTN>
                                            ))
                                        }
                                    </ChartActions>
                                }
                            </ChartBox>

                            {
                                /**
                                 * Load Crypto actions buttons to Buy/Sell
                                 */
                            }
                            <ActionButtonGroup>
                                <ActionButton 
                                    onPress={() => console.log('Buy')} 
                                    bgColor={colors.CUSTOM_BLACK}
                                >
                                    <ActionButtonTitle>Buy</ActionButtonTitle>
                                </ActionButton>
                                <ActionButton 
                                    onPress={() => console.log('Sell')} 
                                    bgColor={colors.GREEN}
                                >
                                    <ActionButtonTitle>Sell</ActionButtonTitle>
                                </ActionButton>
                            </ActionButtonGroup>
                        </ContentView>
                    </Fragment>
                }
            </Container>
        )
    }
}

const mapStateToProps = (state: any) => ({
    currency: state.cryptos.currency,
    isFetching: state.cryptos.isFetching,
    historicalQuotes: state.cryptos.historicalQuotes,
});

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(
        {
            getHistoricalQuotes: cryptoActions.getHistoricalQuotesRequest,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CryptoDetailsScreen);
