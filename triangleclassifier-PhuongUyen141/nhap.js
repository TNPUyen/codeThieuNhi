// Add new functions, variables here
input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function main(input) {
  let inp = input.split(' ');
  let a = themdiem(inp);
  let b = tinhDoDai(a);
  let c = check(b);
  console.log(c[0] + ' ' + c[1] + ' ' + c[2] + ' ' + c[3]);
  
}
function themdiem(input = []) {
  let table = [];
  for (let i = 0; i < input.length; i += 2) {
    let arr = []
    let temp = i;
    for (let j = 0; j < 2; j++) {
      arr.push(input[temp]);
      temp++;
    }
    table.push(arr);
  }
  return table;
}
function tinhDoDai(input = []) {
  let result = [];
  let a = Math.sqrt((input[0][0] - input[1][0]) * (input[0][0] - input[1][0]) + (input[0][1] - input[1][1]) * (input[0][1] - input[1][1]));
  let b = Math.sqrt((input[1][0] - input[2][0]) * (input[1][0] - input[2][0]) + (input[1][1] - input[2][1]) * (input[1][1] - input[2][1]));
  let c = Math.sqrt((input[0][0] - input[2][0]) * (input[0][0] - input[2][0]) + (input[0][1] - input[2][1]) * (input[0][1] - input[2][1]));
  return result = [a, b, c];
}
function check(input = []) {
  let a = input[0];
  let b = input[1];
  let c = input[2];
  let aa=a*a;
  let bb=b*b;
  let cc=c*c;
  let t1 = 1;
  let t2 = 0;
  let t3 = 0;
  let t4 = 0;
  let result = [];
  if (a + b <= c || b + c <= a || c + a <= b) {
    t1 = 0;
  }
  else {
    if (Math.round(a*100)/100== Math.round(b*100)/100 && Math.round(b*100)/100 == Math.round(c*100)/100) {
      t1 = 1, t3=1, t4 = 1;
    }
    else if (a == b || b == c || c == a) {
      if (Math.round(aa+bb)== Math.round(cc)|| Math.round(bb+cc)== Math.round(aa) ||Math.round(cc+aa) == Math.round(bb) ){
        t1 = 1, t2 = 1, t3 = 1;
      }
      else {
        t1 = 1, t3 = 1;
      }
    }
    else if (Math.round((aa+bb)*100)/100== Math.round(cc*100)/100|| Math.round((bb+cc)*100)/100== aa ||Math.round((cc+aa)*100)/100 == Math.round(bb*100)/100) {
      t1 = 1, t2 = 1;
    }
    else {
      t1 = 1;
    }
  }
  return result = [t1, t2, t3, t4];
}
module.exports = main;