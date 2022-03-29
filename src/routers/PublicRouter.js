import React from 'react'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PublicRouter = ({ isLoggedIn, children }) => {
  return isLoggedIn
    ? <Navigate to='/' />
    : children
}

PublicRouter.propTypes = {
  children: PropTypes.node.isRequired,
  isLoggedIn: PropTypes.bool
}
