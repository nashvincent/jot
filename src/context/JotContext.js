import createDataContext from './createDataContext'

const jotReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_JOT':
      const id = Math.floor(Math.random() * 99999)
      return [
        ...state,
        { id, title: action.payload.title, content: action.payload.content },
      ]

    case 'DELETE_JOT':
      return state.filter(obj => obj.id !== action.payload)

    case 'EDIT_JOT':
      return state.map(obj => (obj.id === action.payload.id ? action.payload : obj))

    default:
      return state
  }
}

const addJot = dispatch => {
  return (title, content, callback) => {
    dispatch({
      type: 'ADD_JOT',
      payload: {
        title,
        content,
      },
    })
    if (callback) callback()
  }
}

const deleteJot = dispatch => {
  return id => {
    dispatch({ type: 'DELETE_JOT', payload: id })
  }
}

const editJot = dispatch => {
  return (id, title, content, callback) => {
    dispatch({ type: 'EDIT_JOT', payload: { id, title, content } })
    if (callback) callback()
  }
}

export const { Context, Provider } = createDataContext(
  jotReducer,
  { addJot, deleteJot, editJot },
  [{ id: 1, title: 'Test', content: 'test post' }]
)
