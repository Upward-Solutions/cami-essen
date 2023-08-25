import Button from '@/components/Button/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cami - Essen e-commerce',
  description: 'Las mejores ollas essen, al mejor precio',
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Olla', 'Essen', 'Ollas', 'Sartenes'],
  authors: [{ name: 'Camila' }],
  colorScheme: 'light',
  creator: 'Upward Solutions',
  publisher: 'Upward Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Cami - Essen e-commerce',
    description: 'Las mejores ollas essen, al mejor precio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cami - Essen e-commerce',
    description: 'Las mejores ollas essen, al mejor precio',
  },
};

export default function HomePage() {
  return (
    <main className='relative h-screen overflow-hidden'>
      <div className='absolute z-10 flex items-center justify-center w-full h-full mt-6'>
        <div className='flex flex-col items-center gap-8 p-4 tablet:p-0 tablet:max-w-3xl'>
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
          <div className='grid w-full grid-cols-1 gap-4 mobile:grid-cols-2'>
            <Button variant='secondary'>Formar parte</Button>
            <Button variant='primary' url='/compra/lineas'>
              Quiero mi Essen
            </Button>
          </div>
        </div>
      </div>
      <div className='relative w-full h-full'>
        <div className='absolute w-full h-full bg-background/75'></div>
        <img
          src='/background.webp'
          alt='Cocina con distintos utencilios y sartén essen'
          className='absolute object-cover w-full h-full -z-10'
        />
      </div>
    </main>
  );
}
