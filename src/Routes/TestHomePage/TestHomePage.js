import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import Product from '../../Components/Product/Product'
import { Link } from 'react-router-dom'
import { Layout, Button, Row, Col, Collapse } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import Loading from '../../Components/Loading/Loading'
import GearScenesSlider from '../../Components/GearScenesSlider/GearScenesSlider'
import dog_wellness_dash from '../../Assets/dog_wellness_dash.png'



const { Panel } = Collapse;
const dropdownIcon = <PlusCircleOutlined />



const TestHomePage = () => {



    const [format, setFormat] = useState()
    const [choice, setChoice] = useState(0)
    const [windowSize, setWindowSize] = useState()
    const [filterChoice, setFilterChoice] = useState()
    const [dogType, setDogType] = useState('Adult')
    const { fetchAllProducts, products, addItemToCheckout, addVariantToCart, client } = useContext(ShopContext)


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
    console.log(filterChoice)

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
                    Shopping for: {dogType}
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

            <div className="content-section white low-padding">


                <div className="content-container">
                    <div className="title-center">
                        <h2 className="shop-title">Snapshots</h2>
                        <div className="hero-details">
                            Stop searching product-by-product. Check out our expert-assembled bundles of everything your doggo will need for each part of their day
</div>
                    </div>
                    <div>
                        <GearScenesSlider />
                    </div>
                </div>
            </div>

            <div className="content-section white low-padding">


                <div className="content-container">
                    <div className="title-left">
                        <h1 className="shop-title">
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
                                    <div>
                                        <p className="filter-heading">Filters</p>
                                    </div>
                                    <div className="category-item" onClick={() => setFilterChoice()}>
                                        All
                            </div>
                                    <div className="category-item" onClick={() => setFilterChoice("Leash")}>
                                        Leash
                            </div>
                                    <div className="category-item" onClick={() => setFilterChoice("Collar")}>
                                        Collar
                            </div>
                                    <div className="category-item" onClick={() => setFilterChoice("Harness")}>
                                        Harness
                            </div>

                                    <div className="category-item" onClick={() => setFilterChoice("Grooming")}>
                                        Grooming Supplies
                            </div>
                                    <div className="category-item" onClick={() => setFilterChoice("Bowl")}>
                                        Mealtime
                            </div>
                                    <div className="category-item" onClick={() => setFilterChoice("Beds")}>
                                        Beds and Crates
                            </div>
                                    <div className="category-item" onClick={() => setFilterChoice("Toys")}>
                                        Toys
                            </div>
                                    <div className="category-item" onClick={() => setFilterChoice("Apparel")}>
                                        Apparel
                            </div>
                                    <div className="category-item" onClick={() => setFilterChoice("Essentials")}>
                                        Everyday essentials
                            </div>
                                </div>
                            }

                           
                            <div className="product-loop">
                                {filterChoice ? products.filter(p => p.productType == filterChoice).map((product) => {
                                    return (
                                <Product
                                    addVariantToCart={addVariantToCart}
                                 
                                    key={product.id.toString()}
                                    product={product}
                                  />
                                    )
                                }) : 
                                products.map((product) => {
                                    return (
                                <Product
                                    addVariantToCart={addVariantToCart}
                                 
                                    key={product.id.toString()}
                                    product={product}
                                  />
                                    )
                                })}
                            </div>
                        
                        </div>
                    </div>
                </div>






            </div>





        </div>
    )
}

export default TestHomePage