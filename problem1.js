/*
https://projecteuler.net/problem=1
Multiples of 3 and 5
Problem 1 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.   
The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

function sumOfMultiplesOf3Or5Below(maxNumber)
{
    var i = 0;
    var sumOfMultiples = 0;
    while (i < maxNumber)
    {
        if ((i % 3 == 0) || (i % 5 == 0))
            sumOfMultiples += i;
        i+=1;
    }
   return sumOfMultiples;
}

console.log(sumOfMultiplesOf3Or5Below(1000));
