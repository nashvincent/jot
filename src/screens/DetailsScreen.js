import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { Context } from '../context/JotContext'

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 6,
    justifyContent: 'center',
  },
  box: {
    height: '60%',
  },
  title: {
    marginVertical: 10,
    fontSize: 30,
    marginHorizontal: 8,
  },
  content: {
    fontSize: 22,
    marginVertical: 10,
    marginHorizontal: 8,
  },
})

export default function DetailsScreen({ route, navigation }) {
  const { id } = route.params
  const { state } = useContext(Context)

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id })}>
        <MaterialIcons style={{ marginRight: 10 }} name="edit" size={30} />
      </TouchableOpacity>
    ),
  })

  const currentJot = state.find(obj => obj.id === id)

  return (
    <View style={styles.container}>
      <View
        style={{ height: '50%', backgroundColor: currentJot.color, borderRadius: 20 }}
      >
        <Text style={styles.title}>{currentJot.title}</Text>
        <Text style={styles.content}>{currentJot.content}</Text>
      </View>
    </View>
  )
}
