hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable; // if we use let instead of var, it will give ReferenceError: Cannot access 'hoistedVariable' before initialization error