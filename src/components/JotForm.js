import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

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

export default function JotForm({ handleSubmit, initialState }) {
  const [title, setTitle] = useState(initialState.title)
  const [content, setContent] = useState(initialState.content)

  return (
    <View style={styles.formView}>
      <Text style={styles.formText}>Title</Text>
      <TextInput
        style={styles.formInput}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.formText}>Content</Text>
      <TextInput
        style={styles.formInput}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <View style={{ marginTop: 20 }}>
        <Button title="Save" onPress={() => handleSubmit(title, content)} />
      </View>
    </View>
  )
}

JotForm.defaultProps = {
  initialState: {
    title: '',
    content: '',
  },
}
