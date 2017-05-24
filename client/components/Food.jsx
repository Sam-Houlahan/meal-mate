import React from 'react'

import {randomOptions} from '../utilities/food'

import {getLocation} from '../api'

class Food extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      errMessage: null,
      cuisines: [
        { id: 25,
          chinese: false
        },
        {
          id: 99,
          vietnamese: false
        },
        {
          id: 55,
          pizza: false
        }
      ],
      restaurants: [

      ],
      chosenopt: []
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
    event.preventDefault()
    console.log(this.state)
    let option = randomOptions(this.state)
    console.log(option)
    if (option === 'chinese') {
      option = this.state.cuisines[0].id
    } else if (option === 'vietnamese') {
      option = this.state.cuisines[1].id
    } else if (option === 'pizza') {
      option = this.state.cuisines[2].id
    }
    this.setState({chosenopt: option})
    this.getRestaurants()
  }

  getRestaurants () {
    console.log(this.state.chosenopt)
    getLocation(this.state.chosenopt, (err, res) => {
      console.log(res)
      if (err) {
        this.setState({errMessage: err})
      }
      this.setState({
        restaurants: res.restaurants
      })
    })
  }

  render () {
    return (
      <div className='foodcategories' >

        <div className='foodbox' >
          <h3>Choose your cuisines: </h3>
          <form onSubmit={this.handleSubmit} >
            <h4>Chinese<input type='checkbox' name='chinese' value='chinese' onClick={this.handleClick} /> </h4>
            <h4>Vietnamese <input type='checkbox'onClick={this.handleClick} name='vietnamese' /> </h4>
            <h4>Pizza <input type='checkbox'onClick={this.handleClick} name='pizza' /> </h4>
            <button className='btn btn-lg btn-primary btn' type='submit'>Get your meal.</button>
          </form>
        </div>
        {this.state.restaurants.map((restaurant) => {
          return (
            <div>
              <h3>{restaurant.restaurant.name}</h3>
              <p>Address: {restaurant.restaurant.location.address}</p>
              <p>Average cost for two: ${restaurant.restaurant.average_cost_for_two }</p>
              <p><a href={restaurant.restaurant.menu_url}>Menu</a></p>
              <p>Rating: {restaurant.restaurant.user_rating.aggregate_rating}</p>
              <img src={restaurant.restaurant.featured_image} />
            </div>
          )
        })}
      </div>

    )
  }
}

export default Food
