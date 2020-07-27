import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import pinList from '../components/pinlist';
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"

class BasicPinItem extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato'                
          backgroundColor: 'black'
        }}>
          <Image
            source={{ uri: this.props.item.imageUrl }}
            style={{ width: 100, height: 100, margin: 5 }}
          >

          </Image>
          <View style={{
            flex: 1,
            flexDirection: 'column',
            height: 100
          }}>
            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
            <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
          </View>
        </View>
        <View style={{
          height: 1,
          backgroundColor: 'white'
        }}>

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  flatListItem: {
    color: 'white',
    padding: 10,
    fontSize: 16,
  }
});

export default class FlatPinList extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Smiles")}>
      <View style={{ flex: 1, marginTop: 22 }}>
        <FlatList
          data={flatListData}
          renderItem={({ item, index }) => {
            return (
              <FlatListItem item={item} index={index}>

              </FlatListItem>);
          }}
        >
        </FlatList>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}