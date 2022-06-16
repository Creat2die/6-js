console.clear();

const n1 = 5;
const n2 = '7a';

function suma(a, b){
    const initialAsize = ('' + a).length;
    const initialBsize = ('' + b).length;

    a  = parseInt(a);
    b  = parseInt(b);

    const afterAsize = ('' +a).length;
    const afterBsize = ('' +b).length;

    if(isNaN(a) || initialAsize !== afterAsize){
            return 'Error: Pirmas parametras ne tikras skaicius';
    }
    if(typeof b !== 'number' || initialBsize !==afterBsize){
        return 'Error: Antras parametras ne tikras skaicius';
    }
    return a + b;
}

const ats = suma(n1,n2);
console.log(ats);

