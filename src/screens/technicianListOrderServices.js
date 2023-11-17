import React, { useState } from "react";
import { Image, View, FlatList, StyleSheet } from "react-native";
import { List, Text, Searchbar, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



const serviceOrderList = [
    {
        id:1,
        device: 'iPhone 12',
        description: 'Tela quebrada',
        status: 'Finalizado',
        client: 'Normandes',
        technician: 'Maria',
        estimatedValue: 'R$ 700,00'
    },
    {
        id:2,
        device: 'MacBook Pro',
        description: 'Não liga',
        status: 'Finalizado',
        client: 'Normandes',
        technician: 'Maria',
        estimatedValue: 'R$ 1.000,00'
    },
    {
        id:3,
        device: 'iPhone 11',
        description: 'Bateria viciada',
        status: 'Finalizado',
        client: 'Normandes',
        technician: 'Maria',
        estimatedValue: 'R$ 600,00'
    },
    {
        id:4,
        device: 'iPhone 8',
        description: 'Não carrega',
        status: 'Pronto para retirada',
        client: 'Normandes',
        technician: 'Maria',
        estimatedValue: 'R$ 300,00'
    }
];

const UserListOrderServices = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    
    const handleGoHome = () => {
        //useNavigation.navigate('Home');
        console.log('teste_goHome');
    };

    const filteredServiceOrders = serviceOrderList.filter((serviceOrder) =>
        serviceOrder.device.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const renderItem = ({ item }) => (
        <List.Item
            title={item.device}
            description={`Status: ${item.status}`}
            onPress={() => navigation.navigate('Perfil', { serviceOrder: item })}
        />
    );

    const onChangeSearch = query => setSearchQuery(query);

    return (
        
        <View style={styles.container}>            
            <View style={styles.header}>
                <IconButton
                    icon="arrow-left"
                    size={20}
                    onPress={handleGoHome}
                    style={styles.icon}
                />
                <Text style={styles.titulo}>Service Orders</Text>

                <Image style={styles.logo} source={require('../assets/logo.png')} />
            </View>
            
            <Searchbar
                placeholder="Search service order by ID"
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
        alignItems: 'center',
    },
    icon: {
        margin: 10,
    },
    titulo: {
        flex: 1,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logo: {
        width: 50,
        height: 50,
        margin: 10,
    },
});