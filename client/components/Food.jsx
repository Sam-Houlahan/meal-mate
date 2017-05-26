import React from 'react'

import {randomOptions} from '../utilities/food'

import {getLocation} from '../api'

class Food extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      errMessage: null,
      checked: [],
      cuisinesList: [
        {
          value: 1,
          name: 'American'
        },
        {
          value: 25,
          name: 'Chinese'
        },
        {
          value: 99,
          name: 'Vietnamese'
        },
        {
          value: 55,
          name: 'Pizza'
        },
        {
          value: 95,
          name: 'Thai'
        },
        {
          value: 298,
          name: 'Fish and Chips'
        }, {
          value: 193,
          name: 'BBQ'
        },
        {
          value: 168,
          name: 'Burger'
        },
        {
          value: 40,
          name: 'Fast Food'
        }, {
          value: 143,
          name: 'Mexican'
        },
        {
          value: 60,
          name: 'Japanese'
        }, {
          value: 73,
          name: 'Mexican'
        }, {
          value: 141,
          name: 'Steak'
        }, {
          value: 67,
          name: 'Korean'
        }
      ],
      restaurants: [

      ]

    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleClick (e) {
    let checked = [...this.state.checked]

    if (!checked.includes(e.target.value) && e.target.checked) {
      checked.push(e.target.value)
    }

    if (checked.includes(e.target.value) && !e.target.checked) {
      checked = checked.filter((item) => e.target.value !== item)
    }

    this.setState({ checked: checked })
  }
  handleSubmit (event) {
    event.preventDefault()
    console.log(this.state)
    let option = randomOptions(this.state.checked)
    this.getRestaurants(option)
  }

  getRestaurants (option) {
    getLocation(option, (err, res) => {
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
            {this.state.cuisinesList.map(cuisine => {
              return (
                <h4>{cuisine.name}<input type='checkbox' value={cuisine.value} onClick={this.handleClick} /> </h4>
              )
            })}
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
