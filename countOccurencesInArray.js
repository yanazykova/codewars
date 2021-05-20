try {
const count = countOccurences('butterfly', 1);
console.log(count);
}
catch (e) {
    console.log(e.message);
}

function countOccurences(array, searchElement) {
    let count = 0;
    for (let element of array)
        if  (element === searchElement)
        count += 1;
    return count;
}

// now - using the reduce method:
function countOccurences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid array.');

    return array.reduce((accumulator, currentElement) => {
        const occurence = (currentElement === searchElement)
        console.log(accumulator, currentElement, searchElement)
        return accumulator + occurence;
    }, 0);
}