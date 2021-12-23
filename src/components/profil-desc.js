import React from 'react'

function ProfilDesc(props) {
  const { item1, item2, item3 } = props
  return (
    <ul>
      <li>{item1}</li>
      <li>{item2}</li>
      <li>{item3}</li>
    </ul>
  )
}

export default ProfilDesc
