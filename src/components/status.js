import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'Opção 1',
    };
  }

  render() {
    return (
      <View>

        <Picker
            style={styles.picker}
          selectedValue={this.state.selectedOption}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ selectedOption: itemValue })
          }
        >
          <Picker.Item style={styles.pickerItem} label="Aguardando decisão do cliente " value="Opção 1" />
          <Picker.Item style={styles.pickerItem} label="Serviço autorizado" value="Opção 2" />
          <Picker.Item style={styles.pickerItem} label="Serviço recusado " value="Opção 3" />
          <Picker.Item style={styles.pickerItem}  label="Serviço iniciado" value="Opção 4" />
          <Picker.Item style={styles.pickerItem}  label="Serviço finalizado" value="Opção 5" />
        </Picker>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    picker:{
        height: 50,
        width: "100%",
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10


    },
    pickerItem:{
        textAlign: 'center',
        fontSize: 20
    }
})

export default Status;