import { NextRequest, NextResponse } from 'next/server';
import Products from '@/../ProductsMock.json';

export async function GET(request: NextRequest) {
  const productLine = request.nextUrl.pathname.split('/').filter(Boolean)[2];

  const data: Product[] = Products.filter(
    (product) => product.productLine === productLine
  );

  return NextResponse.json(data);
}
