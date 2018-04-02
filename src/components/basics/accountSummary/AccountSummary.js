import React from 'react'
import PropTypes from 'prop-types'

import ProfilInfo from '../profilInfo/ProfilInfo'

import styles from './AccountSummary.css'

const AccountSummary = ({ user }) => (
  <header className={['row', styles.backgroundShape].join(' ')}>
    <div className="col-sm-8">
      <div className="box">
        <ProfilInfo user={user} />
      </div>
    </div>
    <div className="col-sm-4">
      <div className={['box', styles.balance].join(' ')}>
        <span className={styles.balance}>£&nbsp;{Math.round(user.balance).toFixed(2)}</span>
      </div>
    </div>
  </header>
)

AccountSummary.propTypes = {
  user: PropTypes.object.isRequired,
}

export default AccountSummary
