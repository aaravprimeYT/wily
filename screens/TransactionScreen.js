import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

class Transaction extends React.Component{
constructor(){
    super()
    this.state={
        hasCameraPermissions:null,
        scanned:false,
        scannedData:"",
        buttonState:"normal",
    }
}

getCameraPermissions= async ()=>{
    const {status} = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
        hasCameraPermissions:status==="granted",
        buttonState:"clicked",
        scanned:false
    })
}

handleBarCodeScanned= async ({
    type,data
}) => {
    this.setState=({
        scanned:true,
        scannedData:data,
        buttonState:"normal"
    })
}

    render(){
        return(
            <View style={styles.container}>
                <Text>Issue Or Return</Text>
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

export default Transaction