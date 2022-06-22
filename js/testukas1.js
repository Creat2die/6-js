const input = '26605629810261535553116528443224470845132316896871617620561425083522729422481861499468953263252786629027926482889783044174643205260372654221138950022761255566';
function splitas(input){
    let mas = input.split('');
    let pair =mas[0]; 
    let masyvas=[];
    for ( i= 0; i < mas.length; i++){
        pair = mas[i] + mas[i+1];
        masyvas.push(pair) 
    }
    const biggest = masyvas.sort((a, b) => b - a);
    let a = biggest[0];
    let b = 1;
    let bmax = -Infinity;
    let amax = 0;
    for (n = 0; n <biggest.length; n++){
        if(biggest[n] === biggest[n+1]){
            a= biggest[n];
            b++;
        } else{
            a = biggest[n];
            b = 1;
        }
        if( bmax < b){
            bmax = b;
            amax = a;
        }
    }
    return `Skaičius yra ${amax} ir jis kartojasi ${bmax} kartus`;
}


console.log(splitas(input));