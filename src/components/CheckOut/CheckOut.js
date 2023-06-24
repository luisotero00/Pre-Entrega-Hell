import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../services/firebase/firebaseConfig"
import { collection, addDoc } from "firebase/firestore"
import Cart from "../Cart/Cart"
import '../CheckOut/CheckOut.css';

const Checkout = () => {
  const { cart, clearCart, total, totalQuantity } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfimarcion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");


  const manejadorSubmit = (event) => {
    event.preventDefault();

    //Validar que los campos esten completos: 
    if (!nombre || !email || !emailConfimarcion) {
      setError("Por favor complete los campos");
      return;
    }

    //Validamos que los campos del email coincidan
    if (email !== emailConfimarcion) {
      setError("Los campos del email no coinciden");
      return;
    }

    //Creamos el objeto de la orden: 

    const orden = {
      items: cart.map(producto => ({

      })),

      nombre,
      email
    };

    //Guardamos la orden en la base de datos: 
    addDoc(collection(db, "order"), orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
        clearCart();
      })
      .catch((error) => {
        console.log("Error al crear la orden", error);
        setError("Se produjo un error al crear la orden, vuelva más tarde");
      })



  }



  return (
    <>
      <div id="container" className="Check">
        <h1>&bull; Checkout &bull;</h1>
        <div class="underline">
        </div>

        <form onSubmit={manejadorSubmit} id="contact_form" className="formulario">


          <h3>Cantidad Final: {totalQuantity} Productos</h3>

          <div className="name">
            <label htmlFor="name"></label>
            <input type="text" placeholder="Nombre" name="name" id="name_input" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div className="email">
            <label htmlFor="email"></label>
            <input type="text" placeholder="Email" name="email" id="email_input" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="telephone">
            <label htmlFor="emailconfirmacion"></label>
            <input type="email" placeholder="Email Confirmación" name="emailconfirmacion" id="email_input" value={emailConfimarcion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
          </div>

          {
            error && <p style={{ color: "red" }}> {error} </p>
          }

          <button className="submit" type="submit" value="Send Message" id="form_button"> Finalizar Orden </button>

          {
            ordenId && (
              <strong>¡Gracias por tu compra! Tu número de orden es: {ordenId} </strong>
            )
          }
        </form>
      </div>
    </>
  )
}

export default Checkout