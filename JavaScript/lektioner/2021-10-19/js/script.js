function geNamn(){

    document.getElementById('name').innerText = 'Ursula'
}

//2
    document.getElementById('name').innerText = 'Volvo'


//3
function getInputFromInputString(){
    let input= document.getElementById("inputString").value
    console.log(input)
    document.getElementById("inputResult").innerText = input
}
/*function getInputFromInputStringV2(value){
        let input = document.getElementById('inputString').value
    console.log(value)
}*/
document.getElementById('inputString').addEventListener('change', function () {
    console.log(this.value)
})

function updateInputStringValue(){
    document.getElementById('inputString').value = 'Random'
}

