import React from 'react'
import classNames from 'classnames'
import Scroll from 'react-scroll'
var Element = Scroll.Element
var scroller = Scroll.scroller

import {randomOptions} from '../utilities/food'
import {getFood} from '../api'
const data = require('./data/cuisines.json')

class Food extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      errMessage: null,
      distance: [],
      budget: [],
      name: [],
      option: [],
      rating: null,
      cuisinesList: data.cuisinesList,
      displayMessage: false,
      restaurants: []
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDistance = this.handleDistance.bind(this)
    this.handleBudget = this.handleBudget.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition((position, err) => {
      if (err) console.log (err)
      this.setState({
        userLat: position.coords.latitude,
        userLng: position.coords.longitude
      })
    })
  }

  handleScroll () {
    scroller.scrollTo('restaurants', {
      duration: 1500,
      delay: 100,
      smooth: true,
      containerId: 'restaurants'
    })
  }

  handleClick (cuisine) {
    const newCuisinesList = [...this.state.cuisinesList]
    const index = newCuisinesList.findIndex(theCuisine => theCuisine === cuisine)
    cuisine.checked = !cuisine.checked
    newCuisinesList[index] = cuisine
    this.setState({cuisinesList: newCuisinesList})
  }

  handleSubmit (event) {
    this.handleScroll()
    event.preventDefault()
    const clickedOptions = this.state.cuisinesList.filter(cuisine => cuisine.checked).map(cuisine => cuisine.value.toString())
    let option = randomOptions(clickedOptions)
    let radius = this.state.distance
    let budget = this.state.budget * 2
    let stateOption = Number(option)
    this.getRestaurants(this.state.userLat, this.state.userLng, option, radius, budget)
    let foodName = this.state.cuisinesList.filter(name => stateOption === name.value)
    this.setState({option: foodName[0].name, displayMessage: true})
    this.state.restaurants.map(rating => {
      if (rating.restaurant.user_rating.aggregate_rating > 3) {
        this.setState({rating: true})
      }
    })
  }

  handleDistance (e) {
    let distance = e.target.value * 1000
    this.setState({distance: distance})
  }

  handleBudget (e) {
    let budget = e.target.value
    this.setState({budget: budget})
  }

  getRestaurants (lat, lng, option, distance, budget) {
    getFood(lat, lng, option, distance, budget, (err, res) => {
      if (err) {
        this.setState({errMessage: err})
      }
      this.setState({restaurants: res})
    })
  }

  render () {
    return (
      <div className='foodcategories text-center' >
        <div className='foodbox text-center' >
          <h3>Click your potential cuisine options and let <strong>Meal-Mate</strong> choose for you: </h3>
          <div className='wrapper'>
            <div className='buttons'>
              {this.state.cuisinesList.map(cuisine => {
                return (
                  <button key={cuisine.value} name={cuisine.name} value={cuisine.value} className={classNames('buttons', 'btns', {'checked': cuisine.checked})} onClick={() => this.handleClick(cuisine)} > {cuisine.name}</button>
                )
              })}
            </div>
          </div>
          <form onSubmit={this.handleSubmit} className='form' >
            <h4 className='distance'> Distance:<br /><br /><input type='text' onChange={this.handleDistance} className='form-control'placeholder='Enter distance youre willing to travel in kms' /></h4>
            <h4 className='distance'> Budget:<br /><br /><input type='text' onChange={this.handleBudget} className='form-control'placeholder='Enter what you would like to pay per person' /></h4>
            <button className='btns text-center' type='submit'>Click to get your option</button>
          </form>
          {this.state.displayMessage && <h4> Meal-Mate has chosen <strong className='option' >{this.state.option}</strong>  Enjoy!</h4>}<br />
        </div>
        <div className='flex-container'>
          <Element name="restaurants"></Element>
          {this.state.restaurants.map((restaurant, i) => {
            return (
              <div className='animated fadeIn restaurants' id='restaurants' key={i}>
                {restaurant.restaurant.featured_image !== '' ? <img className='restaurants-img' src={restaurant.restaurant.featured_image} /> : <h4 className='noimg'>Sorry this restaurant does not have a featured image to show :(</h4>}
                <h3>{restaurant.restaurant.name}</h3>
                <p><strong>Address:</strong> {restaurant.restaurant.location.address}</p>
                <p><strong>Average cost for two:</strong> ${restaurant.restaurant.average_cost_for_two }</p>
                <p><a href={restaurant.restaurant.menu_url}><strong>Menu</strong></a></p>
                <p><strong>Rating:</strong> <span className={classNames('badrating', {'rating': this.state.rating})} >{restaurant.restaurant.user_rating.aggregate_rating } "{restaurant.restaurant.user_rating.rating_text}" </span></p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Food
