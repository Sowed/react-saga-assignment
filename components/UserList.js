import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import Moment from 'moment';

const Item = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <ListItem bottomDivider>
      <Avatar source={{uri: item.picture.thumbnail}} />
      <ListItem.Content>
        <ListItem.Title>
          {item.name.first} {item.name.last}
        </ListItem.Title>
        <ListItem.Subtitle>
          <Text style={styles.subtitle}>{item.email}</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
      <Text style={styles.subtitle}>
        {Moment(item.registered.date).format('lll')}
      </Text>
      <ListItem.Chevron />
    </ListItem>
  </TouchableOpacity>
);

const UserList = ({users, navigation}) => {
  const renderItem = ({item}) => (
    <Item
      item={item}
      onPress={() =>
        navigation.navigate('User Details', {
          user: item,
        })
      }
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.cell}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  subtitle: {
    fontSize: 12,
    color: 'grey',
  },
});

export default UserList;
