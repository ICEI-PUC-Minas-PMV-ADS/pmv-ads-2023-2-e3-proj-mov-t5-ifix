import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-paper';


const HomeButton = ({text, iconName, route}) => {

    return (




        <TouchableOpacity style={styles.touchableOpacity} onPress={route}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{text}</Text>
                <Icon
                    source={iconName}
                    color={'#fff'}

                    size={60}
                />



            </View>

        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    touchableOpacity: {
        alignItems: 'center',
        margin: 8,
    },
    buttonContainer: {
        width: 150,
        height: 150,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,

    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
        fontSize:18,

    },


})

export default HomeButton;