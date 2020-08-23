// Add new functions, variables here

function main(input) {
  // Your code goes here
  // Using console.log to answer the question
  let inpt = input.split(" ");
  let x = inpt[0];
  let y = inpt[1];

  let nOmega = ToHop(x, 52);
  let nA = dieukien(x, y);
  let  nP= nA/nOmega;
  let result = nP.toFixed(2);
  console.log(result);
}

function giaithua(x){
  let kq = 1;
  for(let i = 1; i <= x; i++){
    kq *= i;
  }
  return kq;
}

function ToHop(so, n){
  let chon = giaithua(n)/(giaithua(so)*giaithua(n-so));
  return chon;
}

function dieukien(x, y){
  let kq = ToHop(x, 52);
  for(let i = 0; i < y; i++){
    //chọn i lá có 1 chất được xét, chọn n - i lá còn lại từ 39 lá (52-13=39)
    kq = kq - ToHop(i, 13)*ToHop(x-i, 39);
  }
  return kq;
}


module.exports = main;
