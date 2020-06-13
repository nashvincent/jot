import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { Context } from '../context/JotContext'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  jotView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  jotText: {
    fontSize: 20,
  },
  jotIcon: {
    fontSize: 25,
  },
  viewButton: {
    height: 50,
    width: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
})

export default function HomeScreen({ navigation }) {
  const { state, deleteJot } = useContext(Context)

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <MaterialIcons style={{ marginRight: 10 }} name="add-circle" size={35} />
      </TouchableOpacity>
    ),
  })

  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={jot => jot.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', { id: item.id })}
          >
            <View style={styles.jotView}>
              <Text style={styles.jotText}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteJot(item.id)}>
                <MaterialIcons style={styles.jotIcon} name="delete" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
