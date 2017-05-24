
export function randomOptions (food) {
  let foodArr = []
  for (let i in food) {
    if (food[i] === true) {
      foodArr.push(i)
    }
  }
  let rand = foodArr[Math.floor(Math.random() * foodArr.length)]
  return rand
}
