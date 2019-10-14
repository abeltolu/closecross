import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Item, Input, Icon, Container } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
    NavigationScreenProp, 
    NavigationParams, 
    NavigationState, 
} from 'react-navigation';
import * as cryptoActions from '@actions/cryptoActions';
import { FilterIcon, HeaderRight, SearchContainer } from '@src/components';
import { colors } from '@src/utils/constants';
import CryptoListItem from './CryptoListItem';
import matchSorter from 'match-sorter';
import ScreenHeader from '@src/components/ScreenHeader';

type OwnProps = {
    navigation: NavigationScreenProp<NavigationState>
};
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type IProps = OwnProps & StateProps & DispatchProps & NavigationScreenProp<NavigationState, NavigationParams>;
type IState = {
    searchText: string;
};

class CryptoListings extends React.PureComponent<IProps, IState> {

    state = {
        searchText: '',
    }

    componentDidMount(){
        this.props.getLatestListings();
    }

    handleListEndReached = () => {
        const { start } = this.props;
        this.props.getLatestListings({ start });
    };

    handleListRefresh = () => {
        this.props.getLatestListings();
    };

    handleSearch = (searchText: string) => {
        this.setState({ searchText });
    };

    handleCurrencyClicked = (currency: any) => {
        this.props.setCurrentCryptoDetails(currency);
        this.props.navigation.navigate('CryptoDetails');
    };

    render(){
        const { searchText } = this.state;
        const { currencies } = this.props;
        const filteredCurrencies = matchSorter(currencies, searchText, {
            keys: ['name', 'symbol'],
        });
        return (
            <Container>
                {
                    /**
                     * Load Screen Header
                     */
                }
                <ScreenHeader>
                    <SearchContainer>
                        <Item rounded style={{flex: 1}}>
                            <Icon name='search' style={styles.searchIcon} />
                            <Input placeholder='Search Crypto' style={styles.searchInput} onChangeText={this.handleSearch}/>
                        </Item>
                        <HeaderRight>
                            <FilterIcon />
                        </HeaderRight>
                    </SearchContainer>
                </ScreenHeader>

                {
                    /**
                     * Load Flat list of all cryptocurrencies
                     */
                }
                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data={filteredCurrencies}
                    onEndReachedThreshold={0.5}
                    onEndReached={this.handleListEndReached}
                    refreshing={this.props.isFetching}
                    onRefresh={this.handleListRefresh}
                    renderItem={({ item }: { item: any }) => (
                        <CryptoListItem
                            currency={item}
                            onPress={() => this.handleCurrencyClicked(item)}
                        />
                    )}
                />
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    searchIcon: {
        fontSize: 20, 
        color: colors.LIGHTGREY
    },
    searchInput: {
        fontSize: 14, 
        height: 40
    }
})

const mapStateToProps = (state: any) => ({
    currencies: state.cryptos.currencies,
    isFetching: state.cryptos.isFetching,
    start: state.cryptos.start
});

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(
        {
            getLatestListings: cryptoActions.getLatestListingsRequest,
            setCurrentCryptoDetails: cryptoActions.setCurrentCryptoDetails
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CryptoListings);
