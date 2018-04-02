import { connect } from 'react-redux'

import constants from '../../constants'
import { changeEmotion } from '../../actions/list'
import EmotionalTransactions from '../presentationals/EmotionalTransactions'

const mapStateToProps = state => ({
  list: state.list,
  user: constants.user,
})

const mapDispatchToProps = {
  changeEmotion,
}

export default connect(mapStateToProps, mapDispatchToProps)(EmotionalTransactions)
