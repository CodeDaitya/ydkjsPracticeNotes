/*
Program to calculate the total price of your phone purchase.
You will keep purchasing phones until you run out of money in
your bank account. You’ll also buy accessories for each phone
as long as your purchase amount is below your mental spending
threshold.
*/

var totalPrice = 0;
var priceOfPhone = 0;
var priceOfAccessory = 0;
var spendingThreshold = 0; // also the total expenditure on a purchase
var bankBalance = 0;

bankBalance = prompt("What is your bank balance?");


while(bankBalance){
    
    console.log("New Purchse!!");

    spendingThreshold = prompt("Enter your spending threshold:");

    if(bankBalance < spendingThreshold){

        alert("Spending Threshold can't be greater than Bank Balance!!!");
        continue;

    }

    priceOfPhone      = prompt("What is the price of the phone you just purchased?");

    if(priceOfPhone > spendingThreshold){
        
        alert("Price can't be greater than the Spending Threshold!!!");
        continue;

    }

    priceOfAccessory  = spendingThreshold - priceOfPhone;

    if(priceOfAccessory == 0){
        
        alert("No accessories bought!");

    }else{
        
        console.log("The accesories costed ", priceOfAccessory);

    }

    bankBalance = bankBalance - spendingThreshold;
    totalPrice  = totalPrice + spendingThreshold;
}

console.log("Total Price of all the phone purchses : ", totalPrice); 