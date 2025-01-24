let texto = 'abcedario'

let exp = /abd/

console.log(exp.test(texto))

// expresion regular sencilla para email
let expEmail = /\S+\@\S+\.\S+/
let expEmail2 = /^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/
console.log(expEmail2.test('juanantonio@bootcamp-upgrade.com'))

/*
    ##  / -	Indica inicio de expresión string
    ##   \S - Indica que se espera un caracter diferente a un espacio en blanco
    ##   \s  indica un espacio en blanco
    ##   + -	Indica que de ese caracter debe existir una ó más veces
    ##   \@			-	Indica el caracter en sí a buscar: una arroba
    ##   \.-	Indica un caracter: un punto
    ##  / -	Indica el final de la expresión regular
*/

//expresiones regulares que validen telefono.

let tel = '91-666-77-88'
let expTel = /\d{2-3}-\d{3}-\d{2}-\d{2}/
console.log(expTel.test(tel))

/*
    / - Indica inicio de expresión string
    ^ -	Indica que la expresión regular se aplica a la totalidad del string
    \d - Indica que se espera un caracter de dígito
    { 10 } -	Indica que de ese caracter debe haber un patrón de repetición: diez caracteres
    [A - Z][0 - 9] - Indica que se espera un rango de caracteres en mayúscula, entre la A y la Z o indica que espera cualquier numero del 0 al 9
    { 1, 2 } -	Indica que de ese caracter debe haber un patrón de repetición: entre 1 y 2 caracteres
   [gmail, hotmail] indica que ese conjunto de caracteres tiene dos posibilidades y se escribe tal cual
    / -	Indica el final de la expresión regular
*/


/**
 *  https://cheatography.com/davechild/cheat-sheets/regular-expressions/
 * https://www.linkedin.com/pulse/vitamina-tus-scripts-con-expresiones-regulares-mario-gir%C3%B3n-mart%C3%ADn/?trk=articles_directory&originalSubdomain=es
 *  regexlib.com
 * https://ihateregex.io
 *   https://regex101.com/library
 */


// expresion regular email juanan+
// /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
