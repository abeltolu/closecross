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
    HeaderRight 
} from '@src/components';
import {
    HeaderCryptoName,
    HeaderCryptoSymbol
} from './style';
import AutoHeightImage from 'react-native-auto-height-image';
import { getCryptoImage } from '@src/utils/functions';

type OwnProps = {
    navigation: NavigationScreenProp<NavigationState>
};
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type IProps = OwnProps & StateProps & DispatchProps & NavigationScreenProp<NavigationState, NavigationParams>;
type IState = {
    searchText: string;
};

class CryptoDetailsScreen extends React.PureComponent<IProps, IState> {
    /*componentDidMount(){
        const { currency, getHistoricalQuotes } = this.props;
        //get historical quotes
        currency && currency.id && getHistoricalQuotes({
            id: currency.id
        })
    }*/

    handleBack = () => {
        this.props.navigation.goBack();
    }

    render(){
        const { currency, historicalQuotes } = this.props;
        console.log("Currency === ", currency);
        console.log("Historical Quotes === ", historicalQuotes);
        return (
            <Container>
                {
                    currency && 
                    <Fragment>
                        <ScreenHeader>
                            <ThreeColumnContainer>
                                <HeaderLeft>
                                    <BackIcon onPress={this.handleBack} />
                                </HeaderLeft>
                                <HeaderBody flexRow justifyCenter>
                                    <HeaderCryptoName>{currency.name}</HeaderCryptoName>
                                    <HeaderCryptoSymbol>{currency.symbol}</HeaderCryptoSymbol>
                                </HeaderBody>
                                <HeaderRight>
                                    <AutoHeightImage source={{uri: getCryptoImage(currency.id)}} width={20} />
                                </HeaderRight>
                            </ThreeColumnContainer>
                        </ScreenHeader>
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
