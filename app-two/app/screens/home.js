import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

let customFonts  = {
    'Avenir': require('../assets/fonts/Avenir.ttf'),
    'Futura': require('../assets/fonts/Futura.ttf'),
  };
  
export default class Home extends React.Component  {
    state = {
      fontsLoaded: false,
    };
  
    async _loadFontsAsync() {
      await Font.loadAsync(customFonts);
      this.setState({ fontsLoaded: true });
    }
  
    componentDidMount() {
      this._loadFontsAsync();
    }
  
    render(){
        if (this.state.fontsLoaded) {
        return (
        <View style={styles.container}>
        <Text style={styles.welcome} onPress={() => this.props.navigation.navigate('#')}>Welcome</Text>
        
        
          <Text style={styles.welcome3}>Connect with the Muslim Ummah and help each other out!</Text>
         
          <Image source={require('../assets/images/splash.png')} style={styles.logo}></Image>
          <Text style={styles.btn} onPress={() => this.props.navigation.navigate('RetreieveSadaqah')}>Give Sadaqah</Text>
          <Text style={styles.btn2} onPress={() => this.props.navigation.navigate('Wishlist')}>Request for help</Text>
          <Text style={styles.btn3} onPress={() => this.props.navigation.navigate('Zakat')}>Zakat calculator</Text>
        </View>
        );
        }
        else {
        return <AppLoading />;
        }
      }
    }

    const styles = StyleSheet.create({
        container: {
          height:'100%',
          position:'relative',
          backgroundColor: 'white',
        },
        logo:{
          height:'80%',
          width:'80%',
          resizeMode:'contain',
          zIndex:1,
          position:'relative',
          alignSelf:'center',
          top:'2%',
        },
        welcome: {
            fontFamily:'Avenir',
            fontSize:30,
            position:'absolute',
            alignSelf:'center',
            zIndex:1,
            padding:'5%',
            backgroundColor:'#EA765D',
            width:'100%',
            height:'15%',
            textAlignVertical:'center',
            textAlign:'center',
            color:'#FFF'
        },
        welcome2: {
          fontFamily:'Avenir',
          fontSize:30,
          position:'relative',
          alignSelf:'center',
          top:'-30%',
          elevation:2,
          color:'black',
          width:'70%',
          textAlign:'center'
      },
      welcome3: {
        fontFamily:'Futura',
        fontSize:20,
        position:'relative',
        alignSelf:'center',
        top:'20%',
        elevation:2,
        color:'black',
        width:'85%',
        textAlign:'left'
    },
    btn: {
      fontFamily:'Avenir',
      fontSize:20,
      position:'relative',
      alignSelf:'center',
      top:'70%',
      color:'black',
      width:'75%',
      textAlign:'center',
      backgroundColor:'#EA765D',
      padding:'5%',
      borderRadius:15,
      shadowColor:'#000',
      color:'#FFF',
      marginBottom:'5%',
      zIndex:4,
      position:'absolute'
  },
  btn2: {
    fontFamily:'Avenir',
    fontSize:20,
    position:'absolute',
    alignSelf:'center',
    top:'82%',
    color:'black',
    width:'75%',
    textAlign:'center',
    backgroundColor:'#EA765D',
    padding:'5%',
    borderRadius:15,
    shadowColor:'#000',
    color:'#FFF',
    marginBottom:'5%',
    zIndex:4,
},
btn3: {
  fontFamily:'Avenir',
  fontSize:20,
  position:'absolute',
  alignSelf:'center',
  top:'92%',
  color:'black',
  width:'75%',
  textAlign:'center',
  backgroundColor:'#EA765D',
  padding:'5%',
  borderRadius:15,
  shadowColor:'#000',
  color:'#FFF',
  marginBottom:'5%',
  zIndex:4,
},
        
      });