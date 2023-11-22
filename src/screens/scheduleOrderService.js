import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Calendario from "../components/calendario";
import { db, firebaseAuth } from "../external/infra/fireBaseConfig";
import { addDoc, collection } from "firebase/firestore";

const ScheduleOrderService = ({ navigation }) => {

  const [description, setDescription] = useState('');
  const [device, setDevice] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);

  const handlerOrderService = async () => {
    setLoading(true)
    try {

      const userId = firebaseAuth.currentUser.uid;

      await addDoc(collection(db, 'order_service'),
        {
          id: userId,
          device,
          description,
          date,
        });
      alert(`Agendamento feito com sucesso`);
      setDevice('')
      setDescription('')
      setDate('')

    } catch (err) {
      alert(`Não foi possivel realizar um agendamento`);
      console.log(err)
    } finally {

      setLoading(false)
    }

  }

  return (
    <View style={styles.container}>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',

        }}>

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
              fontSize: 18

            }}
            defaultValue="Informe seu dispositivo"
            value={device}
            onChangeText={(text) => setDevice(text)}
          />
        </View>


      </View>

      <Text style={styles.label}>Data</Text>
      <Calendario onDate={setDate} />

      <Text style={styles.label}>Descrição do Problema</Text>
      <TextInput
        editable
        multiline={true}
        numberOfLines={5}
        maxLength={400}
        onChangeText={text => setDescription(text)}
        value={description}
        placeholder="Descrição do Problema"
        style={{
          padding: 10,
          borderColor: 'gray',
          borderWidth: 1,
          margin: 10,
          textAlignVertical: 'top',
          fontSize: 18

        }}

      />
      <Button
        title="Salvar"
        onPress={handlerOrderService}
        color={'green'}
      />

      <Button
        title="Cancelar"
        onPress={navigation.goBack}
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,

  },
  label: {
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

export default ScheduleOrderService;
