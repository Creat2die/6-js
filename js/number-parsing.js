console.clear();
/*
function suma(a, b){
    const initialAsize = ('' + a).length;
    const initialBsize = ('' + b).length;

    a  = parseFloat(a);
    b  = parseFloat(b);

    const afterAsize = ('' +a).length;
    const afterBsize = ('' +b).length;

    if(isNaN(a) || initialAsize !== afterAsize){
            return 'Error: Pirmas parametras ne tikras skaicius';
    }
    if(isNaN(b) || initialBsize !==afterBsize){
        return 'Error: Antras parametras ne tikras skaicius';
    }
    return a + b;
}
*/

function suma(a, b){
    a = +a;
    b = +b;
 
    if(isNaN(a)){
            return 'Error: Pirmas parametras ne tikras skaicius';
    }
    if(isNaN(b)){
        return 'Error: Antras parametras ne tikras skaicius';
    }
    return a + b;
}

module.exports = suma;

module.exports = suma;


