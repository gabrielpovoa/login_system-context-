import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/Auth/AuthContext'

export const Private = () => {
  const auth = useContext(AuthContext)
  return (
    <div>
      <h2>PRIVATE PAGE</h2>
      <hr/>
      <p>Ola, {auth.user?.name}</p>
    </div>
  )
}

// SNIPPET ARROW FUNCTION: RAFC