import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, Dimensions, KeyboardAvoidingView } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

let customFonts  = {
    'Avenir': require('../assets/fonts/Avenir.ttf'),
    'Futura': require('../assets/fonts/Futura.ttf'),
  };
  
export default class Zakat extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            fontsLoaded: false,
            gold: "",
            silver: "",
            cash: "",
            receivables: "",
            stock: "",
            payables: "",
            loan: "",
            zakat: "",
          };
    }
    
  
    async _loadFontsAsync() {
      await Font.loadAsync(customFonts);
      this.setState({ fontsLoaded: true });
    }
  
    componentDidMount() {
      this._loadFontsAsync();
    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
      }
    

    zakat= async () =>{
      
        fetch('https://us-central1-aiot-fit-xlab.cloudfunctions.net/findzakat', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "gold":this.state.gold,  
              "siilver": this.state.silver,   
              "cash": this.state.cash,         
              "receivable": this.state.receivables,
              "shares":this.state.stock,
              "payable":this.state.payables,
              "loan":this.state.loan,
  
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
    zakatval(){
        this.updateInputVal(40.55, 'zakat')
    }
  
    render(){
        //const { name } = this.props.route.params;
        if (this.state.fontsLoaded) {
            
        return (
        <View style={styles.container}>
        
        <Text style={styles.welcome} onPress={() => this.props.navigation.navigate('SendGift')}>Calculate Zakat</Text>
        
        
        <Text style={styles.welcome3}>Enter the following details to calculate your Zakat </Text>
            <TextInput placeholder = "Gold   "  style={styles.text} value={this.state.gold} onChangeText={(val) => this.updateInputVal(val, 'gold')}></TextInput>
            
            <TextInput placeholder = "Silver  " style={styles.text} value={this.state.silver} onChangeText={(val) => this.updateInputVal(val, 'silver')}></TextInput>
            
            <TextInput placeholder = "Cash   " style={styles.text} value={this.state.cash} onChangeText={(val) => this.updateInputVal(val, 'cash')}></TextInput>
            
            <TextInput placeholder = "Receivables   " style={styles.text} value={this.state.receivables} onChangeText={(val) => this.updateInputVal(val, 'receivables')}></TextInput>
            
            <TextInput placeholder = "Stock   " style={styles.text} value={this.state.stock} onChangeText={(val) => this.updateInputVal(val, 'stock')}></TextInput>

            <TextInput placeholder = "Payables   " style={styles.text} value={this.state.payables} onChangeText={(val) => this.updateInputVal(val, 'payables')}></TextInput>

            <TextInput placeholder = "Loan   " style={styles.text} value={this.state.loan} onChangeText={(val) => this.updateInputVal(val, 'loan')}></TextInput>


           <Text style={styles.text}>{this.state.zakat}</Text>

          <Text style={styles.btn} onPress={()=>this.zakatval()}>CALCULATE</Text>
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
        position:'absolute',
        height:Dimensions.get("window").height,
        width:'100%',
        backgroundColor: '#fff',

        },
       
        
       
       
        text:{
            fontSize:25,
            fontFamily:'Futura',
            zIndex:4,
            position:'relative',
            top:'33%',
            left:'20%',
            marginBottom:5,
            color:'#0a2463',
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
      top:'40%',
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

        
      });