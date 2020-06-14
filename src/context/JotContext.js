import { AsyncStorage } from 'react-native'

import createDataContext from './createDataContext'

const jotReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_JOT':
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          content: action.payload.content,
          color: action.payload.color,
        },
      ]

    case 'DELETE_JOT':
      return state.filter(obj => obj.id !== action.payload)

    case 'EDIT_JOT':
      return state.map(obj => (obj.id === action.payload.id ? action.payload : obj))

    case 'GET_ALL_JOTS':
      return action.payload

    default:
      return state
  }
}

const getAllJots = dispatch => {
  return async () => {
    try {
      const keys = await AsyncStorage.getAllKeys()
      const values = await AsyncStorage.multiGet(keys)

      let res = values.map(val => JSON.parse(val[1]))

      dispatch({
        type: 'GET_ALL_JOTS',
        payload: res,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

const addJot = dispatch => {
  return async (title, content, color, callback) => {
    const id = Math.floor(Math.random() * 99999)
    const payload = {
      id,
      title,
      content,
      color,
    }
    try {
      await AsyncStorage.setItem(`${id}`, JSON.stringify(payload))
      dispatch({
        type: 'ADD_JOT',
        payload,
      })
      if (callback) callback()
    } catch (error) {
      console.log(error)
    }
  }
}

const deleteJot = dispatch => {
  return async id => {
    try {
      await AsyncStorage.removeItem(`${id}`)
      dispatch({ type: 'DELETE_JOT', payload: id })
    } catch (error) {
      console.log(error)
    }
  }
}

const editJot = dispatch => {
  return async (id, title, content, color, callback) => {
    try {
      let updatedJot = { id, title, content, color }
      await AsyncStorage.setItem(`${id}`, JSON.stringify(updatedJot))

      dispatch({ type: 'EDIT_JOT', payload: { id, title, content, color } })
      if (callback) callback()
    } catch (error) {
      console.log(error)
    }
  }
}

export const { Context, Provider } = createDataContext(
  jotReducer,
  { addJot, deleteJot, editJot, getAllJots },
  []
)
