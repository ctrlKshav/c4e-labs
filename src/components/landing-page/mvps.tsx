import React from 'react';
import ProductSection from '@/components/product-section';
import products from '@/data/productData';

export default function MVPS() {
  return (
    <div>
        {
            products.slice(0,3).map((product, index) => (
                <ProductSection key={product.id} product={product} index={index}  />
            ))
        }
    </div>
  )
}
