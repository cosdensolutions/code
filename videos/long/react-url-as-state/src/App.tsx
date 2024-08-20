import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { fetchProducts, ProductFilters } from './api/products';
import ProductList from './components/ProductList/ProductList';
import ProductListFilters from './components/ProductList/ProductListFilters';
import { useProductFilters } from './hooks/useProductFilters';

export default function App() {
  const { search, category, maxPrice } = useProductFilters();

  const { data, isFetching } = useQuery({
    queryKey: ['products', { category, maxPrice, search }],
    queryFn: () => fetchProducts({ category, maxPrice, search }),
  });

  return (
    <div className="flex flex-col gap-2">
      <div>
        <h1 className="text-4xl font-bold">Products</h1>
      </div>
      <ProductListFilters />
      <div>
        {data && <ProductList products={data} />}
        {isFetching && <p>Loading...</p>}
      </div>
    </div>
  );
}
