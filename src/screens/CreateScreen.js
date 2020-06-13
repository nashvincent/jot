import React, { useContext, useState } from 'react'
import { StyleSheet } from 'react-native'

import { Context } from '../context/JotContext'
import JotForm from '../components/JotForm'

export default function CreateScreen({ navigation }) {
  const { addJot } = useContext(Context)

  return (
    <JotForm
      handleSubmit={(title, content) => {
        addJot(title, content, () => navigation.navigate('Home'))
      }}
    />
  )
}
