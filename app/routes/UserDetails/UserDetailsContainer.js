import React from 'react'
import Expo from 'expo'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import userData from './../../data/users_data.json'
import colors from '../../config/colors'
import TitleAndContent from '../../components/TitleAndContent'

const INNER_IMAGE_SIZE = 50
const styles = StyleSheet.create({
  viewContainer: {
    marginTop: Expo.Constants.statusBarHeight,
    flex: 1,
    backgroundColor: 'white',
  },
  imageProfile: {
    flex: 2,
    width: null,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageInner: {
    height: INNER_IMAGE_SIZE,
    width: INNER_IMAGE_SIZE,
    borderRadius: INNER_IMAGE_SIZE/2,
  },

  textFirstName: {
    color: '#ffffff',
    fontSize: 14,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  textInsideButton: {
    color: '#ffffff',
    fontSize: 14,
    marginLeft: 5,
  },

  buttonChatWith: {
    marginTop: 20,
    alignItems: 'center',
    width: '80%',
    justifyContent: 'center',
    paddingVertical: 3,
    borderRadius: 20,
    backgroundColor: colors.accentBlue,
    flexDirection: 'row',
  },
  buttonBackContainer: {
    position: 'absolute',
    top: 20,
    left: 10,
    backgroundColor: 'transparent',
  }
})

class UserDetailsContainer extends React.Component {
  render() {
    const { Profile, first_name = 'First_Name', last_name = 'Last_Name', linkedin = 'https://www.linkedin.com/in/matan-pearl-834150126' } = this.props.navigation.state.params || {}
    const { goBack = () => {} } = this.props.navigation || {}
    return (
      <View style={styles.viewContainer}>
        <Image
          blurRadius={5}
          style={styles.imageProfile}
          source={{uri: Profile}}
        >
          <TouchableOpacity style={styles.buttonBackContainer} onPress={() => goBack()}>
            <Ionicons name={'md-arrow-back'} size={24} color={colors.lightGrey} />
          </TouchableOpacity>
          <View>
            <Image
              style={styles.imageInner}
              source={{uri: Profile}}
            />
            <Text style={styles.textFirstName}>{first_name}</Text>
          </View>

          <TouchableOpacity style={styles.buttonChatWith}>
            <Ionicons name={'ios-text-outline'} color={'#ffffff'} size={30} />
            <Text style={styles.textInsideButton}>{`Chat with ${first_name}`}</Text>
          </TouchableOpacity>
        </Image>
        <View style={{flex: 3}}>
          <ScrollView>
            <TitleAndContent title={'Email'} content={'akka@gmail.com'} blueColoredContent />
            <TitleAndContent title={'First Name'} content={first_name} />
            <TitleAndContent title={'Last Name'} content={last_name} />
            <TitleAndContent title={'Linkedin'} content={linkedin}  blueColoredContent/>
          </ScrollView>
        </View>
      </View>
    )
  }
}

export default UserDetailsContainer
