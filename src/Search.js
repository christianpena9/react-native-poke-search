import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {Header,Item,Icon,Input,Button} from 'native-base';

class Search extends Component {
    constructor(props,context) {
        super(props, context);
        this.state = {
            pokeSearch: ''
        }
    }
    
    searchPoke = () => {
        
    }
    
    render() {
        return (
            <View style={{flex: 1}}>
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
            </View>
        );
    }
}

export default Search;