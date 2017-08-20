// import React, { Component } from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import usersData from '../../data/users_data.json'
//
// const NUM_OF_USERS_EACH_FETCH = 25
//
// class UsersList extends Component {
//   static navigationOptions = { title: '', header: null };
//
//   state = {
//     users: usersData.slice(0, NUM_OF_USERS_EACH_FETCH),
//     didMount: false,
//   }
//
//   _fetchMore = () => {
//     if (this.state.didMount) {
//       const currentUsersLength = this.state.users.length
//       const users = [
//         ...this.state.users,
//         ...usersData.slice(currentUsersLength, currentUsersLength+NUM_OF_USERS_EACH_FETCH)
//       ]
//
//       this.setState({ users })
//     }
//   }
//
//   render() {
//     const { renderUser } = this.props
//
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={this.state.users}
//           renderItem={({item}) => renderUser(item)}
//           onEndReached={this._fetchMore}
//           onEndReachedThreshold={0.8}
//         />
//       </View>
//     );
//   }
// }
//
// export default UsersList
