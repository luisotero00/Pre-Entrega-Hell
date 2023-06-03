import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import '../Cart/Cart.css'

const Cart = () => {
    const { cart, clearCart, totalQuantity } = useContext(CartContext);
  
    if (totalQuantity === 0) {
      return (
        <div>
          <h1>No hay items en el carrito</h1>
          <Link to="/" className="Option">
            Productos
          </Link>
        </div>
      );
    }
  
    // Calcular el total
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
    return (
      <div className="Cart">
        {cart.map((p) => (
          <CartItem key={p.id} {...p} />
        ))}
        <h3>Total: ${total}</h3>
        <button onClick={() => clearCart()} className="Button">
          Limpiar carrito
        </button>
        <Link to="/checkout" className="Option">
          Checkout
        </Link>
      </div>
    );
  };

  
  
  
  
  
  
  

export default Cart