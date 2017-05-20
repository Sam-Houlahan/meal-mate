import React from 'react'

const Food = () => {
  const foodArr = ['Pizza', 'Vietnamese', 'Thai', 'Chinese']
  var rand = foodArr[Math.floor(Math.random() * foodArr.length)]
  console.log(rand)

  return (
    <div className='foodcategories' />
  )
}

export default Food
