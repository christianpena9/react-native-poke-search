import React, {Component} from 'react';
import {Text, View, Platform, Image} from 'react-native';
import Landing from './src/Landing';

export default class ReactNativePokeSearch extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Landing />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        // alignItems: 'stretch'
        //marginTop: Platform.OS === 'android' ? 24 : 0
    },
};