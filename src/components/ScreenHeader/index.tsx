import React from 'react';
import { Header } from 'native-base';
import { StyleSheet } from 'react-native';

type IProps = {
};
const ScreenHeader: React.SFC<IProps> = ({  children, ...rest }) => {
    return (
        <Header transparent style={styles.header} {...rest}>
            {children}
        </Header>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFF', 
        padding: 20, 
        marginHorizontal: 10
    }
})

export default ScreenHeader;