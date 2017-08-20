import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native'
import moment from 'moment'
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors'


const styles = StyleSheet.create({
  viewContainer: {
    marginHorizontal: 5,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius: 5,
    padding: 10,
  },
  viewUserDetails: {
    marginLeft: 10,
    flex: 1,
  },
  viewJoinedAtContainer: {
    flexDirection: 'row',
    marginTop: 6,
  },
  viewTopTitleAndButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  imageProfile: {
    height: 60,
    width: 60,
    borderRadius: 30,
    resizeMode: 'stretch',
    backgroundColor: '#e8eaf6',
  },

  buttonMessageContainer: {
    flexDirection: 'row',
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#eceff1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 3,
    paddingHorizontal: 8,
  },

  textFirstName: {
    color: '#000000',
    fontSize: 16,
  },
  textTitle: {
    fontSize: 12,
    color: colors.lightGrey,
    marginTop: 3,
  },
  textDescription: {
    marginTop: 3,
  },
  textJoinedAt: {
    fontSize: 12,
    color: colors.lightGrey,
  },
  textMessage: {
    marginLeft: 5,
  },
})

// no prop joinedAt in the json, but ill add it here
const UserCard = ({ first_name, Profile, Description, company = 'Docker', joinedAt = Date.now(), onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.viewContainer}>
    <Image style={styles.imageProfile} source={{uri: Profile}} />
    <View style={styles.viewUserDetails}>
      <View style={styles.viewTopTitleAndButtonContainer}>
        <View>
          <Text style={styles.textFirstName}>{first_name}</Text>
          <Text style={styles.textTitle}>{company}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonMessageContainer}>
            <MaterialCommunityIcons size={14} name="message" color={colors.accentBlue} />
            <Text style={styles.textMessage}>Message</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.textDescription}>{Description}</Text>
      <View style={styles.viewJoinedAtContainer}>
        <Octicons name={'clock'} size={12} color={colors.lightGrey} />
        <Text style={styles.textJoinedAt}>{` Joined ${moment(joinedAt).fromNow(true)}`}</Text>
      </View>
    </View>
  </TouchableOpacity>
)

export default UserCard
