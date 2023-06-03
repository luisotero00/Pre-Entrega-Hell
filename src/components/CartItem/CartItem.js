import { Link } from "react-router-dom"


const CartItem = ({ id, name, img, price, stock, quantity }) => {

    return (
        <div className="Body">
            <article className="CardItem">
                <header className="Header">
                    <h2 className="ItemHeader">
                        {name}
                    </h2>
                </header>
                <picture>
                    <img src={img} alt={name} className="ItemImg" />
                </picture>
                <section>
                    <p className="Info">
                        Precio : ${price}
                    </p>
                    <p className="Info">
                        Unidades seleccionadas: {quantity}
                    </p>
                </section>
                <footer className="ItemFooter">
                    <Link to={`/`} className="Option">Agregar mas!</Link>
                </footer>
            </article>
        </div>

    )
}

export default CartItem