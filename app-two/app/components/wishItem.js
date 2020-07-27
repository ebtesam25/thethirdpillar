import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function WishItem({ name}) {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Image source={require('../assets/images/neg.png')} style={styles.photo} />
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
            },
            photo: {
                height: '50%',
                width: '50%',
                paddingHorizontal:'10%',
                borderRadius:30,
                resizeMode:'contain',
                position:'absolute',
                right:-10,
                top:'50%',
                
            },
        });