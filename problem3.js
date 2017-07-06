/*
https://projecteuler.net/problem=3
Largest prime factor
Problem 3 
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

function largestPrimeFactor(number)
{
    var i = 2
    var result = 0
    while (i <= number)
    {        
        if (number % i == 0)
        {
            number = number/i;
            result = i;
            i = 1;
        }
        i++;
    }
    return result;    
}

    
console.log(largestPrimeFactor(600851475143));     
        
