import React from 'react'
import PropTypes from 'prop-types'

import AccountSummary from '../basics/accountSummary/AccountSummary'
import TransactionList from '../basics/transactionList/TransactionList'


const EmotionalTransactions = ({ changeEmotion, list }) => (
  <div className="row center-sm">
    <div className="col-sm-10 col-md-8 col-lg-6">
      <div className="box">
        <AccountSummary user={{
          firstname: 'Earl', lastname: 'E.Bird', clientId: 58394059321, picUrl: 'img/avatar.jpg', balance: 3400.00,
        }}
        />
        <TransactionList
          transactions={[]}
          onEmotionChange={(transactionId, changedEmotion) => changeEmotion(transactionId, changedEmotion)}
        />
      </div>
    </div>
  </div>
)

EmotionalTransactions.propTypes = {
  changeEmotion: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
}

export default EmotionalTransactions
