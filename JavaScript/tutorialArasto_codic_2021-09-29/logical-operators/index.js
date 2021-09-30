// we have 3 logical operators:
// AND: check to values and see if both of them are true  &&
// OR : check if at least one value is true  ||
// NOT: the opposite of the current outcome

const AND = 1 + 1 == 2 && 2 + 2 == 4
const OR = 1 + 1 == 2 || 2 + 2 == 5
const NOT = !(1 + 1 == 3) 

//alert(AND)
//alert(OR)
alert(NOT)