import React, { useEffect, useState } from "react";
import { StyleSheet, View, } from "react-native";
import HomeButton from "../components/homeButton";
import { firebaseAuth, db } from "../external/infra/fireBaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const Home = ({ navigation }) => {
  const auth = firebaseAuth;
  const [userAdmin, setUserAdmin] = useState(false);
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

        setUserAdmin(data.admin)
        console.log(userAdmin)
      } catch (error) {
        console.error('Erro ao buscar informações do usuário:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();

      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (

    <View style={styles.container}>
      {userAdmin ? (
        <>
          <View style={styles.itemRow}>
            <HomeButton cor='blue' text='Agenda' iconName={'calendar'} route={() => navigation.navigate('Agendamento de serviço')} />
            <HomeButton cor='blue' text='O.S.' iconName={'cogs'} route={() => navigation.navigate('OrderService')} />
          </View>

          <View style={styles.itemRow}>
            <HomeButton cor='blue' text='Clientes' iconName={'account'} route={() => navigation.navigate('Clientes')} />
            <HomeButton cor='blue' text='Sair' iconName={'exit-run'} route={handleLogout} />
          </View>
        </>
      ) :
        <>
          <View style={styles.itemRow}>
            <HomeButton cor='blue' text='Agendamento' iconName={'calendar'} route={() => navigation.navigate('Agendamento de serviço')} />
            <HomeButton cor='blue' text='Order Service List' iconName={'clipboard-list'} route={() => navigation.navigate('ListOrderServices')} />
          </View>

          <View style={styles.itemRow}>
            <HomeButton cor='blue' text='Perfil' iconName={'account'} route={() => navigation.navigate('Perfil')} />
            <HomeButton cor='blue' text='Sair' iconName={'exit-run'} route={handleLogout} />
          </View>
        </>

      }
    </View>


  )




}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'Center',
    alignItems: 'center',
    marginTop: '50%',
    marginBottom: '50%',



  },
  itemRow: {

    flexDirection: 'row',
    alignItems: 'center',




  }





});

export default Home;




