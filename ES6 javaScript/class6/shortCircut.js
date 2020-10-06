let gender = "male";

let msg = (gender === 'male') && "&& shortcircuit";
let msg2 = (gender === 'male') || "|| ShortCircuit works";
console.log(msg)
console.log(msg2)