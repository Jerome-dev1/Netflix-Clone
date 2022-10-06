const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfpeople = Number(numberOfPeopleDiv.innerText)
const calculateBill = () => {
  const bill = Number(billInput.value)
  console.log(bill)

  const tipPercentage = Number(tipInput.value) / 100
  console.log(tipPercentage)

  const tipAmount = bill * tipPercentage

  const total = tipAmount + bill
  
  const perPersonTotal = total / numberOfpeople

  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}` 
}

const increasePeople = () => {
  numberOfpeople += 1
  numberOfPeopleDiv.innerText = numberOfpeople
  calculateBill()
}

const decreasePeople = () => {
  if (numberOfpeople <= 1) {
    console.log('you cant have less than one person!')
    return
  }


  numberOfpeople -= 1
  numberOfPeopleDiv.innerText = numberOfpeople
  calculateBill()
}
