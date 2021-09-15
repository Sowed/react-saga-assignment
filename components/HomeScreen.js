import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getUsers} from '../actions/userActions';
import UserList from './UserList';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.props.getUsers();
  }

  render() {
    const users = this.props.users;
    return (
      <View>
        {!!users.users && !!users.users.length ? (
          <UserList users={users.users} navigation={this.props.navigation} />
        ) : (
          <View style={styles.container}>
            <Text>No Users</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#fff',
  },
});

HomeScreen.propTypes = {
  users: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired,
};

const mapStateToProp = state => ({
  users: state.users,
});

export default connect(mapStateToProp, {
  getUsers,
})(HomeScreen);
