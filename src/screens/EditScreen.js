import React, { useContext } from 'react'

import { Context } from '../context/JotContext'
import JotForm from '../components/JotForm'

export default function CreateScreen({ route, navigation }) {
  const { id } = route.params
  const { state, editJot } = useContext(Context)

  const curJot = state.find(obj => obj.id === id)

  return (
    <JotForm
      handleSubmit={(title, content, color) =>
        editJot(id, title, content, color, () => navigation.pop())
      }
      initialState={{ title: curJot.title, content: curJot.content, color: curJot.color }}
    />
  )
}
