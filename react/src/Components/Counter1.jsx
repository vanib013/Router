import { createStore } from 'redux'

function counter(state = 0, action) {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREAMENT':
      return state - 1
    default:
      return state
  }
}

let store = createStore(counter)

store.subscribe(() =>
  console.log(store.getState())
)
