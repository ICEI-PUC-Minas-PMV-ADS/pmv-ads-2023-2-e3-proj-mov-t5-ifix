import React, { useState, useEffect } from 'react';
import { View, FlatList,  StyleSheet } from 'react-native';
import firebase from 'firebase/app';
import {List , Text, TextInput, Searchbar} from 'react-native-paper';

const user = 
[
    {
        id: 1,
        nome: 'João'
        
    },
    {
        id:2,
        nome: 'Maria'

    },
    {
        id:3,
        nome: 'José'
    }
]

const UserList = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

 

  

  
  const filteredUsers = users.filter((user) =>
    user.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <List.Item
    left={props => <Text{...props} style={{fontSize:20, alignSelf:'center'}}>{item.nome}</Text>}
      style={styles.userItem}
      title={''}
      onPress={() => navigation.navigate('Perfil', {user: item})}
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
        data={user}
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
