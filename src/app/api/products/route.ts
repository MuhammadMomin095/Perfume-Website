import { NextResponse } from 'next/server';




// Products array (should only be declared once)
const products = [
  { id: 1, name: 'Luxurious Elixir Rough',   price: 220.00, image: '/shop/1.png' },
  { id: 2, name: 'The Golden Legacy',   price: 160.00, image: '/shop/2.png' },
  { id: 3, name: 'Luxurious Elixir',   price: 250.00, image: '/shop/3.png' },
  { id: 4, name: 'Luxurious Essence',  price: 260.00, image: '/shop/4.png' },
  { id: 5, name: 'Aurum Aura',   price: 200.00, image: '/shop/5.png' },
  { id: 6, name: 'Gleaming Gilt',   price: 160.00, image: '/shop/6.png' },
  { id: 7, name: 'Gilded Elixir Rough',   price: 170.00, image: '/shop/7.png' },
  { id: 8, name: 'Golden Luminary',   price: 120.00, image: '/shop/8.png' },
  { id: 9, name: 'Decadent Opal',  price: 160.00, image: '/shop/9.png' },
  { id: 10, name: 'Gilded Elixir',  price: 200.00, image: '/shop/10.png' },
  { id: 11, name: 'Glamourous Gilt',  price: 160.00, image: '/shop/11.png' },
  { id: 12, name: 'Luxury Enigma',  price: 190.00, image: '/shop/12.png' },
];



// API route for fetching all products
export async function GET() {
  return NextResponse.json(products);
}
 