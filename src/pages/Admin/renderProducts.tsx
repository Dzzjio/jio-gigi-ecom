import { useEffect, useState } from "react"
import { ProductI } from "../../types/product.interface"
import productServices from "../../services/ProductServices"
import Product from "./product"

const RenderProducts = () => {
    const [products, setProducts] = useState<ProductI[]>([])

    useEffect(() => {
        productServices.allProducts({page: 1, pageSize: 1000}).then(({data}) => {
            
            setProducts(data.products)
        })
    }, [])
    return (
        <div>
            {products.map((product) => (
                <Product setProducts={setProducts} product={product}/>
            ))}
        </div>
    )
}

export default RenderProducts