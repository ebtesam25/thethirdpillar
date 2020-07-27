import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import Emoji from 'react-native-emoji'
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import ImagePicker from 'react-native-image-picker'


var cUrl = null;
var pUrl = null;

export default class Help extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
      markers: [],
      emoji: "", 
      name: "",
      lat: "",
      long:"",
      description:"",
      image:"",
      resourcePath: {},
    };
  }

  
  selectFile = () => {
    var options = {
      title: 'Select Image',
     
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else {
        let source = res;
        this.setState({
          resourcePath: source,
        });
      }
    });
  };

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

 
    addPin= async () =>{
      
      fetch('https://us-central1-aiot-fit-xlab.cloudfunctions.net/addasmilesadaqah', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "name":this.state.name,  
            "lat": this.state.lat,   
            "long": this.state.long,         
            "description": this.state.description,
            "emoji":this.state.emoji,
            "img_url":"https://media.tenor.com/images/cb94583210b05ef05955d64296436347/tenor.gif"

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


  ShowHideComponent = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };

  render() {
    return (
      <View >
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 25.7664362,
          longitude: -80.1915964,
          latitudeDelta: .005,
          longitudeDelta: .005
        }} 
        onLongPress={this.ShowHideComponent}
        onPress={(e) => this.setState({ markers: [...this.state.markers, { latlng: e.nativeEvent.coordinate,emoji:this.state.emoji}],lat:e.nativeEvent.coordinate.latitude,long:e.nativeEvent.coordinate.longitude })}>
          {
              this.state.markers.map((marker, i) => (
                  <MapView.Marker key={i} coordinate={marker.latlng} >
                    
                    {(this.state.show && i==marker.key) ?
                <Emoji name="smile" style={{ fontSize: 35 }} />
                : <Emoji name={marker.emoji} style={{ fontSize: 35 }} />}
                </MapView.Marker>
                
                  
              ))}
              
         
         
       {/* <Marker
          coordinate={{ latitude: 25.7664362, longitude: -80.1915964 }}
          title='John'
          description='Looking for a box of groceries'
        >
          {this.state.show ?
            <Emoji name="smile" style={{ fontSize: 35 }} />
            : <Emoji name="disappointed" style={{ fontSize: 35 }} />}
          </Marker >*/}
      </MapView>
      <View style={{marginLeft:20}}>
      <TextInput  placeholder = "Name " value={this.state.name} onChangeText={(val) => this.updateInputVal(val, 'name')}></TextInput>
      <TextInput  placeholder = "Description " value={this.state.description} onChangeText={(val) => this.updateInputVal(val, 'description')}></TextInput>
      <View style={{flexDirection:"row", flexWrap:'wrap'}}><Emoji name="disappointed" style={{ fontSize: 35 }} onPress={()=>this.setState({emoji:"disappointed"})}></Emoji>
      <Emoji name="angry" style={{ fontSize: 35 }} onPress={()=>this.setState({emoji:"angry"})}></Emoji>
      <Emoji name="heart_eyes" style={{ fontSize: 35 }} onPress={()=>this.setState({emoji:"heart_eyes"})}></Emoji>
      <Emoji name="cop" style={{ fontSize: 35 }} onPress={()=>this.setState({emoji:"cop"})}></Emoji>
      <Emoji name="ambulance" style={{ fontSize: 35 }} onPress={()=>this.setState({emoji:"ambulance"})}></Emoji>
      <Emoji name="sos" style={{ fontSize: 35 }} onPress={()=>this.setState({emoji:"sos"})}></Emoji>
      <Emoji name="deer" style={{ fontSize: 35 }} onPress={()=>this.setState({emoji:"deer"})}></Emoji>
      <Emoji name="notes" style={{ fontSize: 35 }} onPress={()=>this.setState({emoji:"notes"})}></Emoji>
      <Emoji name="fire" style={{ fontSize: 35 }} onPress={()=>this.setState({emoji:"fire"})}></Emoji>
      <Emoji name="hole" style={{ fontSize: 35 }} onPress={()=>this.setState({emoji:"hole"})}></Emoji>
      <Emoji name="ocean" style={{ fontSize: 35 }} onPress={()=>this.setState({emoji:"ocean"})}></Emoji>
      <Emoji name="coffee" style={{ fontSize: 35 }} onPress={()=>this.setState({emoji:"coffee"})}></Emoji>
      <Emoji name="construction" style={{ fontSize: 35 }} onPress={()=>this.setState({emoji:"construction"})}></Emoji>
      <Emoji name="no_entry_sign" style={{ fontSize: 35 }} onPress={()=>this.setState({emoji:"no_entry_sign"})}></Emoji>
      <Emoji name="sleeping_accommodation" style={{ fontSize: 35 }} onPress={()=>this.setState({emoji:"sleeping_accommodation"})}></Emoji>
      <Emoji name="nauseated_face" style={{ fontSize: 35 }} onPress={()=>this.setState({emoji:"nauseated_face"})}></Emoji>
      <Emoji name="fireworks" style={{ fontSize: 35 }} onPress={()=>this.setState({emoji:"fireworks"})}></Emoji>
      <Emoji name="umbrella" style={{ fontSize: 35 }} onPress={()=>this.setState({emoji:"umbrella"})}></Emoji>
      <Emoji name="runner" style={{ fontSize: 35 }} onPress={()=>this.setState({emoji:"runner"})}></Emoji>
      <Emoji name="boom" style={{ fontSize: 35 }} onPress={()=>this.setState({emoji:"boom"})}></Emoji>
      </View>
      <Text style={{fontSize:20, marginTop:10}}>{this.state.emoji}</Text>
     {/*} <Image
            source={{
              uri: 'data:image/jpeg;base64,' + this.state.resourcePath.data,
            }}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={{ uri: this.state.resourcePath.uri }}
            style={{ width: 40, height: 40 }}
          />
          <Text style={{ alignItems: 'center' }}>
            {this.state.resourcePath.uri}
          </Text>
          <Text style={styles.btn} onPress={()=>this.selectFile()}>ADD IMAGE</Text>*/}
      <Text style={styles.btn} onPress={()=>this.addPin()}>SUBMIT</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'gray'
  },
  map: {
    height: 350,
  },
  overlay: {
    position: 'absolute',
    bottom: 50,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
  btn:{
    fontSize:20,
    alignSelf:'center',
    marginTop:25,
    backgroundColor:'#c2eabd',
    borderRadius:30,
    paddingHorizontal:20,
    paddingVertical:10,
    color:'#011936',
},
});