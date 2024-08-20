import { products } from './data/products';

export type ProductFilters = {
  category?: 'first' | 'second' | 'third';
  maxPrice?: number;
  search?: string;
};

export const fetchProducts = async (options?: ProductFilters) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  let filteredProducts = products;

  if (options?.category) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.category === options.category;
    });
  }

  if (options?.maxPrice) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.price <= (options.maxPrice as number);
    });
  }

  if (options?.search) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.name.toLowerCase().includes(options.search!.toLowerCase());
    });
  }

  return filteredProducts;
};
