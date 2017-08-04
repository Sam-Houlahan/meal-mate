import request from 'superagent'

export function getFood (lat, lon, cuisines, radius, budget, cb) {
  request.get('https://developers.zomato.com/api/v2.1/search')
    .query({lat, lon, radius, cuisines, sort: 'rating', count: 10})
    .set('user-key', '590e77256911b750af3aca8f320b2cb7')
    .end((err, res) => {
      if (err) {
      }
      let foodRes = res.body
      foodRes = foodRes.restaurants.filter(single => {
        return single.restaurant.average_cost_for_two <= budget
      })
      cb(null, foodRes)
    })
}
