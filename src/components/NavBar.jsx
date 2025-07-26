
import { NavLink } from 'react-router-dom'
import logo from '../assets/quizAppLogo2.png'
import './NavBarStyle.css'

function NavBar() {
  return (
        <div className="navbar">
            <div className='logo'><img src={logo} alt="" /></div>
            <div className='navlinks'>
                <NavLink className='navlink' to='/'>Home</NavLink>
                <NavLink className='navlink' to='/Quiz'>Quiz</NavLink>
                <NavLink className='navlink' to='/About'>About</NavLink>
            </div>
        </div>
    )
}

export default NavBar
