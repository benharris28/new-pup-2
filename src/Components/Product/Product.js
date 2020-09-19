import React, {Component} from 'react';
import VariantSelector from '../VariantSelector/VariantSelector';
import { ShopContext } from '../../context/ShopContext'
import { Link } from 'react-router-dom'
import { Layout, Button, Collapse } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

class Product extends Component {
    static contextType = ShopContext;
  constructor(props) {
    super(props);

    let defaultOptionValues = {};
    this.props.product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });
    this.state = { selectedOptions: defaultOptionValues };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.findImage = this.findImage.bind(this);
  }

  findImage(images, variantId) {
    const primary = images[0];

    const image = images.filter(function (image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  }

  handleOptionChange(event) {
    const target = event.target
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;

    const selectedVariant = this.context.client.product.helpers.variantForOptions(this.props.product, selectedOptions)

    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image
    });
  }

  handleQuantityChange(event) {
    this.setState({
      selectedVariantQuantity: event.target.value
    });
  }

  render() {

    const { Panel } = Collapse;
    const dropdownIcon = <PlusCircleOutlined />
      console.log(this.context)
    let variantImage = this.state.selectedVariantImage || this.props.product.images[0]
    let variant = this.state.selectedVariant || this.props.product.variants[0]
    let variantQuantity = this.state.selectedVariantQuantity || 1
    let variantSelectors = this.props.product.options.map((option) => {
      return (
        <VariantSelector
          handleOptionChange={this.handleOptionChange}
          key={option.id.toString()}
          option={option}
        />
      );
    });
    return (
      <div className="shop-product-card">
          <div className="shadow-box">
          <Link to={`/product/${this.props.product.id}`} style={{ textDecoration: 'none' }}>
          <div className="product-item">
            <div className="shop-product-image-box">
                {this.props.product.images.length ? <img className="shop-product-image" src={variantImage.src} alt={`${this.props.product.title} product shot`}/> : null}
            </div>
            <div className="shop-product-clickable-details">
                <p className="shop-product-title bold-title">{this.props.product.title}</p>
            </div>

            </div>
        
        
        </Link>
        <div className="price-box">
            <p className="shop-product-detail">${variant.price}</p>
        </div>
        <div className="shop-variant-container">
            
        </div>
        <div className="shop-product-quick-add-box">

                                                

<Collapse 
    bordered={false}
    expandIcon={({ isActive }) => <PlusCircleOutlined rotate={isActive ? 90 : 0} />}
    ghost>
    <Panel header="Quick Add" key="2">
        <div>
        {variantSelectors}
        <label className="Product__option">
          Quantity
          <input min="1" type="number" defaultValue={variantQuantity} onChange={this.handleQuantityChange}></input>
        </label>
        <button className="Product__buy button" onClick={() => this.context.addItemToCheckout(variant.id, variantQuantity)}>Add to Cart</button>
          
        </div>
    </Panel>
</Collapse>

</div>
        
        
       
      </div>
      </div>
    );
  }
}

export default Product;
