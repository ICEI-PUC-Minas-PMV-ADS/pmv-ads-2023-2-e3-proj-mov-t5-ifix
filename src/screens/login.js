
import React ,{ useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
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

      <TextInput 
      style={styles.input} 
      value={email}
      placeholder="Email" 
      autoCapitalize="none"
      onChangeText={(text) => setEmail(text)}
      />

      <TextInput 
      style={styles.input} 
      value={password}
      placeholder="Password" 
      autoCapitalize="none"
      secureTextEntry={true}
      onChangeText={(text) => setPassword(text)}
      />

      {
      loading  ? <ActivityIndicator size="large" color='#0000ff'/>
      : (
      <>
        <Button title="Logins" onPress={signIn}/>
        <Button title="create account" onPress={signUp}/>
      </>
      )}
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  container: {
    marginHorizontal:20,
    flex:1,
    justifyContent: 'center'
  },
  input: {
    marginVertical: 4,
    height:50,
    borderWidth:1,
    borderRadius:4,
    padding:10,
    backgroundColor: '#fff'
  }
})