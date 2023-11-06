import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { TextInput, Button } from 'react-native-paper';
import Input from './input';
import Icon from 'react-native-vector-icons/FontAwesome';


const Calendario = () => {

  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [data, setData] = React.useState(moment(new Date()).format('DD/MM/YYYY'));



  // const onChange = (event, date) => {

  //   setShow(false);
  //   setData(moment(date).format('DD/MM/YYYY'));
  // };
  // const showMode = (currentMode) => {
  //   setShow(true);
  //   setMode(currentMode);
  // };

  // const showDatepicker = () => {
  //   showMode('date');
  // };

  // const showTimepicker = () => {
  //   showMode('time');
  // };


  return (
    <View>


      <TouchableOpacity onPress={() => setShow(true)}>
          <Input
            
            value={data}
            onChangeText={(text) => setData(text)}
            left={<TextInput.Icon name="calendar" icon='calendar'/>}
            editable={false}
          />
        </TouchableOpacity>







      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          onTouchCancel={() => setShow(false)}
          onChange={(event, date) => {
            setShow(false);
            setData(moment(date).format('DD/MM/YYYY'));
          }}
        />
      )}




    </View>
  );
};

export default Calendario;
