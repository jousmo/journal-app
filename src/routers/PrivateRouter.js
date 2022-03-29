import React from 'react'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PrivateRouter = ({ isLoggedIn, children }) => {
  return isLoggedIn
    ? children
    : <Navigate to='/login' />
}

PrivateRouter.propTypes = {
  children: PropTypes.node.isRequired,
  isLoggedIn: PropTypes.bool
}
