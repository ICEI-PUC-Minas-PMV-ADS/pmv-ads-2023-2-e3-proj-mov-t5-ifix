
import React, { useState } from "react"
import { StyleSheet, Text, View, Image, Alert, ScrollView } from "react-native";
import { firebaseAuth, db } from "../external/infra/fireBaseConfig";
import { ActivityIndicator } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Headline, TextInput, Button } from 'react-native-paper';
import { addDoc, collection } from "firebase/firestore";
import axios from "axios";

const CreateUser = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState();
  const [cep, setCep] = useState();
  const [address, setAddress] = useState();
  const [neighborhood, setneighborhood] = useState();
  const [city, setCity] = useState();
  const [uf, setUf] = useState();
  const [addressNumber, setAddressNumber] = useState();

  const auth = firebaseAuth;

  const createUser = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await addDoc(collection(db, 'users'), 
      { 
        email, 
        name, 
        address, 
        neighborhood, 
        city, 
        uf, 
        addressNumber 
      });
      alert(`${name} você foi cadastrado com sucesso!`);

      navigation.navigate('Login');

    } catch (err) {
      alert(`Não foi possivel efetuar o cadastro`);
      console.log(err)
    } finally {
      setLoading(false)
    }
  }


  const checkCep = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;
      console.log(data)

      setAddress(data.logradouro || ''); 
      setneighborhood(data.bairro || ''); 
      setCity(data.localidade || ''); 
      setUf(data.uf || ''); 

    } catch (error) {
      console.error('Erro ao consultar o CEP:', error);
    }

  }


  return (
    <View style={styles.container}>

      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.image} source={require('../assets/logo.png')} />
        </View>
      </View>
    <ScrollView style={styles.scroll}>
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
        left={<TextInput.Icon name="account" color={"#000"} />}
        keyboardType='email-address'
        mode="contained"
      />

      <TextInput
        style={styles.input}
        value={password}
        placeholder="Password"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        left={<TextInput.Icon name="key" color={"#000"} />}
        mode="contained"
      />

      <TextInput
        style={styles.input}
        value={name}
        placeholder="Name"
        autoCapitalize="sentences"
        onChangeText={(text) => setName(text)}
        left={<TextInput.Icon name="account" color={"#000"} />}
        mode="contained"
      />

      <TextInput
        style={styles.input}
        value={cep}
        placeholder="Cep"
        autoCapitalize="none"
        onChangeText={(text) => setCep(text)}
        onBlur={checkCep}
        left={<TextInput.Icon name="home-account" color={"#000"} />}
        mode="contained"
      />
      <TextInput
        style={styles.input}
        value={address}
        placeholder="Address"
        autoCapitalize="none"
        onChangeText={(text) => setAddress(text)}
        left={<TextInput.Icon name="home-account" color={"#000"} />}
        mode="contained"
      />
      <TextInput
        style={styles.input}
        value={uf}
        placeholder="uf"
        autoCapitalize="none"
        onChangeText={(text) => setUf(text)}
        left={<TextInput.Icon name="home-account" color={"#000"} />}
        mode="contained"
      />
      <TextInput
        style={styles.input}
        value={city}
        placeholder="city"
        autoCapitalize="none"
        onChangeText={(text) => setCity(text)}
        left={<TextInput.Icon name="home-account" color={"#000"} />}
        mode="contained"
      />
        <TextInput
        style={styles.input}
        value={neighborhood}
        placeholder="neighborhood"
        autoCapitalize="none"
        onChangeText={(text) => setNeighborhood(text)}
        left={<TextInput.Icon name="home-account" color={"#000"} />}
        mode="contained"
      />
      <TextInput
        style={styles.input}
        value={addressNumber}
        placeholder="addressNumber"
        autoCapitalize="none"
        onChangeText={(text) => setAddressNumber(text)}
        left={<TextInput.Icon name="home-account" color={"#000"} />}
        mode="contained"
      />
    </ScrollView>
      <View style={styles.container}>
        {
          loading ? <ActivityIndicator size="large" color='#0000ff' />
            : (
              <>
                <Button title="Logins" onPress={createUser} style={styles.button} mode="contained">
                  Save
                </Button>
                <Button title="Cancel" onPress={navigation.goBack} style={styles.buttonCancel} mode="contained">
                  Cancel
                </Button>
              </>
            )}
      </View>
      
    </View>
    
  )
}

export default CreateUser;

const styles = StyleSheet.create({
  scroll: {
    height: '37%',
  },
  container: {
    flex: 3,
    margin: 8,
    padding: 11,
    justifyContent: 'center'
  },

  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 12
  },

  image: {
    width: 128,
    height: 128,
    borderRadius: 30
  },

  textHeader: {
    textAlign: 'center'
  },

  input: {
    marginVertical: 4,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
    flex: 1,
  },

  button: {
    marginBottom: 10,
    borderRadius: 4,
    backgroundColor: "blue"
  },

  buttonCancel: {
    borderRadius: 4,
    backgroundColor: 'red',
  },
})
