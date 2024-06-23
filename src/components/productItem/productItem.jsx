
import React from 'react';
import { ProductDetails } from '../productDetails/productDetails.jsx';
import contents from '../../content.js';
import "./productItem.css"

export default function ProductPage() {
    return (
        <div className='ProductPage'>
            {contents.map(content => (
                <ProductDetails 
                    key={content.id}
                    image={content.image}
                    name={content.name}
                    price={content.price}
                    totalSales={content.totalSales}
                    skills={content.skills}
                    rating={content.rating}
                />
            ))}
        </div>
    );
}
