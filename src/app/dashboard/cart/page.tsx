import { WidgetItem } from "@/components";
import { Product, products } from "@/products/data/products";
import { ItemCard } from "@/shoppping-cart";
import { cookies } from "next/headers";


export const metadata = {
    title: 'Carrito de compras',
    description: 'SEO Title',
};

interface ProductInCart {
    product: Product,
    quantity: number
}

const gerProductsInCart = (cart: { [id: string]: number }): ProductInCart[] => {

    const productsInCart: ProductInCart[] = []

    for (const id of Object.keys(cart)) {
        const product = products.find(prod => prod.id === id)
        if (product) {
            productsInCart.push({ product, quantity: cart[id] })
        }
    }

    return productsInCart
}


export default function CartPage() {

    const cookieStore = cookies()
    const cart = JSON.parse(cookieStore.get('cart')?.value ?? '{}') as { [id: string]: number }
    const productsInCart = gerProductsInCart(cart)

    console.log(productsInCart);

    const totalToPay = productsInCart.reduce((prev, current) => (current.product.price * current.quantity) + prev, 0)

    return (
        <div>
            <h1 className='text-5xl'>Productos en el carrito</h1>
            <hr className='mb-4' />

            <div className='flex flex-col sm:flex-row gap-2 w-full'>

                <div className='flex flex-col sm:w-8/12 gap-3'>
                    {
                        productsInCart.map(product => {
                            if (product.quantity > 0) {
                                return (
                                    <ItemCard key={product.product.id} product={product.product} quantity={product.quantity} />
                                )
                            }
                        })
                    }
                </div>

                <div className='flex flex-col sm:w-4/12 w-full'>
                    <WidgetItem title='Total a pagar'>
                        <div className="mt-2 flex justify-center gap-4">
                            <h3 className="text-3xl font-bold text-gray-700">${(totalToPay * 1.15).toFixed(2)}</h3>
                        </div>
                        <span className="font-bold text-center text-gray-500">Impuestos 15%: ${(totalToPay * 0.15).toFixed(2)}</span>
                    </WidgetItem>
                </div>

            </div>
        </div>
    );
}