// Addition

let a = 5
let b = 3
let c = a + b
console.log(c)

let numberOfAlbum = 4
let price = 124
let sum = numberOfAlbum * price
console.log(sum)
console.log('sum =',sum)
console.log(`sum =${sum}`)
console.log('----------------------------------')


//index {0,1 ,2} => length = 3
// album [2, 4, 5]

let albums = [2, 4, 5]
let price2 = [59, 29, 34]

let totalPrice = albums[0] * price2[0]
console.log('index = 0 =>' + totalPrice)
console.log('index = 0 =>' , totalPrice)

let chosenIndex = 1
totalPrice = albums[chosenIndex] * price2[chosenIndex]
console.log('Chosen index = 0 =>' + totalPrice)
console.log(totalPrice)

let text = 'Chosen index = 0 =>' + totalPrice
console.log('----------------------------------')
console.log(text)
console.log(typeof text)
console.log('----------------------------------')
console.log(totalPrice)
console.log(typeof totalPrice)

console.log('----------------------------------')
console.log('-----------LOOP-----------------')

function multiplyAlbumsWithPrice(index){
    return albums[index] * price2[index]
}
for (let i = 0; i <albums.length ; i++) {
    console.log(albums[i] * price2[i])
    console.log(multiplyAlbumsWithPrice(i))
}
console.log('----------------------------------')
function calculateTotalPrice() {
    let sum = 0
    for (let i = 0; i <albums.length ; i++) {
        sum += multiplyAlbumsWithPrice(i)
    }
    return sum
}
console.log('total sum =',calculateTotalPrice())

