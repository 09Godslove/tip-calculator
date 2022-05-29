let billEl = document.querySelector('#bill')
let noOfPeopleEl = document.querySelector('#people')
let billAmount = 0
let noOfPeople = 0
let tipPercentages = document.querySelectorAll('.cl-tips')
let customEl = document.querySelector('.cl-tip-custom')
let percentages = 0
let tipAmount = 0
let totalAmount = 0
let tipAmountEl = document.querySelector('#amount')
let totalEl = document.querySelector('#total')

billEl.addEventListener('keyup', e => {
    billAmount = Number(e.target.value)
})
 noOfPeopleEl.addEventListener('keyup', e => {
     noOfPeople= Number(e.target.value)
     total()
     tip()
 })
Array.from(tipPercentages).forEach(tipPercentages =>{
    tipPercentages.addEventListener("click", e=>{
        if(e.target.innerText.includes('%')){
            percentages=Number(e.target.innerText.replace('%', ' '))
        }
        tip()
        total()
    })
})
customEl.addEventListener('keyup', e=> {
    percentages = Number(e.target.value)
    tip()
})

function tip(){
    tipAmount = billAmount * (percentages / 100)
    let tipAmountPerPerson = tipAmount/noOfPeople
    
    tipAmountEl.innerText= tipAmountPerPerson ==Infinity ? '$' + 0.00: '$' +  tipAmountPerPerson.toFixed(2)
}
function total(){
    totalAmount= tipAmount+billAmount
    let totalAmountPerPerson=totalAmount/noOfPeople
    totalEl.innerHTML= totalAmountPerPerson == Infinity ? '$'+0.00: '$' + totalAmountPerPerson.toFixed(2)
}
