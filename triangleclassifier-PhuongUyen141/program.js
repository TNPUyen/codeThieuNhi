// // Add new functions, variables here
// //Input: 1 4 1 1 5 1




// function main(input) {
//   // Your code goes here
//   // Using console.log to answer the question

//   let bit = 0;
//   let ipt = input.split(" ");
//   let a = {
//     x: ipt[0],
//     y: ipt[1],
//   }; 

//   let b = {
//     x: ipt[2],
//     y: ipt[3],
//   };

//   let c = {
//     x: ipt[4],
//     y: ipt[5],
//   };

//   let canh1 = tinhDoDai(a,b);
//   let canh2 = tinhDoDai(b,c);
//   let canh3 = tinhDoDai(a,c);

//   console.log(input);

//   // let kq1 = tamGiac(canh1, canh2, canh3);
//   // let kq2, kq3, kq4;
//   // let kq2 = tamGiacVuong(canh1, canh2, canh3);
//   // let kq3 = tamGiacCan(canh1, canh2, canh3);
//   // let kq4 = tamGiacDeu(canh1, canh2, canh3);

//   // if(tamGiac(canh1, canh2, canh3)){
//     // kq2 = tamGiacVuong(a, b, c, canh1, canh2, canh3);
//     // kq3 = tamGiacCan(canh1, canh2, canh3);
//     // kq4 = tamGiacDeu(canh1, canh2, canh3);
//   // }

//   // console.log(kq1, " ", kq2, " ", kq3, " ",kq4);

//   tamGiac(a, b, c, canh1, canh2, canh3);

// }

// function tinhDoDai(a, b){
//   let dodai = Math.sqrt(Math.pow((a.x-b.x),2) + Math.pow((a.y-b.y),2));
//   return dodai;
// }

// function tamGiac(a, b, c, canh1, canh2, canh3){
//   let kq1 = 0;
//   if((canh1 + canh2) > canh3 && (canh2 + canh3) > canh1 && (canh1 + canh3) > canh2){
//     kq1 = 1;
//     kq2 = tamGiacVuong(a, b, c, canh1, canh2, canh3);
//     kq3 = tamGiacCan(canh1, canh2, canh3);
//     kq4 = tamGiacDeu(canh1, canh2, canh3);
//     console.log(kq1 + " " + kq2 + " " + kq3 + " " + kq4);
//   }else{
//     console.log(0, 0, 0, 0);
//   }
// }

// function tamGiacVuong(a, b, c, canh1, canh2, canh3){
//   // let bit = 0;
//   let temp1 = (Math.pow((a.x-b.x),2) + Math.pow((a.y-b.y),2));
//   let temp2 = (Math.pow((b.x-c.x),2) + Math.pow((b.y-c.y),2));
//   let temp3 = (Math.pow((a.x-c.x),2) + Math.pow((a.y-c.y),2));

//     if( temp1 == (canh2*canh2 + canh3*canh3) ||
//         temp2 == (canh1*canh1 + canh3*canh3) ||
//         temp3 == (canh1*canh1 + canh2*canh2)){
//           return 1;
//     }else{
//       return 0;
//     }
//   }

// function tamGiacCan(canh1, canh2, canh3){
//   // let bit = 0;
//     if( canh1 == canh2 ||
//         canh2 == canh3 ||
//         canh3 == canh1){
//           return 1;
//     }else{
//       return 0;
//     }
//   }

// function tamGiacDeu(canh1, canh2, canh3){
//     if(canh1 === canh2 && canh1 === canh3 ){
//       return 1;
//     }else{
//       return 0;
//     }
//   }

// module.exports = main;
function main(input) {
    let ipt = input.split(' ');
    let a = {
        x: ipt[0],
        y: ipt[1],
    };
    let b = {
        x: ipt[2],
        y: ipt[3],
    };
    let c = {
        x: ipt[4],
        y: ipt[5],
    };
    let canh1 = tinhDoDai(a, b);
    let canh2 = tinhDoDai(c, b);
    let canh3 = tinhDoDai(a, c);
    console.log(canh1);
    console.log(canh2);
    console.log(canh3);

    console.log(xetTamGiac(canh1, canh2, canh3));
};

function tinhDoDai(diem1, diem2) {
    return doDai = Math.sqrt(Math.pow(diem1.x - diem2.x, 2) + Math.pow(diem1.y - diem2.y, 2));
}

function xetTamGiac(a, b, c) {
    let kq = '';
    let kq1 = `${tamGiac(a, b, c)} `;
    let kq2 = `${tamGiacVuong(a, b, c)} `;
    let kq3 = `${tamGiacCan(a, b, c)} `;
    let kq4 = `${tamGiacDeu(a, b, c)}`;
    return kq = `${kq1} ${kq2} ${kq3} ${kq4}`;
}

function tamGiac(a, b, c) {
    if (a + b > c && b + c > a && a + c > b) {
        return 1;
    }
    return 0;
}

function tamGiacVuong(canh1, canh2, canh3) {
    let temp1 = canh1 * canh1;
    let temp2 = canh2 * canh2;
    let temp3 = canh3 * canh3;
    if (Math.round(temp1) == Math.round(canh2 * canh2 + canh3 * canh3) ||
        Math.round(temp2) == Math.round(canh1 * canh1 + canh3 * canh3) ||
        Math.round(temp3) == Math.round(canh1 * canh1 + canh2 * canh2)) {
        return 1;
    }
    return 0;
}

function tamGiacCan(a, b, c) {
    if (a == b || b == c || a == c) {
        return 1;
    }
    return 0;
}

function tamGiacDeu(a, b, c) {
    if (Math.round(a)== Math.round(b) && Math.round(b) == Math.round(c)) {
        return 1;
    }
    return 0;
}


module.exports = main;