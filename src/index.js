// Entry

class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }

  getFormattedAmount() {
    return `${this.amount} €`;
  }
}

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description);
    this.type = 'income';
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.type = 'expense';
    this.paid = paid;
  }
  getFormattedAmount() {
    return `-${this.amount} €`;
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = [];
  }
  addEntry(entry) {
    this.entries.push(entry);
  }
  getCurrentBalance() {
    if (this.entries.length === 0) {
      return 0;
    }
    let totalIncome = 0;
    let totalExpense = 0;

    for (const entry of this.entries) {
      if (entry.type === 'income') {
        totalIncome += entry.amount;
      } else if (entry.type === 'expense') {
        totalExpense += entry.amount;
      }
    }
const balance= totalIncome-totalExpense;

    return balance;
  }
  getFormattedEntries(){
    let formattedEntries = [];
    let formattedString;
    this.entries.forEach(function(element){
        if(element.type === 'income'){
            formattedString = element.date + " | "+element.description+ " | +"+element.amount + " €" ;
            //below code for jasmine
            //formattedString = element.date + " | "+element.description+ " | +"+element.amount + " €" ;
            formattedEntries.push(formattedString);
        } else if (element.type === 'expense'){
            formattedString = element.date + " | "+element.description+ " | -"+element.amount + " €" ;
            formattedEntries.push(formattedString);
        }
           
    });
return formattedEntries;
  }
}

 const firstEntry = new Income('2025,1,15', 1250, ' newinvestment');
firstEntry.getFormattedAmount();
const secondEntry = new Expense('2025,1,17' , 460, 'firstExpense');
secondEntry.getFormattedAmount(); 
