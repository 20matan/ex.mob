import React from 'react'
import { View, Dimensions } from 'react-native'
import colors from '../../config/colors'

const { width } = Dimensions.get('window')

const Separator = ({ margin = 10, color = colors.separatorColor }) => (
  <View style={{height: 1, width: (width - (margin*2)), backgroundColor: color, alignSelf: 'center'}} />
)

export default Separator
