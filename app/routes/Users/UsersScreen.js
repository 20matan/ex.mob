import React, { Component, PropTypes } from 'react';
import UsersContainer from './UsersContainer'

class UsersScreen extends Component {
  static navigationOptions = { title: '', header: null };

  render() {
    return (
      <UsersContainer navigation={this.props.navigation} />
    );
  }
}
UsersScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default UsersScreen
