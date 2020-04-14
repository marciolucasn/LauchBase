// Desafio 1-4 - Operações bancárias

const user = {
  name: "Márcio",
  transactions: [],
  balance: 0
}

/* 
const transaction = {
  type,
  value
}
*/

function createTransaction(transaction) {
  user.transactions.push(transaction)

  if (transaction.type === 'credit') {
    user.balance = user.balance + transaction.value
  } else if (transaction.type === 'debit') {
    user.balance = user.balance - transaction.value
  }
}

function getHigherTransactionByType(type) {
  let largerValue = 0
  let largerTransaction

  for(let object of user.transactions) {
    if (object.type == type && object.value > largerValue) {
      largerTransaction = object
      largerValue = object.value
    }
  }
  return largerTransaction
}

function getAverageTransactionValue() {
  let allValueTransaction = 0

  for (let object of user.transactions) {
    allValueTransaction = allValueTransaction + object.value
  }
  return allValueTransaction/user.transactions.length
}

function getTransactionsCount() {
  let countCredit = 0
  let countDebit = 0

  for(let object of user.transactions) {
    if(object.type === 'credit') {
      countCredit++
    } else if(object.type === 'debit') {
      countDebit++
    }
  }
  return `credit: ${countCredit}, debit: ${countDebit}`
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance)

console.log(getHigherTransactionByType('credit')) 
console.log(getHigherTransactionByType('debit')) 

console.log(getAverageTransactionValue()) 

console.log(getTransactionsCount()) 