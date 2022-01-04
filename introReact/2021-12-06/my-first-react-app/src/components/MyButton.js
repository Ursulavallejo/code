import React from 'react'
import './MyButton.css'

function MyButton(){
    function something(){
        alert('something 1')
    }

    return(
        <>
            <h1>My button </h1>
<button onClick={ something}>Alert Something 1</button>

<button onClick={ () => {alert('something 2')}}>Alert Something 2</button>
            <button onClick={ () => alert('something 3')}>Alert Something 3</button>
        </>
    )
}

export default MyButton