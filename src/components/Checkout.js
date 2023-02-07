export default function Checkout()
{
    return <>
        <div className="lg:px-6 relative mt-4 lg:mt-0">
            <div className="lg:absolute lg:right-0 lg:bottom-4 lg:pr-3 w-full flex flex-col top-0 bottom-0">
                
                <div>
                    <div className="flex justify-between">
                        <div className="text-lg">
                            Table 5
                            <span className="mt-1 block text-gray-100 text-sm">Leslie K.</span>
                        </div>
                        <div className="rounded-full border w-10 h-10 border-gray-100 flex text-gray-100 justify-center items-center">
                            i
                        </div>
                    </div>
                    {/* List order */}
                    <OrderList />
                </div>
               
                {/* Order step */}
                <OrderStep />
            </div>
        </div>
    </>
}

function OrderList()
{
    return <>
        <div className="mt-6">
            {[{
                name: 'Roast', 
                quantity: 2,
                price: 25.50,
            },
            {
                name: 'Roast 2', 
                quantity: 1,
                price: 25.50,
            }].map(order => (
                <div className="relative group mb-2">
                    <div className="absolute top-0 left-0 bottom-0 right-0 z-0 p-3 group-hover:bg-gray-150 rounded-lg">
                        <span className="hidden group-hover:block">
                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 4.5L16.8803 14.5251C16.7219 17.0864 16.6428 18.3671 16.0008 19.2879C15.6833 19.7431 15.2747 20.1273 14.8007 20.416C13.8421 21 12.559 21 9.99274 21C7.42312 21 6.1383 21 5.17905 20.4149C4.7048 20.1257 4.296 19.7408 3.97868 19.2848C3.33688 18.3626 3.25945 17.0801 3.10461 14.5152L2.5 4.5" className="stroke-red" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M19 4.5H1" className="stroke-red" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M14.0555 4.5L13.3729 3.09173C12.9194 2.15626 12.6926 1.68852 12.3015 1.39681C12.2148 1.3321 12.1229 1.27454 12.0268 1.2247C11.5937 1 11.0739 1 10.0343 1C8.96864 1 8.43579 1 7.99549 1.23412C7.89791 1.28601 7.80479 1.3459 7.71711 1.41317C7.32145 1.7167 7.10044 2.20155 6.65842 3.17126L6.05273 4.5" className="stroke-red" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M7.5 15.5L7.5 9.5" className="stroke-red" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M12.5 15.5L12.5 9.5" className="stroke-red" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        </span>
                    </div>
                    <div className="flex justify-between items-center group-hover:translate-x-11 transition-all bg-gray p-3 rounded-lg z-10">
                        <div className="flex items-center gap-3">
                            <span className="rounded-full w-5 h-5 bg-white text-black flex justify-center items-center">1</span>
                            {order.name} <span className="text-gray-100 text-xs ml-1">x{order.quantity}</span>
                        </div>
                        <span className="font-medium">${order.price}</span>
                    </div>
                </div>
            ))}
        </div>
    </>
}
function OrderItem()
{
    return <>
        <div className="bg-gray p-3 rounded-lg">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <span className="rounded-full w-5 h-5 bg-white text-black flex justify-center items-center">1</span>
                    Roast chicken <span className="text-gray-100 text-xs ml-1">x2</span>
                </div>
                <span className="font-medium">$25.50</span>
            </div>
        </div>
    </>
}

function OrderStep()
{
    return <>
        <div className="mt-6 bg-gray p-3 rounded-lg h-full relative">
            <div className="border-b border-dashed border-gray-100 pb-3">
            <div class="flex items-center text-xs text-gray-100 mb-2">
                    Subtotal
                    <span className="text-white ml-auto font-medium">$171.50</span>
                </div>
                <div class="flex items-center text-xs text-gray-100">
                    Tax 10%
                    <span className="text-white ml-auto font-medium">$17.15</span>
                </div>
            </div>
            
            <div className="flex items-center justify-between text-lg pt-3 font-normal mb-14 lg:mb-0">
                Total
                <span className="font-semibold">$188.65</span>
            </div>
            
            <button className="btn absolute bottom-3 left-3 right-3">Place Orders</button>
            
        </div>
    </>
}