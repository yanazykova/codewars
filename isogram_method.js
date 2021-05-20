function isIsogram(str){
    str = str.toLowerCase(str);
    // console.log(str)
    return str.split("").every((c, i) => str.indexOf(c) == i)
}
  
isIsogram("moOse")