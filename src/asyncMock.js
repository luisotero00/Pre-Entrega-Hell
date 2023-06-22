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
    },

    {
        id: '3',
        name: 'Jordan 1 Balvin',
        price: 800,
        category: 'jordan',
        img: 'https://cdn-3.expansion.mx/dims4/default/3d9f328/2147483647/strip/true/crop/800x550+0+0/resize/600x413!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F75%2F56%2F434f445841da88068c4c51a18284%2Fj-balvin-air-jordan.jpg',
        stock: 8,
        description: 'Descripcion zapato'
    },
    {
        id: '4',
        name: 'Jordan 4 Offwhite',
        price: 800,
        category: 'jordan',
        img: 'https://image.goat.com/attachments/product_template_additional_pictures/images/083/344/816/medium/603678_08.jpg.jpeg?1673287551',
        stock: 8,
        description: 'Descripcion zapato'
    },
    {
        id: '5',
        name: 'Yeezy 350 V2',
        price: 200,
        category: 'adidas',
        img: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F05%2Fyeezy-boost-350-v2-triple-black-colorway-closer-look-on-feet-0.jpg?w=960&cbr=1&q=90&fit=max',
        stock: 15,
        description: 'Descripcion zapato'
    },
    {
        id: '6',
        name: 'Yeezy 700 V3 Azael',
        price: 280,
        category: 'adidas',
        img: 'https://i.ebayimg.com/images/g/ibwAAOSwkbNi9EtN/s-l1600.jpg',
        stock: 15,
        description: 'Descripcion zapato'
    },
    {
        id: '7',
        name: 'Adidas Ozweego Black',
        price: 150,
        category: 'adidas',
        img: 'https://sneakerbardetroit.com/wp-content/uploads/2019/02/adidas-Ozweego-adiPRENE-Black-Release-Date.jpg',
        stock: 12,
        description: 'Descripcion zapato'
    },
    {
        id: '8',
        name: 'Adidas Prophere Onix',
        price: 110,
        category: 'adidas',
        img: 'https://product.hstatic.net/200000384421/product/adidas-originals-prophere-onix-g__1__fa4c010d3f0a420291603070684a7b33.png',
        stock: 14,
        description: 'Descripcion zapato'
    },
    {
        id: '9',
        name: 'Air Force 1',
        price: 80,
        category: 'nike',
        img: 'https://images.complex.com/complex/images/c_scale,f_auto,q_auto,w_1920/fl_lossy,pg_1/iot1dbjmzr7z6kfkoxrb/nike-air-force-1-lead-1?fimg-ssr-default',
        stock: 8,
        description: 'Descripcion zapato'
    },
    {
        id: '10',
        name: 'Air Max 97',
        price: 80,
        category: 'nike',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Air_Max_97.jpg/1200px-Air_Max_97.jpg',
        stock: 20,
        description: 'Descripcion zapato'
    },
    {
        id: '11',
        name: 'Air Max 90',
        price: 150,
        category: 'nike',
        img: 'https://assets-global.website-files.com/6179bd8bf2c3bb015c1fa461/63ca97e82baf83724dbce167_151.jpg',
        stock: 10,
        description: 'Descripcion zapato'
    },
    {
        id: '12',
        name: 'Air Max 95',
        price: 130,
        category: 'nike',
        img: 'https://sneakernews.com/wp-content/uploads/2023/04/nike-air-max-95-gs-black-red-FQ2430-001-1.jpg',
        stock: 12,
        description: 'Descripcion zapato'
    },
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