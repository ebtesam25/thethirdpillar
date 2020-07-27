import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

import FriendItem from './friendItem';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});


const FriendList = ({ itemList}) => (
    <View style={styles.container}>
     <ScrollView>
        <FlatList
                data={itemList}
                renderItem={({ item }) => <FriendItem
                id={item.id}   
                name={item.name}
                description={item.description}
                email={item.email}
                phone={item.phone}
                status={item.status}
                    
                    
                />}
            />
</ScrollView>   
    </View>
);

export default FriendList;