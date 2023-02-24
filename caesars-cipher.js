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
  
  rot13("SERR PBQR PNZC");
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))