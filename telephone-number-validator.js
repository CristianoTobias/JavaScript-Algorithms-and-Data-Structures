function telephoneCheck(str) {
    const regex1 = new RegExp(/^1?\s?\d{3}-\d{3}-\d{4}$/)
    const regex2 = new RegExp(/^1?\s?\d{3}\s\d{3}\s\d{4}$/)
    const regex3 = new RegExp(/^1?\s?\(\d{3}\)\s?\d{3}-\d{4}$/)
    const regex4 = new RegExp(/^\d{10}$/)
    return regex1.test(str) || regex2.test(str) || regex3.test(str) || regex4.test(str);
  }
  
  telephoneCheck("555-555-5555");
  console.log(telephoneCheck("555-555-5555"))