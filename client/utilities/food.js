
export function randomOptions (value) {
  let foodArr = []
  foodArr.push(Object.keys(value))
  let rand = foodArr[Math.floor(Math.random() * foodArr.length)]
  return rand
}
