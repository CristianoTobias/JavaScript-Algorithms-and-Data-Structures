function checkCashRegister(price, cash, cid) {
  let monetaryUnit = {
    "ONE HUNDRED": 100.0,
    TWENTY: 20.0,
    TEN: 10.0,
    FIVE: 5.0,
    ONE: 1.0,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  };
  let cashRegister = {
    status: "",
    change: [],
  };
  let total = cid.reduce((accumulator, currentValue) => {
    return accumulator + currentValue[1];
  }, 0);

  let change = cash - price;
  if (total < change) {
    cashRegister.status = "INSUFFICIENT_FUNDS";
  } else if (total === change) {
    cashRegister.status = "CLOSED";
    cashRegister.change = [...cid];
    change = 0;
  } else {
    cashRegister.status = "OPEN";
    for (let chave of Object.keys(monetaryUnit)) {
      let temp = cid.filter((item) => item[0] === chave);

      if (change >= monetaryUnit[chave]) {
        if (temp[0][1] > change) {
          let temp1 =
            Math.floor(change / monetaryUnit[chave]) * monetaryUnit[chave];

          cashRegister.change.push([chave, temp1]);

          change -= temp1;
          change = change.toFixed(2);
        } else {
          if (temp[0][1] > 0) {
            cashRegister.change.push([chave, temp[0][1]]);
            change -= temp[0][1];
            change = change.toFixed(2);
          }
        }
      }
    }
  }

  if (change != 0) {
    cashRegister.status = "INSUFFICIENT_FUNDS";
    cashRegister.change = [];
  }

  return cashRegister;
}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
