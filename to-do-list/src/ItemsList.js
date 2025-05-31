import React from 'react'
import LineItem from './LineItem'
const ItemsList = ({items,handleCheck,handledelete}) => {
  return (
    <ul>
        {items.map((item)=>(
            <LineItem
            item={item}
            key={item.id}
            handleCheck={handleCheck}
            handledelete={handledelete}
            />
        ))}
      </ul>
  )
}

export default ItemsList