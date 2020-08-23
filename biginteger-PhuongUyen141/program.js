// Add new functions, variables here

function main(input) {
  // Your code goes here
  // Using console.log to answer the question
  let ipt = input.split(' ');
  let bigInt1 = String(ipt[0]);
  let o = ipt[1];
  let bigInt2 = String(ipt[2]);


  if( o == '+'){
    xetSoHang(bigInt1, bigInt2);
  }else{
    console.log(Multiplication(bigInt1, bigInt2));
    // Multiplication(bigInt1,bigInt2)
  }

}

//hàm đảo ngược chuỗi
// function reverseString(str){
//   let newString = '';
//   for(let i = str.length-1; i >= 0; i --){
//     newString += str[i];
//   }
//   return newString;
// }

function xetSoHang(bigInt1, bigInt2){
  let a = 0;
  let newBigInt1 = bigInt1;
  let newBigInt2 = bigInt2;
  if(bigInt1.length > bigInt2.length ){
    a = Math.abs(bigInt1.length - bigInt2.length);
    for(let i = a; i > 0; i --){
      newBigInt2 = 0 + newBigInt2;
    }
    console.log((Plus(bigInt1, newBigInt2)));
  } else if(bigInt1.length < bigInt2.length ){
    a = Math.abs(bigInt1.length - bigInt2.length);
    for(let i = a; i > 0; i --){
      newBigInt1 = 0 + newBigInt1;
    }
    console.log((Plus(newBigInt1, bigInt2)));
  }else{
    console.log((Plus(bigInt1, bigInt2)));
  }
}

function Plus(bigInt1, bigInt2){
  let temp1 = 0;
  let temp2 = 0, temp3 = 0;
  let result = "";
  let j = 1;
  for(let i = bigInt1.length ;i > 0; i --){
    temp1 = temp3 + Number(bigInt1.substr(bigInt1.length-j, 1)) + Number(bigInt2.substr(bigInt2.length-j, 1));
    if(temp1 >=10){
      if(i == 1){
        temp2 = temp1 % 10;
        result = temp2 +result;
        temp3 = Math.floor(temp1/10);
        result = temp3 +result;
      }else{
        temp2 = temp1 % 10;
        result = temp2 +result;
        temp3 = Math.floor(temp1/10);
      };
    }else{
      result = temp1 +result;
      temp3 = 0;
    }
    temp2 = 0;
    j++;
  }
  return result;
}

function Multiplication(bigInt1, bigInt2){
  let temp1 = 0;
  let temp2 = 0, temp3 = 0;
  let result = "";
  let rs1 = '', rs2 = '';
  let k = 1;
  for(let i = bigInt2.length ;i > 0; i --){
    for(let j = bigInt1.length; j > 0; j--){
      temp1 = temp3 + (Number(bigInt1.substr(j - 1 , 1)) * Number(bigInt2.substr(bigInt2.length-k, 1)));
      if(temp1 >9){
        if( j == 1){
          temp2 = temp1 % 10;
          rs1 = temp2 + rs1;
          temp3 = Math.floor(temp1/10);
          rs1 = temp3 + rs1;
        }else{
          temp2 = temp1 % 10;
          rs1  = temp2 + rs1;
          temp3 = Math.floor(temp1/10);
        };
      }else{
        rs1  = temp1 + rs1;
        temp3 = 0;
      }
    }
    if( i == bigInt2.length){
          rs2 = rs1; 
          result = rs2;   
    }
    if(i < bigInt2.length){
      let newRs1 = rs1;
      for(let z = 0; z < k-1; z ++ ){
        newRs1 = newRs1 + 0;
      }
      
      let newRs2 = 0 + rs2;
      if(newRs2.length < newRs1.length){
        newRs2 =  0 + newRs2 ;
      }
      rs2 = Plus(newRs1, newRs2);
      result = rs2;
    }
    rs1 = '';
    temp3 = 0;
    temp2 = 0;
    k++;
  }
  let check = 0;
  for(let i = 0; i < result.length; i++){
    if( result[i] != 0){
      check = 1;
    }
  }
  if(check == 1){
    return result;
  }else{
    return 0;
  }
  
}

module.exports = main;
