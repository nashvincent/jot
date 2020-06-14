import React, { useContext } from 'react'

import { Context } from '../context/JotContext'
import JotForm from '../components/JotForm'

export default function CreateScreen({ navigation }) {
  const { addJot } = useContext(Context)

  return (
    <JotForm
      handleSubmit={(title, content, color) => {
        addJot(title, content, color, () => navigation.navigate('Home'))
      }}
    />
  )
}
