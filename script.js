class Calculator
{
    constructor(previousOperandTextElement,currentOperandTextElement){
    this.previousOperandTextElement=previousOperandTextElement
    this.currentOperandTextElement=currentOperandTextElement
}
clear()
{
    this.currentOperand=''
    this.previousOperand=''
    this.Operation=undefined
}
delete()
{
 this.currentOperand= this.currentOperand.toString().slice(0,1)

}
appendNumber(number)
{
 if(number==='.' && this.currentOperand.includes('.'))return
 this.currentOperand= this.currentOperand.toString() + number.toString()   
}
chooseOperatiom(operation) 
{
    if(this.currentOperand ==='') return
    if(this.previousOperand !=='') {
        this.compute()
    }
    

}
compute()
{
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if(isNaN(prev) || isNaN(current)) return
    switch (this.operation)
    {
        case'+':
          computation = prev + current
          break
        case'-':
           computation = prev - current
          break
        case'/':
          computation = prev / current
          break
        case'*':
          computation = prev * current
          break
        default:
            return  
    }
    this.currentOperand = computation
    this.operatiom = undefined
    this.previousOperand
}

getDisplayNumber(number)
{
const stringNumber=number.toString()
const integerDigits=parserFloat(stringNumber.split(','))[0]
const decimalDigits=stringNumber.split('.')[1]
let integerDiplay
if(isNaN(integerDigits)){
  integerDisplay=''
}
else{
  integerDiplay=integerDigits.tolocaleString('en',{
      maximumFractionDigits:0})  
}
if(decimalDigits!=null){
    return '${integerDiplay}.${decimalDigits}'
}
else{
    return integerDisplay
}
}
updateDisplay()
{
    this.currentOperandTextElement,innerText=this.getDisplay(this.currentOperand)
    if(this.operatiom!= null){
        this.previousOperandTextElement.innerText='${this.getDisplayNumber(this.previousOperand)}  ${this.operation}'}
        else{
            this.previousOperandTextElement.innerText=''
        }
    }
}
const  numberButton=document.querySelectorAll(['data-number'])
const operationButton=document.querySelectorAll(['data-operation'])
const equalsButton=document.querySelectorAll(['data-equals'])
const deleteButton=document.querySelectorAll(['data-delete'])
const allclearButton=document.querySelectorAll(['data-all-clear'])
const previousOperandButton=document.querySelectorAll(['data-previous-operand-'])
const currentOperandButton=document.querySelectorAll(['data-current-operand'])

const calculator=new Calculator(previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button => {
button.addEventListener('click',()=>{
    Calculator.appendNumber(button.innerText)
    Calculator.updateDisplay(button.innerText)
    Calculator.appendNumber(button.innerText)
})
})
 

operationButtons.forEach(button => {
button.addEventListener('click',()=>{
    Calculator.chooseOperation(button.innerText)
    Calculator.updateDisplay()
    
})
})

equalsButtons.addEventListener('click', button =>{
    Calculator.compute()
    Calculator.updateDisplay()
    
})

allclearButtons.addEventListener('click', button => {
    Calculator.clear()
    Calculator.updateDisplay()

})
