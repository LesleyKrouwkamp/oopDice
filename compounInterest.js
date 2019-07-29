class BankAccount {
    constructor(balance,interestRate,monthlyFee,type) {
        this.balance = balance
        this.intRate = interestRate
        this.monthlyFee = monthlyFee
        this.type = type
        this.interest = 0
    }
 
 
 validateType(){
    if(this.type === "cheque" ||this.type === "savings" ||this.type === "credit")
        {return true}
        else
        {console.log("please enter valid account type of bank account")}
    }
 
    calculateInterest(){
       var result = this.balance * this.interestRate/12
       this.interest = result
       return this.interest
    }
 
 finalBalance(){
 calculateInterest();
 var finalBalance = this.balance + this.interest -this.monthlyFee
 return finalBalance
 }
 }
 
 