
import React ,{ useState } from "react"
import { Button, StyleSheet, Text, TextInput, View, Image } from "react-native";
import { firebaseAuth } from "../external/infra/fireBaseConfig";
import { ActivityIndicator } from "react-native";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const auth = firebaseAuth;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response)
    } catch(err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }


  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response)
    } catch(err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image style={styles.image} source={require('../assets/logo.png')} />
      </View>

      <Headline style={styles.textHeader}>Technical Suport for Apple products</Headline>

      <View style={styles.container}>
        <TextInput
        style={styles.input}
        value={email}
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
        left={<TextInput.Icon name="account" />}
        />

        <TextInput
        style={styles.input}
        value={password}
        placeholder="Password"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        left={<TextInput.Icon name="key" />}
        />

        {
        loading  ? <ActivityIndicator size="large" color='#0000ff'/>
        : (
        <>
          <Button title="Logins" onPress={signIn} style={styles.buttonLogin} mode="contained" />
          <Button title="create account" onPress={signUp} style={styles.buttonCreate} mode="contained" />
        </>
        )}
      </View>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin:10,
    justifyContent: 'center'
  },

  header: {
//    alignItems: 'center',
    marginTop: 30,
    marginBottom: 12
  },

   image:{
    width: 128,
    height: 128,
    borderRadius: 30
  },

  textHeader: {
    textAlign: 'center',
  },

  input: {
    marginVertical: 4,
    height:50,
    borderWidth:1,
    borderRadius:4,
    padding:10,
    backgroundColor: '#fff'
  },

  buttonLogin: {
    marginBottom: 8,
    backgroundColor: "#bbb"
  },

  buttonCreate: {
    backgroundColor: 'green',
  },
})
