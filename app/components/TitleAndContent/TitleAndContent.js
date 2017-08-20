import React, { PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../../config/colors'
import Separator from '../Separator'

const styles = StyleSheet.create({
  viewContainer: {
    padding: 16,
  },

  textTitle: {
    color: colors.lightGrey,
    fontSize: 12,
    marginBottom: 5,
  },
  textContent: {
    color: '#000000',
    fontSize: 14,
  }
})

const TitleAndContent = ({ title, content, blueColoredContent }) => (
  <View>
    <View style={styles.viewContainer}>
      <Text style={styles.textTitle}>{title}</Text>
      <Text style={[styles.textContent, blueColoredContent && {color: colors.accentBlue}]}>{content}</Text>
    </View>
    <Separator />
  </View>
)
TitleAndContent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  blueColoredContent: PropTypes.bool,
}

export default TitleAndContent
