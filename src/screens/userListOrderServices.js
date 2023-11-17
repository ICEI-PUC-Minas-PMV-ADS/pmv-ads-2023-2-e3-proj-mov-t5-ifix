import React, { useState } from "react"
import { Image, View, FlatList, StyleSheet } from "react-native";
import firebase from 'firebase/app';
import { List, Text, TextInput, Searchbar, Icon } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const serviceOrderList = [
    {
        id:1,
        device: 'iPhone 12',
        description: 'Tela quebrada',
        status: 'Em andamento',
        client: 'José',
        technician: 'Maria',
        estimatedValue: 'R$ 700,00'
    },
    {
        id:2,
        device: 'MacBook Pro',
        description: 'Não liga',
        status: 'Aguardando Autorização',
        client: 'João',
        technician: 'Maria',
        estimatedValue: 'R$ 1.000,00'
    },
    {
        id:3,
        device: 'iPhone 11',
        description: 'Bateria viciada',
        status: 'Pronto para retirada',
        client: 'Normandes',
        technician: 'Maria',
        estimatedValue: 'R$ 600,00'
    }
]

const UserListOrderServices =({navigation}) => {
    const [serviceOrders, setServiceOrders] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredServiceOrders = serviceOrders.filter((serviceOrder) =>
        serviceOrder.device.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const renderItem = ({ item }) => (
        <List.Item
            left={props => <Text{...props}>{item.device}</Text>}
            title={''}
            onPress={() => navigation.navigate('Perfil', { serviceOrder: item })}
        />
    );


    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
    <View style={styles.container}>

    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Searchbar
            placeholder="#ID Number or Device"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{ flex: 1 }} // This makes the Searchbar take up the remaining space
        />
        <Image style={{ width: 50, height: 50 }} source={require('../assets/logo.png')} />
    </View>

        <FlatList
            data={serviceOrderList}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
    </View>
    );
};

export default UserListOrderServices;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        marginTop: 20,
    },
    logo: {
        
    },
});