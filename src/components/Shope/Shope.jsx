import React, { useEffect, useState } from 'react';
import './Shope.css'
import Product from '../Product/Product';

const Shope = () => {
    const [products,setProducts] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => setProducts(data))
        .catch(error => console.error('Fetch error:', error));
    }, []);
    
    return (
        <div className='shope-container'>
            <div className="product-container">
                {
                    products.map( product => <Product
                         product={product}
                         key={product.id}>
                         </Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Order summary</h2>
            </div>
            
        </div>
    );
};

export default Shope;