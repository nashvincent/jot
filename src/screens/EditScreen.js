import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'

import { Context } from '../context/JotContext'
import JotForm from '../components/JotForm'

const styles = StyleSheet.create({
  formView: {
    marginVertical: 20,
    marginHorizontal: 10,
    flex: 1,
  },
  formText: {
    fontSize: 20,
    marginBottom: 5,
  },
  formInput: {
    fontSize: 18,
    borderWidth: 0.5,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
})

export default function CreateScreen({ route, navigation }) {
  const { id } = route.params
  const { state, editJot } = useContext(Context)

  const curJot = state.find(obj => obj.id === id)

  return (
    <JotForm
      handleSubmit={(title, content) =>
        editJot(id, title, content, () => navigation.pop())
      }
      initialState={{ title: curJot.title, content: curJot.content }}
    />
  )
}
