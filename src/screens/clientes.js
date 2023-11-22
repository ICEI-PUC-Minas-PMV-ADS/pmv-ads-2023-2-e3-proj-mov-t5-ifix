import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { List, Text, Searchbar } from 'react-native-paper';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../external/infra/fireBaseConfig';


const UserList = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [loading, setLoading] = useState(false);

  async function handlerListClients() {

    try {
      let data = [];
      const q = query(collection(db, "users"));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });

      setUsers(data)
      console.log(users)

    } catch (error) {
      console.error('Erro ao buscar informações do usuário:', error);
    } finally {
      setLoading(false);
    }


  }

  useEffect(() => {
    handlerListClients()
  }, [])



  // const filteredUsers = users.filter((user) =>
  //   user.nome.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const renderItem = ({ item }) => (
    <List.Item
      left={props => <Text{...props} style={{ fontSize: 20, alignSelf: 'center' }}>{item.name}</Text>}
      style={styles.userItem}
      title={''}
      onPress={() => navigation.navigate('Perfil', { user: item })}
    />
  );
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Searchbar

        placeholder="Pesquisar"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  userItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 20,
    fontWeight: 'bold',

  },
});

export default UserList;
