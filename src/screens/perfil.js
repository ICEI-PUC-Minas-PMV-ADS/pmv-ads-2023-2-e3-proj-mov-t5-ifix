import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text } from 'react-native-paper';



const Perfil = ({ navigation }) => {

   
    
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroll}>

                <Text style={styles.text} >Nome</Text>
                <Text style={styles.text} >Email</Text>
                <Text style={styles.text} >Logradouro</Text>
                <Text style={styles.text} >Bairro</Text>
                <Text style={styles.text} >Cidade</Text>
                <Text style={styles.text} >UF</Text>
                <Text style={styles.text} >Cep</Text>


                </ScrollView>
                
            </View>
        )
}

export default Perfil;

const styles = StyleSheet.create({
    scroll: {
      height: '37%',
    },
    container: {
      flex: 1,
      margin: 8,
      padding: 11,
      justifyContent: 'center'
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        fontSize: 20,
        fontWeight: 'bold',

    },
    

})
  