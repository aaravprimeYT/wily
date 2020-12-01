import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

class Search extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Search A Book</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
    flex:1,
    justifyContent:'center',
    alignItems:"center"
    }
})

export default Search