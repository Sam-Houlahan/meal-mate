import React from 'react'

const Food = () => {

const foodArr = ['Pizza','Vietnamese','Thai','Chinese']
var rand = foodArr[Math.floor(Math.random() * foodArr.length)];
console.log(rand)

    return (
        <div className ="foodcategories">
        <div><h2>Pizza</h2></div>
        <div> <h2>Chinese</h2> </div>
        <div><h2>Vietnamese</h2></div>
        <div><h2>Thai</h2></div>
        </div>
    )

}

export default Food
