import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import WishItem from './wishItem';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const WishList = ({ itemList}) => (
    <View style={styles.container}>
        
        <FlatList
                data={itemList}
                renderItem={({ item }) => <WishItem
                    name={item}
                    
                    
                />}
            />

    </View>
);

export default WishList;