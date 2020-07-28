import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function FriendItem({ name, id, description, phone, email, status}) {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
        <Image source={require('../assets/images/avatar.png')} style={{alignSelf:'center', marginTop:'0%', height:'90%', width:'20%', resizeMode:'contain'}}></Image>
        <Text style={styles.name} onPress={()=>updateReq(id)} >{name}</Text>
        <View style={styles.desc}><Text style={styles.text}>{description}</Text></View>
        
        <Text style={styles.text} >Phone: {phone}</Text>
        <Text style={styles.text} >E-mail: {email}</Text>
        <Text style={styles.text} >Status: {status}</Text>
        
        </View>
        )}

        function updateReq(id){
            fetch('https://us-central1-aiot-fit-xlab.cloudfunctions.net/updatesadaqahrequestbyid', {
              method: 'POST',
              headers: {
              'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                "id" : id
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

        const styles = StyleSheet.create({
            container: {
                flex: 1,
               flexDirection:'column',
               flexWrap:'wrap',
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
                shadowOpacity:0.2,
                height:200,
                
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
                marginLeft:'5%',
                
            },
            text: {
                flex:1,
                fontSize: 20,
                color: '#000',
                fontFamily:'Futura',
                flexDirection:'row',
                flexWrap:'wrap',
                marginTop: '1%',
                marginLeft:'10%',
                position:'relative',
                textAlign:'left',
                width:'70%',
            },
            desc: {
                flex:1,
                fontSize: 20,
                color: '#000',
                fontFamily:'Futura',
                flexDirection:'row',
                flexWrap:'wrap',
                marginBottom: '5%',
                marginLeft:'3%',
                position:'relative',
                textAlign:'left',
                width:'70%',
            },
        });