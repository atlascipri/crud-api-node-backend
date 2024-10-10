function fib(n){
    if (n < 0) {
        return n + " não é Fibonacci";
    } 
    if (n == 0 || n == 1){
        return n + " é Fibonacci";
    }
    
    let ultimo = 0;
    let penultimo = 1;
    while (ultimo < n){
        let proximo = ultimo + penultimo;
        if (proximo == n) {
            return n + " é Fibonacci";
        } else {
            penultimo = ultimo;
            ultimo = proximo;
        }
    }

    return n + " não é Fibonacci";
}

let resultado = fib(21);
console.log(resultado);