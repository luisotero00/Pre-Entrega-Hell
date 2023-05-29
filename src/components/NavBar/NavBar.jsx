import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CarWidget/CartWidget"
import '../NavBar/NavBar.css'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <div className="titleNav">
                <Link to='/'>
                    <h3 >Hell Shoes</h3>
                </Link>
            </div>

            <div className="linksNav">
                <NavLink to={`/category/jordan`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Jordan</NavLink>
                <NavLink to={`/category/adidas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Adidas</NavLink>
                <NavLink to={`/category/nike`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Nike</NavLink>
            </div>
            <CartWidget className="cart" />
        </nav>
    )
}

export default NavBar