import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import Emoji from 'react-native-emoji'
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"


var obj = [];
export default class User extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
      markers: [],
    };
  }

  ShowHideComponent = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };

  componentDidMount(){
 fetch('https://us-central1-aiot-fit-xlab.cloudfunctions.net/getallsmilessadaqah', {
    method: 'GET'
 })
 .then((response) => response.json())
 .then((responseJson) => {
   obj  = responseJson.issues;
    var i=0;
    
    {/*for(i=0;i<6;i++){
        if(obj[i].lat == "" || obj[i].long == "" || obj[i].lat == "0" || obj[i].long == "0"){
         obj[i].lat=25.7664362;
         obj[i].long=-80.1915964;
          
        }
     console.log(obj[i])
    }*/}
      
   this.setState({markers:obj});
    
 })
 .catch((error) => {
    console.error(error);
 });
}



  render() {
    return (
      <MapView
        style={{ ...StyleSheet.absoluteFillObject }}
        initialRegion={{
          latitude: 25.7664362,
          longitude: -80.1915964,
          latitudeDelta: .005,
          longitudeDelta: .005
        }} onPress={this.ShowHideComponent} >

          {
              this.state.markers.map((marker, i) => (
                console.log(typeof marker.lat),
                  <MapView.Marker key={i} coordinate={{latitude:marker.lat,longitude:marker.long}} title={marker.name} description={marker.description} >
                    {(this.state.show) ?
                <Emoji name="smile" style={{ fontSize: 35 }} />
                : <Emoji name={marker.emoji} style={{ fontSize: 35 }} />}
                </MapView.Marker>
                
                  
              ))}

        {this.state.show ?
          <Marker
            coordinate={{ latitude: 25.7664362, longitude: -80.1915964 }}
            title='John'
            description='Looking for a box of groceries'
          >
            <Emoji name="disappointed" style={{ fontSize: 35 }} />
          </Marker >
          : null}
        <View style={styles.bottom}><Text style={styles.titleText}>Drop a smile somewhere!</Text></View>
      </MapView>
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
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    position: 'absolute',
    bottom: 50,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  }
});