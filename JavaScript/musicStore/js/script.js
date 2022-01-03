let data = [
    {
        make: 'Volkswagen',
        model: 'Passat',
        engine: 'TDI',
        price: 129
    },
    {
        make: 'Fiat',
        model: '500',
        engine: '1.2L',
        price: 300
    },
    {
        make: 'Tesla',
        model: 'Roadster',
        engine: 'Electric',
        price: 600
    },
]

// for dont repeat several times Get element by id. simplifies what is below translated to a function
/*document.getElementById('make').innerText = data[0].make

document.getElementById('make').innerText = data[0].model*/

function updateElementIdText(elementID, text){
    document.getElementById(elementID).innerText = String(text)
}

function updateElementIdHtml(elementID, html){
    document.getElementById(elementID).innerHTML = html
}



// to generate the same card in the HTMl in JS. we move all the card we generate in html to js
/*function generateSingleCard(){
    return`
     <article class="card">
        <h3>Make: <span id="make">NONE</span>  </h3>
        <p>Model: <span id="model">NONE</span> </p>
        <p>Engine: <span id="engine">NONE</span> </p>
        <p>Price: <span id="price">NONE</span></p>
    </article>
    `
}*/  // we transform that one to the next functiongenerateSingleCard  for dont repeat few times the same
function alertSomething(message) {
    console.log(message)

}

function generateSingleCard(car){
    let carMake = car.make
    return `
     <article class="card">
        <h3>Make: ${car.make} </h3>
        <p>Model: ${car.model} </p>
        <p>Engine: ${car.engine} </p>
        <p>Price: ${car.price} kr</p>
        <button id="${car.make}" >My Button</button>
    </article>
    `

}

//create a function that makes the function generateCard function. stop in the article above
function updateContent() {
    let htmlElement = ''

    for (const car of data) {
      htmlElement +=  generateSingleCard(car)

    }
    updateElementIdHtml('card-contents', htmlElement)
}
updateContent()

// we move this after Update Content otherwise dont run in the HtML. we create after a function inside generatesingle card that run this. That's why we remove this afterwards.
/*
updateElementIdText('make', data[0].make)
updateElementIdText('model', data[0].make)
updateElementIdText('engine', data[0].engine)
updateElementIdText('price', `${data[0].price} kr`)*/


/*steps to create teh event listener:
1. create individual*/
/*
document.getElementById(data[0].make)
    .addEventListener('click', function () {
        console.log(' 0 clicked')

    });

document.getElementById(data[1].make)
    .addEventListener('click', function () {
        console.log('1 clicked')

    });
document.getElementById(data[2].make)
    .addEventListener('click', function () {
        console.log('2 clicked')

    });
*/

/*
2. create a event lsitener when it load the page:*/

window.addEventListener('load', function () {
    document.getElementById(data[0].make)
    .addEventListener('click', function () {
        console.log(' 0 clicked')

    });

    document.getElementById(data[1].make)
        .addEventListener('click', function () {
            console.log('1 clicked')

        });
    document.getElementById(data[2].make)
        .addEventListener('click', function () {
            console.log('2 clicked')

        });
})

/*3. create a function*/

function myEventListener(event){
    document.getElementById(data[0].make)
        .addEventListener('click', function () {
            console.log(' 0 clicked')

        })
}