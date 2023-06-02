

const CartItem = ({  name, img, price, total }) => {
    return (
        <article className="CardCart">
            <header className="Header"> 
                <h2 className="CartHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="CartImg"/>
            </picture>
            <section>
                <p>
                    Precio por unidad: ${price}
                </p>
                <p>
                    Total: ${total}
                </p>
            </section>
        </article>
    )
}

export default CartItem