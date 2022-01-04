import './utils/global/css/global.css'
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Main from "./components/Main";
import About from "./components/About";
import {useState} from "react";
import Contact from "./components/Contact";


function App() {
   /* let showMain = false
    let showAbout = true*/
    const [showMain, setShowMain] = useState(true)
    const [showAbout, setShowAbout] = useState(false)
    const [showContact, setShowContact] = useState(false)


    function toggleMain(){
        if (showMain){
            return  <Main/>
        }
    }
    function toggleAbout(){
        if (showAbout){
            return <About/>
        }
    }
    function toggleContact(){
        if (showContact){
            return <Contact/>
        }
    }
    function mainButtonClicked (){
        setShowMain (true)
        setShowAbout (false)
        setShowContact (false)
    }
    function aboutButtonClicked (){
        setShowMain (false)
        setShowAbout (true)
        setShowContact (false)
    }
    function contactButtonClicked (){
        setShowMain (false)
        setShowAbout (false)
        setShowContact (true)
    }
  return (
    <>
        <NavBar/>
        <div>
            <button onClick={mainButtonClicked}>Main</button>
            <button onClick={aboutButtonClicked}>About</button>
            <button onClick={contactButtonClicked}>Contact</button>
        </div>
        { toggleMain ()}
        { toggleAbout ()}
        { toggleContact()}

        <Footer/>

    </>
  );
}

export default App;
