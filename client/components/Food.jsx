import React from 'react'

import {randomOptions} from '../utilities/food'
// function mealChoice () {
//   const foodArr = []

//   $('input[name=chinese]:checked')
//     .map(function () {
//       foodArr.push($(this).val())
//     })

//   $('input[name=vietnamese]:checked')
//      .map(function () {
//        foodArr.push($(this).val())
//      })

//   $('input[name=pizza]:checked').map(function () {
//     foodArr.push($(this).val())
//   })
//   var rand = foodArr[Math.floor(Math.random() * foodArr.length)]
//   console.log(rand)
//   console.log($('input[name=Pizza]:checked'))
// }

class Food extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: {
        chinese: '',
        vietnamese: '',
        pizza: ''
      }
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleClick (e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({[name]: value})
  }
  handleSubmit (event) {
    console.log(this.state)
    const option = randomOptions(this.state)
    console.log(option)

    event.preventDefault()
  }

  render () {
    return (
      <div className='foodcategories' >
        <div className='foodbox' >
          <form onSubmit={this.handleSubmit} >
            <h4>Chinese<input type='checkbox' name='chinese' value='chinese' onClick={this.handleClick} /> </h4>
            <h4>Vietnamese <input type='checkbox'onClick={this.handleClick} name='vietnamese' /> </h4>
            <h4>Pizza <input type='checkbox'onClick={this.handleClick} name='pizza' /> </h4>
            <button className='btn btn-lg btn-primary btn' type='submit'>Get your meal.</button>
          </form>
        </div>
      </div>

    )
  }
}

export default Food
