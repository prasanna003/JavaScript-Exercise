var log = console.log;

log(isNaN("Hello") ) // Returns true
log(isNaN(345))   // Returns false
log(isNaN('1'))  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
log(isNaN(true)) // Returns false, since true converted to Number type results in 1 ( a number)
log(isNaN(false)) // Returns false
log(isNaN(undefined)) // Returns true