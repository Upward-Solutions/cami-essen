import React from 'react';
import ProductLines from '@/../ProductLinesMock.json';
import Link from 'next/link';
import { ProductLine } from '@/models/ProductLine';

export default function ProductLinesPage() {
  const data: ProductLine[] = ProductLines;

  return (
    <main className='h-[1280px] overflow-hidden'>
      <div className='flex justify-center w-full h-full mt-12'>
        <div className='flex flex-col tablet:max-w-3xl w-full'>
          <h2 className='mt-6'>Explorá nuestras lineas</h2>
          <div className='grid grid-cols-3 gap-4'>
            {data.map((item) => {
              return (
                <Link
                  href={`./lineas/${item.path}/productos`}
                  className='bg-primary p-4 rounded'
                >
                  <img src={item.image} />
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
