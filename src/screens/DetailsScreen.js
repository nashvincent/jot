import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { Context } from '../context/JotContext'

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 30,
  },
  content: {
    fontSize: 22,
  },
})

export default function DetailsScreen({ route, navigation }) {
  const { id } = route.params
  const { state } = useContext(Context)

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id })}>
        <MaterialIcons style={{ marginRight: 10 }} name="edit" size={35} />
      </TouchableOpacity>
    ),
  })

  const currentJot = state.find(obj => obj.id === id)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{currentJot.title}</Text>
      <Text style={styles.content}>{currentJot.content}</Text>
    </View>
  )
}
