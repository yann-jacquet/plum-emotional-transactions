import { find, without } from 'lodash'

import constant from '../constants'
import {
  CHANGE_EMOTION,
} from '../actions/list'

// Since we don't have any API we init manually
const initState = constant.transactions

export default function list(state = initState, action) {
  switch (action.type) {
    case CHANGE_EMOTION: {
      const transaction = find(state, (el) => el.id === action.transactionId)
      const newState = without(state, transaction)
      return [...newState, { ...transaction, emotion: action.emotion }]
    }
    default:
      return state
  }
}
