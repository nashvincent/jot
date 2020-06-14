import React from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'

// const colorList = [
//   'white',
//   'red',
//   'limegreen',
//   'gold',
//   'aquamarine',
//   'lightseagreen',
//   'plum',
// ]

const colorList = [
  'white',
  'cornflowerblue',
  'palegreen',
  'crimson',
  'khaki',
  'lightcoral',
  'orchid',
  'rosybrown',
]

export default function ColorPicker({ color, handleChangeColor }) {
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={colorList}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleChangeColor(item)}>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                borderWidth: item === color ? 1 : 0.1,
                backgroundColor: item,
                margin: 15,
              }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
