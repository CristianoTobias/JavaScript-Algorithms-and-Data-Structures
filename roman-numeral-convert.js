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

function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return str.split("").map(item =>
  {
     
    if(alphabet.indexOf(item) >= 0){
      let index
      if(alphabet.indexOf(item) < 13){
        index = 26 - (13 - (alphabet.indexOf(item)))
      }else{
        index = alphabet.indexOf(item) % 13
      }
      
      return alphabet[index]
    }else{
      return item
    }
  
  } ).join("")
}


console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))

function palindrome(str) {
  const regex = new RegExp(/[\s_*#,.\\\(\):-]/g)
  return str.toUpperCase().replace(regex, "").split("").reverse().join("") == str.replace(regex, "").toUpperCase()
}



console.log(palindrome('_eye'))
