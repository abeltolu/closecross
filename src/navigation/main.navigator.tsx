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

// components
import { FontAwesome5 as Icon } from '@expo/vector-icons';

// utils
import { colors } from '@utils/constants';

///// Navigator Stack

//// Navigator Containers
const CryptosNavigator = createStackNavigator(
    {
        CryptoListings: {
            screen: CryptoListings,
            navigationOptions: () => ({
                title: 'Cryptos',
            }),
        },
        
    },
    {
        initialRouteName: 'CryptoListings',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: colors.PRIMARY_BLUE,
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
    }
);

const TabNavigator = createBottomTabNavigator({
    Cryptos: {
        screen: CryptosNavigator,
        navigationOptions: {
            tabBarLabel: 'Cryptos',
            tabBarIcon: ({ tintColor }: TabBarIconProps) => (
                <Icon name="building" size={20} color={colors.CUSTOM_BLUE} />
            ),
        },
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
