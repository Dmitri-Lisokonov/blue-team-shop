import { useEffect } from 'react';
import { Product } from '../../models/Product';
import './ProductCard.css';

const ProductCard = (props: { product: Product }) => {
    useEffect(() => console.log('hello from card'), [])
    return (
        <div className="card">
            <div className="container">
                <h4><b>{props.product.name}</b></h4>
                <p>{props.product.description}</p>
            </div>
        </div>
    )
}

export default ProductCard;