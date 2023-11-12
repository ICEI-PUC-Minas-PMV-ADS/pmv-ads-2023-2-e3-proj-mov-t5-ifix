import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-paper';
import HomeButton from "../components/homeButton";

const HomeClient = ({ navigation }) => {

    return (

        <View style={styles.container}>
            <View style={styles.itemRow}>
            <HomeButton text='Agendamento' iconName={'calendar'} route={() => navigation.navigate('Agendamento de serviço')}/>
            <HomeButton text='Serviços' iconName={'cogs'} route={() => navigation.navigate('OrderService')}/>

            </View>
            <View style={styles.itemRow}>
            <HomeButton text='Perfil' iconName={'account'} route={() => navigation.navigate('Agendamento de serviço')}/>
            <HomeButton text='Sair' iconName={'exit-run'} route={() => navigation.navigate('Login')}/>

            </View>
            
            
            
            
           

        </View>


    )




}


const styles = StyleSheet.create({
    container: {
        flex: 1,        
        justifyContent: 'Center',
        alignItems: 'center',
        marginTop: '50%',
        marginBottom: '50%',

        
        
    },
    itemRow:{
        
        flexDirection: 'row',
        alignItems: 'center',

        
        

    }





});

export default HomeClient;




