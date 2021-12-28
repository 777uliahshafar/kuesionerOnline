import React from 'react'

function ProfilDesc(props) {
  const { item1, item2, item3, item4, item5, item6, item7 } = props
  return (
    <ul>
      <li>{item1}</li>
      <li>{item2}</li>
      <li>{item3}</li>
      <li>{item4}</li>
      <li>{item5}</li>
      <li>{item6}</li>
      <li>{item7}</li>
    </ul>
  )
}

export default ProfilDesc
