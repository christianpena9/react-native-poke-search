import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {Header,Item,Icon,Input,Button} from 'native-base';

/* Custom components below */
import PokeLoader from './PokeLoader';
import SearchBody from './SearchBody';

class Search extends Component {
    constructor(props,context) {
        super(props, context);
        this.state = {
            pokeSearch: '',
            onCall: true
        }
    }
    
    searchPoke = () => {
        
    }
    
    renderBody = () => {
        if(this.state.onCall) {
            return (
                <PokeLoader />
            );
        } else {
            return (
                <SearchBody />
            );
        }
    }
    
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <Header
                    searchBar={true}
                    rounded={true}
                >
                    <Item>
                        {/*If icons are not showing try typing react-native link
                        and then react-native run-android in terminal of project*/}
                        <Icon name='ios-search' onPress={this.searchPoke}/>
                        <Input
                            value={this.state.pokeSearch}
                            placeholder='Search Pokemon'
                            onChangeText={(pokeSearch) => this.setState({pokeSearch})}
                            style={{marginTop:10}}
                        />
                    </Item>
                </Header>
                {this.renderBody()}
            </View>
        );
    }
}

export default Search;