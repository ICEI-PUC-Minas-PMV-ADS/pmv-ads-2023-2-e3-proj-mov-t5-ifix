import React from 'react';
import { View, StyleSheet } from 'react-native';

import { TextInput } from 'react-native-paper';


const Input = (props) =>{
  return (
   <TextInput
          style={styles.input}
          keyboardType= 'decimal-pad'
         {...props}
        />
  

  ) 
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    textAlign: 'center',
    width: 200,
    fontSize:18,
    backgroundColor: '#ecf0f1',
  },
}
);


export default Input;