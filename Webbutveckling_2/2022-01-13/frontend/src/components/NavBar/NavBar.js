import logo from '../../utils/images/codic-logo.svg'
import './NavBar.css'

export default function NavBar(){
    return (
        <nav className='grid-container'>
           <div>
               <img src={logo} alt="Codic logotype"/>
           </div>
            <div>
                <ul className='links'>
                    <li className='link-items'>
                        <a href="#" className='link-item-a'>Startsidan</a>
                    </li>
                    <li className='link-items'>
                        <a href="#" className='link-item-a'>våra kurser</a>
                    </li>
                    <li className='link-items'>
                        <a href="#" className='link-item-a'>Kontakta Oss</a>
                    </li>
                    <li className='link-items'>
                        <a href="#" className='link-item-a'>Om Oss</a>
                    </li>
                    <li className='link-items'>
                        <a href="#" className='link-item-a'>LIA</a>
                    </li>
                </ul>
            </div>
            <div>
                <button>Log in</button>
                <button>Sign up</button>
            </div>
        </nav>
    )
}