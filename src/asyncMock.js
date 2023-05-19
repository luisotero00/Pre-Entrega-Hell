const products = [
    {
        id: '1',
        name: 'Jordan 1 Travis Scott',
        price: 1200,
        category: 'jordan',
        img: 'https://www.sneakerfiles.com/wp-content/uploads/2019/03/travis-scott-air-jordan-1-high-og-CD4487-100-release-info.jpg',
        stock: 10,
        description: 'Descripcion zapato'

    },

    {
        id: '2',
        name: 'Jordan 1 Off White Chicago',
        price: 1800,
        category: 'jordan',
        img: 'https://cdn.shopify.com/s/files/1/0280/7070/7271/products/off-white-air-jordan-1-the-ten-AA3834-101-4_a8dd5854-cf63-4a8a-a496-72f4294037c1.jpg?v=1651077347',
        stock: 12,
        description: 'Descripcion zapato'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    })
}