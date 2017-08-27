import { AppRegistry } from 'react-native';
import ReactNativePokeSearch from './App';

if (!window.navigator.userAgent) {
    window.navigator.userAgent = 'react-native';
}

AppRegistry.registerComponent('ReactNativePokeSearch', () => ReactNativePokeSearch);