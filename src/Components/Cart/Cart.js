import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Card, Col, Row, Button, Drawer, Avatar } from 'antd';
import {ShopContext} from '../../context/ShopContext'

const Cart = () => {

    const { isCartOpen, closeCart, checkout } = useContext(ShopContext)

    const [visible, setVisible] = useState(false);
  
    const showDrawer = () => {
    setVisible(true);
  };
  
  const onClose = () => {
    setVisible(false);
  };

  const drawerZIndex = visible ? 1000 : -1;

    if (checkout.lineItems) {
        return (
            

          
          <div className="shop-cart">
            <Drawer 
               
                placement="right"
                visible={isCartOpen ? showDrawer : onClose}
                onClose={closeCart}
                closable={true}
                zIndex={drawerZIndex}
                
                
                >
                <div>
                   
                    <Row>
                        {checkout.lineItems.length < 1 ?
                            <Row>
                                <Col><p>Cart Is Empty</p></Col>
                            </Row>
                            :
                            <>
                                {checkout.lineItems && checkout.lineItems.map(item => (
                                    <Row key={item.id}>
                                        <Col>
                                            <div>
                                                <img src={item.variant.image.src} alt="item" />
                                            </div>
                                        </Col>
                                        <Col>
                                            <p>{item.title}</p>
                                            <p>{item.variant.title}</p>
                                            <p>{item.quantity}</p>
                                        </Col>
                                        <Col>
                                            <p>{item.variant.price}</p>
                                        </Col>
                                    </Row>
                                ))}
                            </>
                        }
                    </Row>
                    <Row>
                        <Link to={checkout.webUrl} target="_blank" rel="noopener noreferrer">
                            <Button>
                                Checkout
                            </Button>
                        </Link>
                    </Row>
                </div>
            </Drawer>
            </div>
        )
    }

    return null

}

export default Cart