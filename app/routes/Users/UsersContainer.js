import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import Expo from 'expo'
import UserCard from '../../components/UserCard'
import usersData from '../../data/users_data.json'

const NUM_OF_USERS_EACH_FETCH = 25

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Expo.Constants.statusBarHeight,
    backgroundColor: 'white',
  },
});

class UsersContainer extends Component {
  static navigationOptions = { title: '', header: null };

  state = {
    users: usersData.slice(0, NUM_OF_USERS_EACH_FETCH),
    refreshing: false,
    fetchingMore: true,
  }

  _fetchMore = () => {
    const currentUsersLength = this.state.users.length

    if (currentUsersLength < usersData.length) {
      this.setState({ fetchingMore: true })
      const users = [
        ...this.state.users,
        ...usersData.slice(currentUsersLength, currentUsersLength+NUM_OF_USERS_EACH_FETCH)
      ]

      this.setState({ users, fetchingMore: false })

    }

  }

  _onCardPressed = (playerData) => {
    const { navigate } = this.props.navigation;

    navigate('PlayerDetails', playerData)
  }

  // do some refershing, if it's possible to call this thing a refresh
  _onRefresh = () => {
    this.setState({ refreshing: true })
    this.setState({ users: usersData.slice(0, NUM_OF_USERS_EACH_FETCH) }, () => {
      this.setState({ refreshing: false })
    })
  }

  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh}
          data={this.state.users}
          renderItem={({item}) =>
            <UserCard {...item} onPress={() => this._onCardPressed(item)} />
          }
          keyExtractor={this._keyExtractor}
          onEndReached={this._fetchMore}
          ListFooterComponent={() => {
            if (this.state.fetchingMore)
              return (
                <ActivityIndicator />
              )
            return null
          }}
        />
      </View>
    );
  }
}

export default UsersContainer
