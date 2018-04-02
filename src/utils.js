import moment from 'moment'
import { sortBy } from 'lodash'

export default function sortDate(arrayToSort) {
  return sortBy(arrayToSort.filter(el => moment(el.created).isValid()), (el) => moment(el.created)).reverse()
}
