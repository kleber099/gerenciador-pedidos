import React from 'react'

const Cabecalho = (props) => (
    <thead>
      <tr>
      {props.columns.map((column) =>
        <th ><h5>{column}</h5></th>
      )}
      </tr>
   </thead>
)

export default Cabecalho;