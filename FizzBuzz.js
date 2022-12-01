/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    // Write your code here
    for(let i = 1; i <= n; i++) {
        const a = i % 3;
        const b = i % 5;
        
        if(a === 0 && b === 0){
            console.log('FizzBuzz')
        } else if(a === 0 && b !== 0){
            console.log('Fizz')
        } else if(a !== 0 && b === 0){
            console.log('Buzz')
        }else{
            console.log(i)
        }        
    }

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    fizzBuzz(n);
}