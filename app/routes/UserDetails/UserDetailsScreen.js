import React, { Component, PropTypes } from 'react';
import UserDetailsContainer from './UserDetailsContainer'

class UserDetailsScreen extends Component {
  static navigationOptions = { title: '', header: null };

  render() {
    return (
      <UserDetailsContainer navigation={this.props.navigation} />
    );
  }
}

UserDetailsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default UserDetailsScreen
