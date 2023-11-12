
import React, { useState } from "react"
import { StyleSheet, Text, View, Image } from "react-native";
import { firebaseAuth } from "../external/infra/fireBaseConfig";
import { ActivityIndicator } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Headline, TextInput, Button } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const auth = firebaseAuth;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response)
      navigation.navigate('Home');
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

        <Headline style={styles.textHeader} >Technical Suport for Apple products</Headline>
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

      <View style={styles.container}>
        {
          loading ? <ActivityIndicator size="large" color='#0000ff' />
            : (
              <>
                <Button title="Logins" onPress={signIn} style={styles.buttonLogin} mode="contained">
                  Login
                </Button>
                <Button title="create account" onPress={() => navigation.navigate('Create account')} style={styles.buttonCreate} mode="contained">
                  Create Account
                </Button>
              </>
            )}
      </View>
    </View>
  )
}

export default Login;

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

  buttonLogin: {
    marginBottom: 10,
    borderRadius: 4,
    backgroundColor: "blue"
  },

  buttonCreate: {
    borderRadius: 4,
    backgroundColor: 'green',
  },
})
