import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '../avatar/Avatar'

import styles from './ProfilInfo.css'

const ProfilInfo = ({ user }) => (
  <div className={styles.profilInfo}>
    <Avatar picLink={user.picUrl} />
    <span className={styles.information}>
      <h1>{ `${user.firstname} ${user.lastname}` }</h1>
      <p className="italic">{ user.clientId }</p>
    </span>
  </div>
)

ProfilInfo.propTypes = {
  user: PropTypes.object.isRequired,
}

export default ProfilInfo
