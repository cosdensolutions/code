import { ProductFilters } from '@/api/products';
import { useDebounce } from '@/hooks/useDebounce';
import { useEffect, useState } from 'react';

type ProductListFiltersProps = {
  onChange: (filters: ProductFilters) => void;
};

export default function ProductListFilters({
  onChange,
}: ProductListFiltersProps) {
  const [search, setSearch] = useState<ProductFilters['search']>();
  const debouncedSearch = useDebounce(search);

  const [category, setCategory] = useState<ProductFilters['category']>();
  const [maxPrice, setMaxPrice] = useState<ProductFilters['maxPrice']>();

  useEffect(() => {
    onChange({ category, maxPrice, search: debouncedSearch });
  }, [category, debouncedSearch, maxPrice]);

  return (
    <div className="flex flex-row gap-2">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products"
      />
      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value as ProductFilters['category'])
        }
      >
        <option value="first">First</option>
        <option value="second">Second</option>
        <option value="third">Third</option>
      </select>
      <select
        value={maxPrice}
        onChange={(e) =>
          setMaxPrice(e.target.value ? parseInt(e.target.value) : undefined)
        }
      >
        <option value="100">100</option>
        <option value="500">500</option>
        <option value="1000">1000</option>
      </select>
    </div>
  );
}
