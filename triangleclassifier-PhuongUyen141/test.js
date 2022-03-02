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