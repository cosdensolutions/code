import { useQuery } from '@tanstack/react-query';
import { fetchProducts, ProductFilters } from './api/products';
import ProductList from './components/ProductList/ProductList';
import ProductListFilters from './components/ProductList/ProductListFilters';
import { useState } from 'react';

export default function App() {
  const [search, setSearch] = useState<ProductFilters['search']>();
  const [category, setCategory] = useState<ProductFilters['category']>();
  const [maxPrice, setMaxPrice] = useState<ProductFilters['maxPrice']>();

  const { data, isFetching } = useQuery({
    queryKey: ['products', { category, maxPrice, search }],
    queryFn: () => fetchProducts({ category, maxPrice, search }),
  });

  return (
    <div className="flex flex-col gap-2">
      <div>
        <h1 className="text-4xl font-bold">Products</h1>
      </div>
      <ProductListFilters
        onChange={(filters) => {
          setCategory(filters.category);
          setMaxPrice(filters.maxPrice);
          setSearch(filters.search);
        }}
      />
      <div>
        {data && <ProductList products={data} />}
        {isFetching && <p>Loading...</p>}
      </div>
    </div>
  );
}
