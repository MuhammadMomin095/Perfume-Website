import { NextRequest, NextResponse } from 'next/server';
import { productsData } from '../../../data/products'; // Static data

export async function GET(req: NextRequest) {
  // Extracting ID from URL (if needed)
  const { pathname } = req.nextUrl;
  const idString = pathname.split('/').pop();  // Extract ID from URL

  if (!idString) {
    return NextResponse.json({ message: 'ID not provided in the URL' }, { status: 400 });  // Handle case where ID is missing
  }

  // Parse the ID and ensure it's a valid number
  const id = parseInt(idString, 10);

  if (isNaN(id)) {
    return NextResponse.json({ message: 'Invalid ID format' }, { status: 400 });  // Handle invalid ID format
  }

  try {
    const product = productsData.find((p) => p.id === id);  // Find product by ID

    if (!product) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });  // Return error if not found
    }

    return NextResponse.json(product);  // Return the product details if found
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching product data' }, { status: 500 });  // Handle any server errors
  }
}
