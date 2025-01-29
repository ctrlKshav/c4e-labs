import React from 'react';
import ProductSection from '@/components/product-section';
import { mvps } from '@/data/productData';

export default function MVPS() {
  return (
    <div>
        {
            mvps.map((product, index) => (
                <ProductSection key={product.id} product={product} index={index}  />
            ))
        }
    </div>
  )
}
