import React from 'react';
import Link from 'next/link';
import { getProductLines } from '@/services/backOffice';

export default async function ProductLinesPage() {
  const productLines = await getProductLines();

  const renderProductLines = () => {
    return productLines.map((productLine) => (
      <Link
        href={`./lineas/${productLine.path}/productos`}
        className='flex flex-col gap-4 bg-card-background hover:bg-card-background-hover p-4 shadow-lg group rounded'
      >
        <div className='h-full w-full relative'>
          <img
            className='w-full object-cover aspect-square'
            alt={productLine.title}
            src={productLine.image}
          />
        </div>
        <div>
          <h2 className='text-headlines font-semibold'>{productLine.title}</h2>
          <span className='text-text group-hover:text-primary text-sm font-semibold group-hover:underline underline-offset-2'>
            Ver productos
          </span>
        </div>
      </Link>
    ));
  };

  return (
    <main className='h-fit min-h-screen overflow-hidden bg-background'>
      <div className='flex justify-center w-full h-full my-16'>
        <div className='flex flex-col tablet:max-w-3xl w-full'>
          <h1 className='mt-6'>Explorá nuestras lineas</h1>
          <div className='grid grid-cols-3 gap-4'>{renderProductLines()}</div>
        </div>
      </div>
    </main>
  );
}
