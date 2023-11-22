import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Input from './inputs';


const Calendario = ({ onDate }) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(moment().format('DD/MM/YYYY'));
  const [date, setDate] = useState(new Date());

  const handleDataSelecionada = (selectedDate) => {
    setShow(false);
    const formattedDate = moment(selectedDate).format('DD/MM/YYYY');
    setData(formattedDate);

    onDate(formattedDate);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setShow(true)}>
        <Input
          value={data}
          left={<TextInput.Icon name="calendar" icon='calendar' />}
          editable={false}
        />
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={(event, selectedDate) => {
            if (event.type === 'set') {
              handleDataSelecionada(selectedDate);
            } else {
              setShow(false);
            }
          }}
        />
      )}
    </View>
  );
};

export default Calendario;
