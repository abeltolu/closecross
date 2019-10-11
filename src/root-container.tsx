import React from 'react';
import { connect } from 'react-redux';
import {
    MainNavigationContainer,
} from '@navigation/main.navigator';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { colors } from '@utils/constants';
import { Root } from 'native-base';

type OwnProps = {};
type StateProps = ReturnType<typeof mapStateToProps>;
type IProps = OwnProps & StateProps;
class RootContainer extends React.PureComponent<IProps> {
    render() {
        return (
            <ThemeProvider theme={colors}>
                <Root>
                    <StatusBar
                        backgroundColor={colors.PRIMARY_BLUE}
                        barStyle="light-content"
                        animated
                    />
                    <MainNavigationContainer />
                </Root>
            </ThemeProvider>
        );
    }
}

const mapStateToProps = (state: any) => ({});
export default connect(
    mapStateToProps,
    null
)(RootContainer);
