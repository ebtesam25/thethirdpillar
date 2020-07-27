import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import WishList from '../components/wishList';
import AddWish from '../components/addWish';
import { ScrollView } from 'react-native-gesture-handler';

let customFonts  = {
    'Avenir': require('../assets/fonts/Avenir.ttf'),
    'Futura': require('../assets/fonts/Futura.ttf'),
  };
  
export default class Wishlist extends React.Component  {
    state = {
      fontsLoaded: false,
    };
  
    async _loadFontsAsync() {
      await Font.loadAsync(customFonts);
      this.setState({ fontsLoaded: true });
    }
  
    componentDidMount() {
      this._loadFontsAsync();
      

    fetch('https://us-central1-aiot-fit-xlab.cloudfunctions.net/add2hackywishlist', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "user" : "me", "name":"Porsche"
      })
})
  .then((response) => response.json())
  .then((responseJson) => {
console.log(responseJson);
  })
  .catch((error) => {
      console.error(error);
  });
    }


    

    getData() {
      fetch('https://us-central1-aiot-fit-xlab.cloudfunctions.net/gethackywishlist', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "user" : "me"
        })
})
    .then((response) => response.json())
    .then((responseJson) => {
console.log(responseJson.list);
    })
    .catch((error) => {
        console.error(error);
    });
      }
     
  
    render(){
        if (this.state.fontsLoaded) {
        return (
        <View style={styles.container}>


        <Text style={styles.welcome} onPress={() => this.props.navigation.navigate('#')}>Request</Text>
        
        
          <Text style={styles.welcome3}>Request for help from the Muslim Ummah</Text>
         
         

      <ScrollView style={styles.scrollcontainer}>
      <WishList itemList={this.getData()}/>
      <AddWish></AddWish>
      <Image source={require('../assets/images/plus.png')} style={{alignSelf:'center', marginTop:'30%'}}></Image>
      </ScrollView>
    </View>
        )}

        else {
        return <AppLoading />;
        }
      }
    }

    const styles = StyleSheet.create({
        container: {
            height:'100%',
            position:'relative',
            
          },
          scrollcontainer: {
            height:'100%',
            position:'relative',
            top:'40%',
            
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
            
            zIndex:2,
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
      top:'-20%',
      elevation:2,
      color:'black',
      width:'75%',
      textAlign:'center',
      backgroundColor:'#EA765D',
      padding:'5%',
      borderRadius:15,
      shadowColor:'#000',
      color:'#FFF',
      marginBottom:'5%',
      elevation:4,
  },
  btn2: {
    fontFamily:'Avenir',
    fontSize:20,
    position:'relative',
    alignSelf:'center',
    top:'0%',
    elevation:2,
    color:'black',
    width:'75%',
    textAlign:'center',
    backgroundColor:'#FFF',
    padding:'5%',
    borderRadius:15,
    shadowColor:'#000',
    elevation:4,
},
        
      });