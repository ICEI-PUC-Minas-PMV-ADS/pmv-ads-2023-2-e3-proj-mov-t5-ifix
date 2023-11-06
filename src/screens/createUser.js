
import React, { useState } from "react"
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { firebaseAuth, db } from "../external/infra/fireBaseConfig";
import { ActivityIndicator } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Headline, TextInput, Button } from 'react-native-paper';
import { addDoc, collection } from "firebase/firestore";

const CreateUser = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState();
  const [address, setAddress] = useState();

  const auth = firebaseAuth;

  const createUser = async () => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      await addDoc(collection(db, 'users'), { email, name, address })

      alert(`${name} você foi cadastrado com sucesso!`);

      navigation.navigate('Login');

    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }


  return (
    <View style={styles.container}>

      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.image} source={require('../assets/logo.png')} />
        </View>

        <Headline style={styles.textHeader}>Register</Headline>
      </View>

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
        value={address}
        placeholder="Address"
        autoCapitalize="none"
        onChangeText={(text) => setAddress(text)}
        left={<TextInput.Icon name="home-account" color={"#000"} />}
        mode="contained"
      />

      <View style={styles.container}>
        {
          loading ? <ActivityIndicator size="large" color='#0000ff' />
            : (
              <>
                <Button title="Logins" onPress={createUser} style={styles.button} mode="contained">
                  Save
                </Button>
                <Button title="Cancel" onPress={navigation.goBack} style={styles.buttonCancel} mode="contained">
                  CANCEL
                </Button>
              </>
            )}
      </View>
    </View>
  )
}

export default CreateUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
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
    borderRadius: 4,
    backgroundColor: '#fff'
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
