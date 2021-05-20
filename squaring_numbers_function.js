//square every digit of a number and concatenate them

function squareDigits(num){
    
        // turning string into array of digits:
        const arrayOfDigits = Array.from(String(num), Number);
        // iterating through the array of digits and squaring each digit:
        let squaredDigits = arrayOfDigits.map(x => x ** 2);
        // converting array to string without commas: 
        let result = squaredDigits.join('');
        return(result)            
}

num = 12345
console.log(squareDigits(num))