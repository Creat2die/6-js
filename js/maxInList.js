// Rekursija


/*
function max(list){
    return Math.max(...list);
}

*/
function max(list){
    let maxNumber = -Infinity;
    for (const n of list){
        if(Array.isArray (n)){
            const maxChild = max(n);
            if (maxChild > maxNumber && typeof maxChild === 'number'){
                maxNumber = maxChild;
            }
        } else{
        if (typeof n !== 'number' || !isFinite(n)){
            continue;
        }
        if(n > maxNumber){
            maxNumber = n;
        } 
    }
}

    if(maxNumber === -Infinity){
        return 'ERROR';
    }
    return maxNumber;
}


const l1 = [1, 5, 10, 7, 6, 13, 4];
console.log((max(l1), '->', 13));


const l2 = [1, 5, 10, 7, 6, 13, 4];

console.log((max(l2)));

const l3 = ['labas', 2, -4];
console.log(max(l3));

const l6 = [];
console.log(max(l6));

const l7 = [''];
console.log(max(l7));


const l8 = ['laba', true, false, Infinity];
console.log(max(l8));

const l9 = [1, 5, 10, [[[15, [100, [9, [8]]]]], 5, 33], 7, 6, 13, 4];
console.log(max(l9));