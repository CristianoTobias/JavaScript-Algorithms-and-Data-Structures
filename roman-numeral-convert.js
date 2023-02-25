function convertToRoman(num) {
  // num maximum = 3999
  let roman = {
    0: [" ", " ", " ", " "],
    1: ["I", "X", "C", "M"],
    2: ["II", "XX", "CC","MM"],
    3: ["III","XXX", "CCC", "MMM"],
    4: ["IV","XL", "CD", ""],
    5: ["V", "L", "D",""],
    6: ["VI", "LX", "DC", ""],
    7: ["VII","LXX","DCC","",],
    8: ["VIII","LXXX", "DCCC",""],
    9: ["IX","XC", "CM",""],
  }
  let convertToRoman = []
  let arr =  num.toString().split("").reverse()
   for(let i = 0; i < arr.length; i++){
     if(roman[arr[i]][i] != " "){
    convertToRoman.push(roman[arr[i]][i])
     }
  }
  return convertToRoman.reverse().join("")
}


console.log(convertToRoman(3999))

