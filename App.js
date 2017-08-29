import React, {Component} from 'react';
import {Text, View, Platform, Image} from 'react-native';
import Landing from './src/Landing';
import Search from './src/Search';

export default class ReactNativePokeSearch extends Component {
    constructor(props,context) {
        super(props, context);
        this.state = {
            currentScreen: 'landing'
        }
    }
    
    switchScreen = (currentScreen) => {
        this.setState({currentScreen});
    }
    
    renderScreen = () => {
        if(this.state.currentScreen === 'landing') {
            return (
                <Landing switchScreen={this.switchScreen}/>
            );
        } else if (this.state.currentScreen === 'search') {
            return (
                <Search />
            );
        }
    } // End of renderScreen
    
    render() {
        return (
            <View style={styles.container}>
                {this.renderScreen()}
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