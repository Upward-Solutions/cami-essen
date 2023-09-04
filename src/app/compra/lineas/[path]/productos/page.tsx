import React from 'react';
import { getProductsByPath } from '@/services/backOffice';
import Card from '@/components/Card/Card';
import ProductData from '@/components/ProductData/ProductData';

interface Props {
  params: {
    path: string;
  };
}

export default async function ProductsPage({ params }: Props) {
  const products = await getProductsByPath(params.path);

  const renderProductCards = () => {
    return products.map((product) => (
      <Card key={`key-${product.title}`}>
        <ProductData product={product} />
      </Card>
    ));
  };

  return (
    <main className='relative h-fit min-h-screen overflow-hidden bg-background'>
      <div className='flex justify-center w-full h-full my-16'>
        <div className='flex flex-col tablet:max-w-3xl w-full'>
          <h1>{params.path} Page</h1>
          <div className='grid grid-cols-2 gap-4'>{renderProductCards()}</div>
        </div>
      </div>
    </main>
  );
}
