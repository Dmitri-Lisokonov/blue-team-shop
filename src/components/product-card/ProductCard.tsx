import { Product } from '../../models/Product';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './ProductCard.css';

const ProductCard = (props: { product: Product }) => {
    return (
        <div className="card">
            <div className="container" >
                <div className="product-header">
                    <h4><b>{props.product.name}</b></h4>
                    <img className="product-img" src="https://d3a1v57rabk2hm.cloudfront.net/callnumber/betterman_mobile-copy-0/images/product_placeholder.jpg?ts=1581594912&host=call-number.cratejoy.com"></img>
                </div>
                <div className="product-body">
                    <div className="product-info">
                        {props.product.description}
                    </div>
                    <div className="product-price">
                        €{props.product.price}
                    </div>
                    <div>
                        <AddShoppingCartIcon />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ProductCard;