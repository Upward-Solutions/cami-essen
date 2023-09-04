import { ProductLine } from '@/models/ProductLine';
import { NEXT_PUBLIC_API_URL } from '../../config';

export const getProductsByPath = async (path: string): Promise<Product[]> => {
  const response = await fetch(`${NEXT_PUBLIC_API_URL}/products/${path}`, {
    cache: 'no-cache',
  });

  return await response.json();
};

export const getProductLines = async (): Promise<ProductLine[]> => {
  const response = await fetch(`${NEXT_PUBLIC_API_URL}/productLines`, {
    cache: 'no-cache',
  });

  return await response.json();
};
