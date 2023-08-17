import Button from '@/components/Button/Button';

export default function HomePage() {
  return (
    <main className='relative h-screen overflow-hidden'>
      <div className='absolute z-10 flex items-center justify-center w-full h-full mt-6'>
        <div className='flex flex-col items-center gap-8 desktop:max-w-3xl'>
          <h1 className='text-4xl font-bold text-headlines'>
            Las mejores ollas essen
          </h1>
          <p className='text-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            euismod non massa non suscipit. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Aenean eu
            justo eu mauris tristique tincidunt ut sed turpis. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Ut pellentesque vehicula nunc sed viverra. Aliquam erat
            volutpat. Praesent eu dolor non lacus ultricies mollis et non
            sapien.
          </p>
          <div className='grid w-full grid-cols-2 gap-4'>
            <Button variant='secondary'>Formar parte</Button>
            <Button variant='primary'>Quiero mi Essen</Button>
          </div>
        </div>
      </div>
      <div className='absolute w-full h-full bg-background/50'></div>
      <img
        src='/background.webp'
        alt='Cocina con distintos utencilios y sartén essen'
      />
    </main>
  );
}
