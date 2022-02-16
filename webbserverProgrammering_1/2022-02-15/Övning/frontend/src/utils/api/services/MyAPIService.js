import http from "../MyAPI"

const alive = () => {
    return http.get('/')
}

const welcome_message = (name) => {
    return http.post(`/name/${name}`)
}

const calculator_addition = (number1,number2) => {
    return http.post(`/calc/add/${number1}/${number2}`)
}

const calculator_subtraction = (number1,number2) => {
    return http.post(`/calc/sub/${number1}/${number2}`)
}

const calculator_multiplication = (number1,number2) => {
    return http.post(`/calc/multi/${number1}/${number2}`)
}

const calculator_division = (number1,number2) => {
    return http.post(`/calc/div/${number1}/${number2}`)
}

export default {
    alive,
    welcome_message,
    calculator_addition,
    calculator_subtraction,
    calculator_multiplication,
    calculator_division,
}