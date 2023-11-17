import React, { useState } from "react";
import { Image, View, FlatList, StyleSheet } from "react-native";
import { List, Text, Searchbar } from 'react-native-paper';

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
];

const UserListOrderServices = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredServiceOrders = serviceOrderList.filter((serviceOrder) =>
        serviceOrder.device.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const renderItem = ({ item }) => (
        <List.Item
            title={item.device}
            description={item.description}
            onPress={() => navigation.navigate('Perfil', { serviceOrder: item })}
        />
    );

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Lista de Serviços</Text>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
            </View>
            <Searchbar
                placeholder="Pesquisar"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <FlatList
                data={filteredServiceOrders}
                keyExtractor={(item) => item.id.toString()}
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titulo: {
        flex: 1,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    logo: {
        width: 50,
        height: 50,
    },
});