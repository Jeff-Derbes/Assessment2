///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const prices = cart.map(priceValue => priceValue.price);

const summedPrice = prices.reduce((sum, price) => {
     return sum + price
  })

console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = function(cartTotal,couponValue, tax){
    return cartTotal + (cartTotal * tax) - couponValue
};

console.log(calcFinalPrice(summedPrice, 5, 0.06))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    The first thing you can expect a customer object to contain would be their actual order. You would also need a way to track the customer which could either be an order number or just taking the customers name. An order number would be more accurate for tracking purposes, in case there are two customers with the same name. You would probably also want to track the time the order was placed so you know how long it's taking for them to get their food. Finally, you would want an order total.

    I would set the order to an array so that each element can represent an item in case the customer wants to order more than one item. This would make tracking the order total easier. The total property can be a number that is the result of a function that accepts the items in the order array. Assuming that each item in the order array is an object, we can access each item's price property and sum the total. The order time would just need to be a string, and the order number can be represented with a number.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    order : [pizza, salad],
    number : 23,
    time : '6:13 pm',
    total : 17
};

