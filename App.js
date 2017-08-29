import React, {Component} from 'react';
import {Text, View, Platform, Image, Dimensions} from 'react-native';
import {Button} from 'native-base';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
var myBackground = require('./assets/landing.jpg');

export default class ReactNativePokeSearch extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={myBackground}>
                    <View style={styles.viewStyle}>
                        <Text style={styles.titleStyle}>Welcome to PokeSearch</Text>
                        <Button
                            block={true}
                            style={styles.buttonStyle}
                            onPress={() =>{}}
                        >
                            <Text style={styles.buttonText}>Start Searching</Text>
                        </Button>
                    </View>
                </Image>
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
    image: {
        height: height,
        width: width,
        marginTop: -25,
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        fontSize: 30,
        color: 'blue',
        alignItems: 'center',
    },
    buttonStyle: {
        margin: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 30,
    }
};