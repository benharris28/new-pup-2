import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'

import { Link } from 'react-router-dom'
import { Layout, Button, Row, Col } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import Loading from '../../Components/Loading/Loading'
import GearScenesSlider from '../../Components/GearScenesSlider/GearScenesSlider'
import dog_wellness_dash from '../../Assets/dog_wellness_dash.png'


const TestHomePage = () => {



    const [format, setFormat] = useState()
    const [choice, setChoice] = useState(0)
    const [windowSize, setWindowSize] = useState()
    const [dogType, setDogType] = useState('Adult')
    const { fetchAllProducts, products, addItemToCheckout } = useContext(ShopContext)

    // Window Width 
    const getWidth = () => window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;




    function useCurrentWidth() {
        // save current window width in the state object
        let [width, setWidth] = useState(getWidth());

        // in this case useEffect will execute only once because
        // it does not have any dependencies.

        useEffect(() => {
            const resizeListener = () => {
                // change width from the state object
                setWidth(getWidth())
            };
            // set resize listener
            window.addEventListener('resize', resizeListener);

            // clean up function
            return () => {
                // remove resize listener
                window.removeEventListener('resize', resizeListener);
            }
        }, [])

        return width;
    }

    const width = useCurrentWidth();
    console.log(width)

    useEffect(() => {
        fetchAllProducts()
        return () => {
            // cleanup
        };
    }, [fetchAllProducts])

    if (!products) return <Loading />

    console.log(products)
    return (
        <div>
            <div className="content-section light-grey">
                <div className="content-container">

                    <div className="title-centre">


                        <h1 className="display-heading">
                            Doggo Shop
                            </h1>
                        <div className="hero-details">
                            Everything you need for your best friend - in one place
                        </div>



                    </div>

                </div>
            </div>

            <div className="border white">
            <div className="filter-title center">
                        Shopping for:
                            </div>

            </div>

            <div className="content-section light-grey low-padding">


                <div className="content-container">
                    
                    <div className="filter-loop">

                        <div className={dogType === "Puppy" ? "dog-type-filter-card selected" : "dog-type-filter-card"} onClick={() => setDogType("Puppy")}>
                            <div className="dog-type-filter-label">
                                <div class="dog-type-filter-input" type="radio" name="puppy" />


                                <div className="dog-type-filter-name">Puppy</div>
                            </div>
                        </div>
                        <div className={dogType === "Adult" ? "dog-type-filter-card selected" : "dog-type-filter-card"} onClick={() => setDogType("Adult")}>
                            <label className="dog-type-filter-label">
                                <input class="dog-type-filter-input" type="radio" name="puppy" />


                                <div className="dog-type-filter-name">Adult</div>
                            </label>
                        </div>
                        <div className={dogType === "Senior" ? "dog-type-filter-card selected" : "dog-type-filter-card"} onClick={() => setDogType("Senior")}>
                            <label className="dog-type-filter-label">
                                <input class="dog-type-filter-input" type="radio" name="puppy" />


                                <div className="dog-type-filter-name">Senior</div>
                            </label>
                        </div>


                    </div>


                </div>
            </div>

            <div className="content-section white">


                <div className="content-container">
                    <div className="title-center">
                        <h2 className="display-heading">Snapshots</h2>
                        <div className="hero-details">
                            Stop searching product-by-product. Check out our expert-assembled bundles of everything your doggo will need for each part of their day
</div>
                    </div>
                    <div>
                        <GearScenesSlider />
                    </div>
                </div>
            </div>

            <div className="content-section white">


                <div className="content-container">
                    <div className="title-left">
                        <h1 className="display-heading">
                            Shop
                            </h1>
                        <div className="hero-details">
                            Everything you need for your best friend - in one place
                        </div>
                    </div>
                    {width < 1000 &&
                        <div className="category-mobile-filter">
                            <h3 className="filter-title">All Products</h3>
                            <div className="mobile-filter-button-container">
                                <Button
                                >
                                    Filters
                                            </Button>
                            </div>
                        </div>
                    }
                    <div className="filter-container">



                        <div className="shop-container">
                            {(width > 1000 || width === 1000) &&
                                <div className="category-loop">
                                    <div className="category-item">
                                        Leashes
                            </div>
                                    <div className="category-item">
                                        Collars
                            </div>
                                    <div className="category-item">
                                        Harnesses
                            </div>

                                    <div className="category-item">
                                        Grooming Supplies
                            </div>
                                    <div className="category-item">
                                        Mealtime
                            </div>
                                    <div className="category-item">
                                        Beds and Crates
                            </div>
                                    <div className="category-item">
                                        Toys
                            </div>
                                    <div className="category-item">
                                        Apparel
                            </div>
                                    <div className="category-item">
                                        Everyday essentials
                            </div>
                                </div>
                            }

                            <div className="product-loop">
                                {products.map(product => (
                                    <div className="shop-product-card" key={product.id}>
                                        <div className="shadow-box">
                                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                                            <div className="product-item">
                                                <div className="shop-product-image-box">
                                                    <img className="shop-product-image" src={product.images[0].src} alt="product" />

                                                </div>
                                                <div className="shop-product-clickable-details">
                                                    <p className="shop-product-title bold-title">{product.title}</p>
                                                    
                                                    
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="price-box">
                                            <p className="shop-product-detail">${product.variants[0].price}</p>
                                        </div>
                                        <div className="shop-variant-container">

                                        </div>
                                        <div className="shop-product-quick-add-box">
                                           
                                                            <Button className="shop-product-quick-add" onClick={() => addItemToCheckout(product.variants[0].id, 1)}>
                                                                <p className="bold-title button-title">Quick add</p>
                                                                <PlusCircleOutlined className="quick-add-icon" />
                                                            </Button>
                                                        <div className="size-picker-container">
                                                        </div>
                                                        </div>
                                        </div>
                                    </div>
                                ))}

                               


                            </div>
                        </div>
                    </div>
                </div>






            </div>



           

        </div>
    )
}

export default TestHomePage