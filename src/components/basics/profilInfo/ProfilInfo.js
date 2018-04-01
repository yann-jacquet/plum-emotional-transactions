import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '../avatar/Avatar'

import styles from './ProfilInfo.css'

const ProfilInfo = ({ picLink, user }) => (
  <div className={styles.profilInfo}>
    <Avatar picLink={picLink} />
    <span className={styles.information}>
      <h1>{ `${user.firstname} ${user.lastname}` }</h1>
      <p className="italic">{ user.clientId }</p>
    </span>
  </div>
)

ProfilInfo.propTypes = {
  picLink: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
}

export default ProfilInfo
