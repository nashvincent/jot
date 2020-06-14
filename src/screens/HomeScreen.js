import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { Context } from '../context/JotContext'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  const { state, deleteJot, getAllJots } = useContext(Context)
  useEffect(() => {
    getAllJots()
  }, [])

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
            <View
              style={{
                backgroundColor: item.color,
                width: '96%',
                borderRadius: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 25,
                paddingHorizontal: 10,
                borderColor: 'gray',
                marginVertical: 6,
                marginHorizontal: 8,
                elevation: 5,
                shadowColor: 'black',
                shadowOpacity: 0.26,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 10,
              }}
            >
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
