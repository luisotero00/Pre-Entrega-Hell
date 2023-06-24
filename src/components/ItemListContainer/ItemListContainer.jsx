import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {

        const queryProducts = categoryId ? query(collection(db, "products"), where("category", "==", categoryId)) : collection(db, 'products')

    
        getDocs(queryProducts).then((res) => {
            const nuevosProductos = res.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })
           setProducts(nuevosProductos)
        })
    }, [categoryId])


    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}
export default ItemListContainer