/***
 * 2 ways for TS to add type
 * Implicit and Explicit 
 */

//implicit
let fName = 'Kevin'

// fname = 1234 //fail

//explicit 
let lName: string | number | boolean | undefined = 'Kevin D'

lName = 3445
lName = false 
lName = undefined