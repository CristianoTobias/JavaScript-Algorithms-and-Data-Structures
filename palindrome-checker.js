function palindrome(str) {
    const regex = new RegExp(/[\s_*#,.\\\(\):-]/g)
    return str.toUpperCase().replace(regex, "").split("").reverse().join("") == str.replace(regex, "").toUpperCase()
  }
  
  palindrome("_eye");
  
  console.log(palindrome('_eye'))