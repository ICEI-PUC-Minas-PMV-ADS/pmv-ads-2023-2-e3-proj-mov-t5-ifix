import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-paper';
import HomeButton from "../components/homeButton";

const Home = ({ navigation }) => {

    return (

        <View style={styles.container}>
             {/* se cliente for verdadeiro irá renderizar esses itens */}
            {/* <View style={styles.itemRow}>
            <HomeButton text='Agendamento' iconName={'calendar'} route={() => navigation.navigate('Agendamento de serviço')}/>
            <HomeButton text='Serviços' iconName={'cogs'} route={() => navigation.navigate('OrderService')}/>

            </View>
            <View style={styles.itemRow}>
            <HomeButton text='Perfil' iconName={'account'} route={() => navigation.navigate('Create account')}/>
            <HomeButton text='Sair' iconName={'exit-run'} route={() => navigation.navigate('Login')}/>

            </View> */}

            {/* se cliente for falso irá renderizar esses itens */}
            <View style={styles.itemRow}>
            <HomeButton cor='blue' text='Agenda' iconName={'calendar'} route={() => navigation.navigate('Agendamento de serviço')}/>
            <HomeButton cor='blue'text='O.S.' iconName={'cogs'} route={() => navigation.navigate('OrderService')}/>

            </View>
            <View style={styles.itemRow}>
            <HomeButton cor='blue' text='Clientes' iconName={'account'} route={() => navigation.navigate('Create account')}/>
            <HomeButton cor='blue' text='Sair' iconName={'exit-run'} route={() => navigation.navigate('Login')}/>

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

export default Home;




