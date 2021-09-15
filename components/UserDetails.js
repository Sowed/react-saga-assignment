import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {Card} from 'react-native-elements';
import Moment from 'moment';

const UserDetails = ({navigation, route}) => {
  const user = route.params.user;
  navigation.setOptions({
    title: `${user.name.first} ${user.name.last}`,
  });
  return (
    <View style={styles.container}>
      <View style={styles.section_one}>
        <Image
          style={styles.logo}
          source={{
            uri: user.picture.large,
          }}
        />
      </View>
      <View style={styles.section_two}>
        <Text style={styles.section_details_text}>Email: {user.email}</Text>
        <Text style={styles.section_details_text}>
          Date Joined: {Moment(user.registered.date).format('lll')}
        </Text>
        <Text style={styles.section_details_text}>
          DOB: {Moment(user.dob.date).format('Do MMM YYYY')}
        </Text>
      </View>
      <Card.Divider />
      <View style={styles.section_two}>
        <Text style={styles.section_title}>Location</Text>
        <Text>--------------------------------------</Text>
        <Text>City: {`"${user.location.city}"`}</Text>
        <Text>State: {`"${user.location.state}"`}</Text>
        <Text>Country: {`"${user.location.country}"`}</Text>
        <Text>Postcode: {`"${user.location.postcode}"`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    backgroundColor: '#fff',
  },
  section_one: {
    flex: 0.3,
    padding: 10,
  },
  section_two: {
    flex: 0.1,
    padding: 10,
  },
  section_three: {
    flex: 0.5,
    padding: 10,
  },
  section_title: {
    fontSize: 18,
    paddingBottom: 10,
  },
  section_details_text: {
    fontSize: 15,
    padding: 2,
  },
  logo: {
    padding: 10,
    width: 200,
    height: 200,
  },
});

export default UserDetails;
