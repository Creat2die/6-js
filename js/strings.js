/*
String -> tekstas

Inicijavimas
- viengubos kabutes
- dvigubos kabutes 
- backtick kabutes
*/

const username = 'Petras';
console.log(username);

const city = "Miestelis";
console.log(city);

const kabute1 = "Vienguva (') kabute";
console.log(kabute1);

const kabute12 = 'Vienguva (\') kabute';
console.log(kabute12);

const keliosEilutes = '<div>\
                            <p> Labas </p>\
                        </div>';

console.log(keliosEilutes);

const parosMetas = 'vakaras';
const username2 = 'Maryte';

const pasisveikinimas = 'Labas' + parosMetas + ', ' + username2 + '!';
console.log(pasisveikinimas);

const hello = `labas ${parosMetas}, ${username2}!`;
console.log(hello);


console.log('Labas \\\\ rytas');
