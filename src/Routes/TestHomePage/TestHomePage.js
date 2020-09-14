import React, { useContext, useEffect }  from 'react'
import { ShopContext } from '../../context/ShopContext'

import { Link } from 'react-router-dom'
import { Layout, Button, Row, Col} from 'antd';
import Loading from '../../Components/Loading/Loading'


const TestHomePage = () => {
    const {fetchAllProducts, products} = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
        return () => {
            // cleanup
        };
    }, [fetchAllProducts])

    if (!products) return <Loading />
    return (
        <div>
            <Row>
                {products.map(product => (
                    <Col key={product.id} size="3" >
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                            <div>
                                <div>
                                 
                                    
                                </div>
                                {product.title}
                                ${product.variants[0].price}
                            </div>
                        </Link>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default TestHomePage