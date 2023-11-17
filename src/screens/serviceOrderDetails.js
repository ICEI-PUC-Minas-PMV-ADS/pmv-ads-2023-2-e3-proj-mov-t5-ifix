import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ServiceOrderDetails = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes da Ordem de Serviço</Text>
            <Text style={styles.item}>ID: {serviceOrder.id}</Text>
            <Text style={styles.item}>Dispositivo: {serviceOrder.device}</Text>
            <Text style={styles.item}>Descrição: {serviceOrder.description}</Text>
            <Text style={styles.item}>Status: {serviceOrder.status}</Text>
            <Text style={styles.item}>Cliente: {serviceOrder.client}</Text>
            <Text style={styles.item}>Técnico: {serviceOrder.technician}</Text>
            <Text style={styles.item}>Valor Estimado: {serviceOrder.estimatedValue}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    item: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default ServiceOrderDetails;