import React from 'react';
import { getProductLines, getProductsByPath } from '@/services/backOffice';
import Card from '@/components/Card/Card';
import ProductData from '@/components/ProductData/ProductData';
import Button from '@/components/Button/Button';

interface Props {
  params: {
    path: string;
  };
}

export default async function ProductsPage({ params }: Props) {
  const products = await getProductsByPath(params.path);
  const productLines = await getProductLines();
  const productLine = productLines.find(
    (productLine) => productLine.path === params.path
  );

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
        <div className='flex flex-col tablet:max-w-3xl w-full gap-4'>
          <h1 className='text-headlines font-semibold text-xl'>
            {productLine!.title} Page
          </h1>
          <div className='grid grid-cols-2 gap-4'>{renderProductCards()}</div>
          <div className='flex justify-between mt-4'>
            <Button url='/compra/lineas'>Volver</Button>
            <Button>Siguiente</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
