// Add new functions, variables here

function main(input) {
  let ipt = input.split(" ");

  let o = ipt[0];

  let a = [ipt[1], ipt[2]];
  let b = [ipt[3],ipt[4]];

  let temp1 = [];
  let temp2 = []
  let t = 5;
  for(let i = 0; i < a[0]; i++){
    for(let j = 0; j < a[1]; j++){
      temp1.push(ipt[t]);
      t++;
    }
  }
  for(let i = 0; i < b[0]; i++){
    for(let j = 0; j < b[1]; j++){
      temp2.push(ipt[t]);
      t++;
    }
  }

  //xét điều kiện
  if( o == '+'){
    dieuKienCong(a, b, temp1, temp2);
  }else{
    dieuKienNhan(a, b, temp1, temp2);
  }
}

function dieuKienCong(a = [], b = [], temp1= [],  temp2 = []){
  if(a[0] == b[0] && a[1] == b[1]){
    let hang = a[0];
    let cot = a[1];
    console.log(hang + " " + cot + congMaTran(temp1, temp2));
  }else{
    console.log(-1);
  }
}

function dieuKienNhan(a = [], b = [], temp1, temp2){
  if(a[1] == b[0]){
    let hang = a[0];
    let cot = b[1];
    console.log(hang + " " + cot + nhanMaTran(a, b, temp1, temp2));
    // nhanMaTran(a, b, temp1, temp2);
  }else{
    console.log(-1);
  }
}

function congMaTran(temp1 = [], temp2 = []){
  let result;
  let temp = " ";
  for(let i = 0; i < temp1.length; i++){
    result = Number(temp1[i]) + Number(temp2[i]);
    temp += result + " ";
  }
  return temp;
}

function createTable(m, n, temp=[]){
  let tb = [];
  let t = 0;
  for(let i = 0; i < m; i ++){
    let hang = [];
    for(let j = 0; j < n; j ++){
      hang.push(temp[t]);
      t++;
    }
    tb.push(hang);
  }
  return tb;
  
}

function nhanMaTran(a = [], b = [], temp1 = [], temp2 = []){
  let tb1 = createTable(a[0], a[1], temp1);
  let tb2 = createTable(b[0], b[1], temp2);
  let result;
  let temp = " ";
  for(let i = 0 ; i < a[0]; i++){
    for(let j = 0; j < a[0]; j++){
      result = 0;
      for(let k = 0; k < b[0]; k++){
        result = result + tb1[i][k] * tb2[k][j];
      }
      temp += result +" ";
    }
  }
return temp;
}

module.exports = main;
