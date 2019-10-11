import React from 'react';
import styled from 'styled-components/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '@utils/constants';
import RootContainer from '@src/root-container';
import { getPersistor, getStore } from '@redux/store';

const AppSplashWrapper = styled.View`
    flex: 1;
    width: ${DEVICE_WIDTH};
    height: ${DEVICE_HEIGHT};
`;

const SplashImage = styled.Image`
    flex: 1;
    width: ${DEVICE_WIDTH};
    height: ${DEVICE_HEIGHT};
`;

class App extends React.PureComponent {

    renderSplashScreen = () => {
        return (
            <AppSplashWrapper>
                <SplashImage
                    resizeMode="cover"
                    source={require('@assets/splash.png')}
                />
            </AppSplashWrapper>
        );
    };

    render() {
        const store = getStore();
        const persister = getPersistor();
        return (
            <Provider store={store}>
                <PersistGate
                    persistor={persister}
                    loading={this.renderSplashScreen()}
                >
                    <RootContainer />
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
