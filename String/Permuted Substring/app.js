let sub = 'abcd';
let main = 'aasddfndbacdnunucbda';

let indices = [];

for(let i=0; i<=main.length-sub.length;i++) {
    let str = sub;
    for(let j=i; j<main.length; j++) {
        let c = main.charAt(j);
        if(str.indexOf(c)==-1) 
            break;
        str = str.replace(c, '');
    }
    if(str=='') {
        indices.push(i);
    }
}

console.log(indices);