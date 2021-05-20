function XO(str) {
    // make string chars all low case and create new array:
    newArray = str.toLowerCase().split("");
    //   count x and o elements within the array:
    return newArray.filter(n => n == 'x').length === newArray.filter(n => n == 'o').length;
}
    
// or:

function XO(str) {
    // make string chars all low case and create new array:
    let newArray = str.toLowerCase().split("");
    //   count x and o elements within the array:
    let countX = newArray.filter(x => x =='x').length
    let countO = newArray.filter(x => x=='o').length
    // compare the results:
    if (countX == countO)
    {
        return true;
    } else {
      return false;
    }
}


console.log(XO("xxxxoooo"))