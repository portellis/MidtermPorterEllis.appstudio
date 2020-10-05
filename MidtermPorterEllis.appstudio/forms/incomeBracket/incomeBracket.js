btnSubmit.onclick=function(){
  let income = Number(inptIncome.value)
  let taxBracket = " "
    if (income < 30000) {
          taxBracket = "8%"
          lblBracket.textContent = ("With your income of $" + income +", you are in the tax bracket of " + taxBracket)
    } else if  (30000 < income < 99999) {
          taxBracket = "12%"
          lblBracket.textContent = ("With your income of $" + income +", you are in the tax bracket of " + taxBracket)
    } else if (income > 99999) {
          taxBracket = "15%"
          lblBracket.textContent = ("With your income of $" + income +", you are in the tax bracket of " + taxBracket)
    }
  }
  btnGoAgain.onclick=function(){
    income.value = " "
    taxBracket.value = " " }
  