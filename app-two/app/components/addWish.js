import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';


export default function AddWish({ name}) {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
        <TextInput style={styles.name}></TextInput>
        
        </View>
        )}

        const styles = StyleSheet.create({
            container: {
                flex: 1,
               flexDirection:'row',
                padding: 10,
                marginLeft:16,
                marginRight:16,
                marginTop: 8,
                marginBottom: 8,
                borderRadius: 5,
                backgroundColor: '#fff',
                alignSelf:'center',
                textAlignVertical:'center',
                width:375,
                shadowColor:'#000',
                shadowOpacity:0.2
                
            },
            name: {
                fontSize: 30,
                color: '#000',
                fontFamily:'Avenir',
                marginTop: '5%',
                marginLeft:'10%',
                position:'absolute',
                top:'40%',
                elevation:5,
            },
           
        });