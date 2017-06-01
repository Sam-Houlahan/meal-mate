import request from 'superagent'

export function getFood (lat, lon, cuisines, radius, budget, cb) {
  request.get('https://developers.zomato.com/api/v2.1/search')
  .query({lat, lon, radius, cuisines, sort: 'rating', count: 10})
  .set('user-key', '590e77256911b750af3aca8f320b2cb7')
.end((err, res) => {
  if (err) {
  }
  let foodRes = res.body
  foodRes = foodRes.restaurants.filter((x) => {
    return x.restaurant.average_cost_for_two <= budget
  })
  cb(null, foodRes)
})
}

export function getLocation (cuisines, radius, budget, cb) {
  request.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyD4CO-M2uHSNB-vJagAc9j8wuVHGh-OP9E')
  .set('Accept', 'application/json')
  .end((err, res) => {
    if (err) {
      return console.error(err.message)
    }
    const currentLocation = res.body
    let lat = currentLocation.location.lat
    let lon = currentLocation.location.lng
    getFood(lat, lon, cuisines, radius, budget, (error, response) => {
      if (error) {
        return console.error(err.message)
      }
      cb(null, response)
    })
  })
}
