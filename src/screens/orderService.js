import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Status from "../components/status";

const OrderService = () => {

    const [value, onChangeText] = React.useState('Descrição do serviço a ser executado');

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Orçamento de Serviço
            </Text>
            <Text style={styles.label}>Status</Text>
            <Status />
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
                        defaultValue="Macbook Pro 2015"

                    />
                </View>


            </View>

            <Text style={styles.label}>Valor do reparo</Text>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    margin: 10,
                    textAlign: 'center',
                    fontSize: 18
                }}
                defaultValue="R$ 1.500,00"

            />
            <Text style={styles.label}>Descrição do Serviço</Text>
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
                title="Autorizar"
                onPress={() => console.log('Autorizado')}
                color={'green'}
            />

            <Button
                title="Recusar"
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

export default OrderService;