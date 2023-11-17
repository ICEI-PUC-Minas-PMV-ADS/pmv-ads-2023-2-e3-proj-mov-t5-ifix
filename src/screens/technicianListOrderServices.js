import React, { useState } from "react";
import { Image, View, FlatList, StyleSheet } from "react-native";
import { List, Text, Searchbar, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



const serviceOrderList = [
    {
        id:1,
        device: 'iPhone 11',
        description: 'Tela quebrada',
        status: 'Aguardando orçamento',
        client: 'João',
        technician: 'Maria',
        estimatedValue: 'R$ 700,00'
    },
    {
        id:2,
        device: 'MacBook Pro',
        description: 'Não liga',
        status: 'Aguardando peça',
        client: 'Joana',
        technician: 'Maria',
        estimatedValue: 'R$ 1.000,00'
    },
    {
        id:3,
        device: 'iPhone 12',
        description: 'Bateria viciada',
        status: 'Finalizado',
        client: 'Mariana',
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

const TechnicianListOrderServices = ({ navigation }) => {
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
            title={`#${item.id} ${item.device} - ${item.description}`}
            description={`Cliente: ${item.client} - Status: ${item.status}`}
            onPress={() => navigation.navigate('ServiceOrderDetails', { serviceOrder: item })}
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
                <Text style={styles.titulo}>Services Orders List</Text>

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

export default TechnicianListOrderServices;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#add8e6',
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