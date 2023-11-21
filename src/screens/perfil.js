import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text } from 'react-native-paper';
import { firebaseAuth, db } from "../external/infra/fireBaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";


const Perfil = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const fetchUserDetails = async () => {
          try {
            const userId = firebaseAuth.currentUser.uid;
            let data;
            const q = query(collection(db, "users"), where("id", "==", userId));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              // Armazena os detalhes do usuário no estado
              data = doc.data()
            });

            setUserDetails(data)
            console.log(userDetails)
          } catch (error) {
            console.error('Erro ao buscar informações do usuário:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchUserDetails();
  }, []);

   
    
        return (

            <View style={styles.container}>
                <ScrollView style={styles.scroll}>

                <Text style={styles.text} >{userDetails.name}</Text>
                <Text style={styles.text} >{userDetails.email}</Text>
                <Text style={styles.text} >{userDetails.city}</Text>
                <Text style={styles.text} >{userDetails.uf}</Text>
                <Text style={styles.text} >{userDetails.address}</Text>
                <Text style={styles.text} >{userDetails.neighborhood}</Text>
                <Text style={styles.text} >{userDetails.addressNumber}</Text>


                </ScrollView>
                
            </View>
        )
}

export default Perfil;

const styles = StyleSheet.create({
    scroll: {
      height: '37%',
    },
    container: {
      flex: 1,
      margin: 8,
      padding: 11,
      justifyContent: 'center'
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        fontSize: 20,
        fontWeight: 'bold',

    },
    

})
  