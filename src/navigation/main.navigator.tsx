import React from 'react';
import {
    createAppContainer,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import materialColors from 'material-colors';
import { TabBarIconProps } from '@api/types';

// screens
import CryptoListings from '@screens/CryptoListings';
import CryptoDetailsScreen from '@screens/CryptoDetailsScreen';
import AccountScreen from '@screens/AccountScreen';
import TradeScreen from '@screens/TradeScreen';
import MarketsScreen from '@screens/MarketsScreen';

// components
import { FontAwesome5 as Icon } from '@expo/vector-icons';

// utils
import { colors } from '@utils/constants';

///// Navigator Stack
const cryptoNavigatorStack = {
    CryptoDetails: {
        screen: CryptoDetailsScreen,
        navigationOptions: () => ({
            title: 'Crypto Details',
        }),
    },
};

//// Navigator Containers
const CryptosNavigator = createStackNavigator(
    {
        CryptoListings: {
            screen: CryptoListings,
            navigationOptions: () => ({
                title: 'Cryptos',
            }),
        },
        ...cryptoNavigatorStack
        
    },
    {
        initialRouteName: 'CryptoListings',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: colors.GREEN,
            },
            headerTintColor: colors.WHITE,
            headerTitleStyle: {
                color: colors.WHITE,
                fontWeight: "300",
                fontSize: 16
            },
        },
        cardStyle: {
            backgroundColor: colors.WHITE,
        },
        headerMode: 'none'
    }
);

const MarketsNavigator = createStackNavigator(
    {
        MarketsListing: {
            screen: MarketsScreen,
            navigationOptions: () => ({
                title: 'MarketsListing',
            }),
        },
        
    },
    {
        initialRouteName: 'MarketsListing',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: colors.GREEN,
            },
            headerTintColor: colors.WHITE,
            headerTitleStyle: {
                color: colors.WHITE,
                fontWeight: "300",
                fontSize: 16
            },
        },
        cardStyle: {
            backgroundColor: colors.WHITE,
        },
        headerMode: 'none'
    }
);

const TradeNavigator = createStackNavigator(
    {
        TradesListing: {
            screen: TradeScreen,
            navigationOptions: () => ({
                title: 'TradesListing',
            }),
        },
        
    },
    {
        initialRouteName: 'TradesListing',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: colors.GREEN,
            },
            headerTintColor: colors.WHITE,
            headerTitleStyle: {
                color: colors.WHITE,
                fontWeight: "300",
                fontSize: 16
            },
        },
        cardStyle: {
            backgroundColor: colors.WHITE,
        },
        headerMode: 'none'
    }
);

const AccountNavigator = createStackNavigator(
    {
        AccountProfile: {
            screen: AccountScreen,
            navigationOptions: () => ({
                title: 'AccountProfile',
            }),
        },
        
    },
    {
        initialRouteName: 'AccountProfile',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: colors.GREEN,
            },
            headerTintColor: colors.WHITE,
            headerTitleStyle: {
                color: colors.WHITE,
                fontWeight: "300",
                fontSize: 16
            },
        },
        cardStyle: {
            backgroundColor: colors.WHITE,
        },
        headerMode: 'none'
    }
);

const TabNavigator = createBottomTabNavigator({
    Cryptos: {
        screen: CryptosNavigator,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor, focused }: TabBarIconProps) => (
                <Icon name="home" size={20} color={focused ? colors.GREEN : tintColor} />
            ),
        },
    },
    Markets: {
        screen: MarketsNavigator,
        navigationOptions: {
            tabBarLabel: 'Markets',
            tabBarIcon: ({ tintColor, focused }: TabBarIconProps) => (
                <Icon name="poll" size={20} color={focused ? colors.GREEN : tintColor} />
            ),
        },
    },
    Trade: {
        screen: TradeNavigator,
        navigationOptions: {
            tabBarLabel: 'Trade',
            tabBarIcon: ({ tintColor, focused }: TabBarIconProps) => (
                <Icon name="exchange-alt" size={20} color={focused ? colors.GREEN : tintColor} />
            ),
        },
    },
    Account: {
        screen: AccountNavigator,
        navigationOptions: {
            tabBarLabel: 'Account',
            tabBarIcon: ({ tintColor, focused }: TabBarIconProps) => (
                <Icon name="user-circle" size={20} color={focused ? colors.GREEN : tintColor} />
            ),
        },
    }
}, {
    tabBarOptions: {
        activeTintColor: colors.CUSTOM_BLACK,
        style: {
            borderTopWidth: 0,
        }
    }
});

const MainNavigator = createStackNavigator(
    {
        TabNav: {
            screen: TabNavigator,
            navigationOptions: {
                header: null,
            },
        },
    },
    {
        initialRouteName: 'TabNav',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: colors.WHITE,
            },
            headerTintColor: materialColors.grey['700'],
            headerTitleStyle: {
                color: materialColors.grey['700'],
            },
        },
        cardStyle: {
            backgroundColor: colors.WHITE,
        },
    }
);

const MainNavigationContainer = createAppContainer(MainNavigator);

export { MainNavigationContainer };
