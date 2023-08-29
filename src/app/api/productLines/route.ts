import { NextResponse } from 'next/server';
import ProductLines from '@/../ProductLinesMock.json';
import { ProductLine } from '@/models/ProductLine';

export async function GET() {
  const data: ProductLine[] = ProductLines;

  return NextResponse.json(data);
}
