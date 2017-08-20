import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import UsersScreen from './routes/Users'
import UserDetailsScreen from './routes/UserDetails'
import {
  StackNavigator,
} from 'react-navigation';

// StatusBar.setBarStyle('light-content');
StatusBar.setBackgroundColor('#ffffff')
// import {
//   createRouter,
//   NavigationProvider,
//   StackNavigation,
// } from '@expo/ex-navigation';
//
// const Router = createRouter(() => ({
//   home: () => UsersRoute,
//   userDetails: () => UserDetailsRoute
// }));
//
// const app = () => (
//   <NavigationProvider router={Router}>
//   <StackNavigation initialRoute={Router.getRoute('home')} />
// </NavigationProvider>
// )
//
// export default app
const BasicApp = StackNavigator({
  Main: {screen: UsersScreen},
  // Main: {screen: UserDetailsScreen},
  PlayerDetails: {screen: UserDetailsScreen},
}, { headerMode: 'screen' })

// const SimpleApp = StackNavigator({
//   Home: { screen: HomeScreen },
//   LoginView: { screen: LoginView },
// },
// navigationOptions:{ header:{ visible:false }});


export default BasicApp
//
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
//
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <UsersRoute />
//       </View>
//     );
//   }
// }
