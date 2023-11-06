import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Calendario from "../components/calendario";

const AgendaOs = () => {

    const [value, onChangeText] = React.useState('Descrição do problema');

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Agendamento de Serviço
            </Text>
            
           
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    
                }}>
                <View >
                    <Text style={styles.label}>O.S.</Text>
                    <TextInput
                        style={{
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 1,
                            margin: 10,
                            textAlign: 'center',
                            width: 100,
                            fontSize:18
                        }}
                        defaultValue="00001"

                    />
                </View>
                <View>

                    <Text style={styles.label}>Dispositivo</Text>
                    <TextInput
                        style={{
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 1,
                            margin: 10,
                            textAlign: 'center',
                            width: 200,
                            fontSize:18

                        }}
                        defaultValue="Informe seu dispositivo"

                    />
                </View>


            </View>

            <Text style={styles.label}>Data</Text>
            <Calendario />
         
            <Text style={styles.label}>Descrição do Problema</Text>
            <TextInput
                editable
                multiline={true}
                numberOfLines={5}
                maxLength={400}
                onChangeText={text => onChangeText(text)}
                value={value}
                style={{
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 1,
                    margin: 10,
                    textAlignVertical: 'top',
                    fontSize:18

                }}
            />
            <Button
                title="Salvar"
                onPress={() => console.log('Autorizado')}
                color={'green'}
            />

            <Button
                title="Cancelar"
                onPress={() => console.log('Recusado')}
                color={'red'}
            />


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: '#ecf0f1',
        padding: 8,
        
    },
    titulo:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        margin:10,

    },
    label:{
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 10,        

    },
    
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default AgendaOs