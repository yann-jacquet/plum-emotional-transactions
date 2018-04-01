import { connect } from 'react-redux'

import { changeEmotion } from '../../actions/list'
import EmotionalTransactions from '../presentationals/EmotionalTransactions'

const mapStateToProps = state => ({
  list: state.list,
})

const mapDispatchToProps = {
  changeEmotion,
}

export default connect(mapStateToProps, mapDispatchToProps)(EmotionalTransactions)
