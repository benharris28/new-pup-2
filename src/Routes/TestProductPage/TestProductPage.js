import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import { Layout, Button, Row, Col} from 'antd';
import Loading from '../../Components/Loading/Loading'



const ProductPage = () => {
    let { id } = useParams()
    const { fetchProductWithId, addItemToCheckout, product } = useContext(ShopContext)
    // const [product, setProduct] = useState(null)
    // async function fetchData() {
    //     const fetchedProduct = await fetchProductWithId(id)
    //     setProduct(fetchedProduct)
    // }

    useEffect(() => {
        fetchProductWithId(id)
        
        // fetchData()
        return () => {
            // setProduct(null)
        };
    }, [ fetchProductWithId, id])

    if (!product.title) return <Loading />
    
    return (
        <div>
            <Row>
                <Col>
                    <div>
                    {product.images[0].src}

                    </div>
                </Col>
                <Col>
                    <p>{product.title}</p>
                    <p>${product.variants[0].price}</p>
                    <p>{product.description}</p>
                    <Button onClick={() => addItemToCheckout(product.variants[0].id, 1)}>Add To Cart</Button>
                </Col>
            </Row>
        </div>
    )
}

export default ProductPage