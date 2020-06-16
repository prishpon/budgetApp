"use strict()";

let start = document.getElementById('start'),
    div = document.getElementsByTagName('div'),
    btn = document.querySelectorAll('button'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingValue = document.getElementsByName('monthsavings-value')[0],
    yearSavingValue =document.getElementsByClassName('yearsavings-value')[0],
    
    expensesItem = document.querySelectorAll('.expenses-item'),

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
 
    expensesItemButton = document.getElementsByTagName('button')[0] ,
    optionalExpensesButton = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    
    chooseIncome = document.querySelector('#income'),
    savingsInput= document.querySelector('#savings'),
    sumInput= document.querySelector('#sum'),
    percentInput= document.querySelector('#percent'),
    yearValueInput= document.querySelector('.year-value'),
    monthValueInput= document.querySelector('.month-value'),
    dayValueInput= document.querySelector('.day-value'),
    href = document.querySelector('a');
    
    
   
    let money,time; 
    let sumImportantExpenses = 0; 

    expensesItemButton.disabled = true;
    optionalExpensesButton.disabled = true;
    countBudgetBtn.disabled = true;

start.addEventListener('click',function(event){ 
   

    time = prompt("Insert date in format YYYY-MM-DD");
    money = +prompt("What is your budget for month?");

       while(isNaN(money) || money == "" || money == null ){
          money = +prompt("What is your budget for month?");
       }

      appData.budget = money;
      appData.timeData = time; 

      budgetValue.innerHTML = money.toFixed();

      yearValueInput.value = new Date(Date.parse(time)).getFullYear();
      monthValueInput.value = new Date(Date.parse(time)).getMonth()+1;
      dayValueInput.value =  new Date(Date.parse(time)).getDate();

      expensesItemButton.disabled = false;
    optionalExpensesButton.disabled = false;
    countBudgetBtn.disabled = false;
 
});




expensesItemButton.addEventListener('click',function(){
   
    for(i = 0; i < expensesItem.length; i++){ 
  
        let x = expensesItem[i].value; 
        let y =expensesItem[++i].value;
    
        sumImportantExpenses += +y;

        appData.optionalExpenses[x] = y;

    }
    expensesValue.textContent = sumImportantExpenses;
    appData.importantExpenses = sumImportantExpenses;
});

optionalExpensesButton.addEventListener('click',function(){
       for(let i = 0; i < optionalExpensesItem.length;i++){
              let opt = optionalExpensesItem[i].value;
              appData.optionalExpenses = opt;
              optionalExpensesValue.textContent +=appData.optionalExpenses[i] + ' ';

       }
});

countBudgetBtn.addEventListener('click',function(){
   
   if(appData.budget!= undefined){
    appData.moneyPerDay = ((appData.budget - appData.importantExpenses) /30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if(appData.moneyPerDay < 100){
        levelValue.textContent="Minimum level of income";
    }else if(appData.moneyPerDay > 100 && appData.moneyPerDay< 1000){
        levelValue.textContent="Middle level of income";
    }else if(appData.moneyPerDay > 1000){
        levelValue.textContent="High level of income";
    } else {
        levelValue.textContent="Mistake";
    }
  }else{
    dayBudgetValue.textContent = "Mistake.Please run programme";
  }
});

chooseIncome.addEventListener('input',function(){
    let items = chooseIncome.value;
        incomeValue.textContent = items;

        appData.income = items.split(',');
});

savingsInput.addEventListener('click',function(){
     if(appData.saving == true){
        appData.saving = false;
     }else{
        appData.saving = true;
     }
});

sumInput.addEventListener('input',function(){
     if(appData.saving == true){
        let sum = +sumInput.value,
            percent = +percentInput.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/12*percent;

            monthSavingValue.textContent = appData.monthIncome;
            yearSavingValue.textContent = appData.yearIncome;
    }
});

percentInput.addEventListener('input',function(){
    if(appData.saving==true){
        let sum = +sumInput.value,
        percent = +percentInput.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/12*percent;

        monthSavingValue.textContent = appData.monthIncome;
        yearSavingValue.textContent = appData.yearIncome;
    }
});



let appData = {
    budget:money,
    timeData:time,
    expenses : {},
    optionalExpenses:{},
    income : [],
    saving: false,
};