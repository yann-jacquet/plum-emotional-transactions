import {
  CHANGE_EMOTION,
} from '../actions/list'

export default function cart(state = [], action) {
  switch (action.type) {
    case CHANGE_EMOTION:
      return [...state, action.itemId]
    default:
      return state
  }
}
