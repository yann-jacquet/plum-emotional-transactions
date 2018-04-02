import constant from '../constants'
import {
  CHANGE_EMOTION,
} from '../actions/list'

// Since we don't have any API we init manually
const initState = constant.transactions

export default function list(state = initState, action) {
  switch (action.type) {
    case CHANGE_EMOTION:
      return [...state, action.itemId]
    default:
      return state
  }
}
