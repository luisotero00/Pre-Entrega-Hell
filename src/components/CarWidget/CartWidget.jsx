import { useContext } from "react";
import cart from "./assets/cart.png";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  console.log({ totalQuantity });
  return (
    <Link
      to="/cart"
      className="CartWidget"
      style={{ display: totalQuantity > 0 ? "block" : "none" }}
    >
      <img className="CartImg" src={cart} alt="cart-widget" />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;
