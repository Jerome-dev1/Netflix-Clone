

// const orderSoup = () => console.log('soup is ready')

// console.log('You start the convo with your girl')

// setTimeout(orderSoup, 2000)

// console.log('Still speaking')

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = [true, false][Math.floor(Math.random() * 2)]
    isReady ? resolve('✅ Soup is ready 🍲'): reject('❌ No soup today') 
  }, 2000)
})

// console.log(
//   promise1
//   .then(success => console.log({success}))
//   .catch(error => console.log({error}))
// )
const data = {rating: null, tip: null, pay: null, review: null}

const getOrder = async () => {
  try {
    const soup = await promise1
  console.log(soup)
    data.rating = 5
    data.tip = .2
    data.pay = 10
    data.review = 5
  return data
  } catch(error) {
  console.log(error)
    data.rating = 1
    data.tip = 0
    data.pay = 0
    data.review = 1
  return data 
  }
  
}

console.log(getOrder().then(value => console.log(value)))
const sum = async (a, b) => a+b

// console.log('fetch:',
// fetch('https://dog.ceo/api/breeds/image/random')
// .then(response => response.json())
// .then(data => console.log(data))
// )

// const getDog = async () => {
//   const url = 'https://dog.ceo/api/breeds/image/random'
//   const response = await fetch(url)
//   const data = await response.json()
//   console.log(data)
// }

// getDog()