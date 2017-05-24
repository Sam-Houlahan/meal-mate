import request from 'superagent'

export function getFood (lat, lon, cuisines, cb) {
  request.get('https://developers.zomato.com/api/v2.1/search')
  .query({lat, lon, radius: 1000, cuisines, sort: 'rating', count: 10})
  .set('user-key', '590e77256911b750af3aca8f320b2cb7')
.end((err, res) => {
  if (err) {
    return console.error(err.message)
  }
  const foodRes = res.body
  cb(null, foodRes)
})
}

export function getLocation (cuisines, cb) {
  request.get('https://ipinfo.io/')
  .set('Accept', 'application/json')
  .end((err, res) => {
    if (err) {
      return console.error(err.message)
    }
    const location = res.body
    let latLon = location.loc.split(',')
    let lat = latLon[0]
    let lon = latLon[1]
    getFood(lat, lon, cuisines, (error, response) => {
      if (error) {
        return console.error(err.message)
      }
      cb(null, response)
    })
  })
}