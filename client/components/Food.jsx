import React from 'react'

import {randomOptions} from '../utilities/food'

import {getLocation} from '../api'

class Food extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      errMessage: null,
      checked: [],
      distance: [],
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
    this.handleChange = this.handleChange.bind(this)
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
    let option = randomOptions(this.state.checked)
    let radius = this.state.distance
    this.getRestaurants(option, radius)
  }
  handleChange (e) {
    let distance = e.target.value * 1000
    this.setState({distance: distance})
  }

  getRestaurants (option, distance) {
    getLocation(option, distance, (err, res) => {
      if (err) {
        this.setState({errMessage: err})
      }
      this.setState({
        restaurants: res.restaurants
      })
    })
  }

  render () {
    console.log(this.state.distance)
    return (
      <div className='foodcategories text-center' >

        <div className='foodbox text-center' >
          <h3>Enter your potential cuisine options and let Meal-Mate choose for you: </h3>
          <form onSubmit={this.handleSubmit} className='form' >
            {this.state.cuisinesList.map(cuisine => {
              return (
                <h4>{cuisine.name } <input type='checkbox' value={cuisine.value} onClick={this.handleClick} /> </h4>
              )
            })}
            <h4 className='distance'> Distance:<br /><br /><input type='text' onChange={this.handleChange} className='form-control'placeholder='Enter distance youre willing to travel in kms' /></h4>
            <button className='btn btn-lg btn-primary btn-block' type='submit'>Get your meal.</button>
          </form>
        </div>
        {this.state.restaurants.map((restaurant) => {
          return (
            <div class='text-center'>

              <h3>{restaurant.restaurant.name}</h3>
              <p>Address: {restaurant.restaurant.location.address}</p>
              <p>Average cost for two: ${restaurant.restaurant.average_cost_for_two }</p>
              <p><a href={restaurant.restaurant.menu_url}>Menu</a></p>
              <p>Rating: {restaurant.restaurant.user_rating.aggregate_rating}</p>
              <img src={restaurant.restaurant.featured_image} />
              <hr />
            </div>
          )
        })}
      </div>

    )
  }
}

export default Food
