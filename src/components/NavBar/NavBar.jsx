import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CarWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to ='/'>
                <h3>Hell Shoes</h3>
            </Link>
            <div>
                <NavLink to={`/category/jordan`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Jordan</NavLink>
                <NavLink to={`/category/adidas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Adidas</NavLink>
                <NavLink to={`/category/nike`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Nike</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar