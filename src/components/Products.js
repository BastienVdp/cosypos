const products = [
    {
        name: 'Fish and chips',
        price: 7.50,
    },
    {
        name: 'Roast chicken',
        price: 7.50,
    },
    {
        name: 'Fillet steak',
        price: 7.50,
    },
    {
        name: 'Beefsteak',
        price: 7.50,
    },
    {
        name: 'Roast beef',
        price: 7.50,
    },
    {
        name: 'Buffalo wings',
        price: 7.50,
    },
    {
        name: 'Lobster',
        price: 7.50,
    },
    {
        name: 'Red caviar',
        price: 7.50,
    },
    {
        name: 'Fish and chips',
        price: 7.50,
    },
    {
        name: 'Roast chicken',
        price: 7.50,
    },
    {
        name: 'Fillet steak',
        price: 7.50,
    },
    {
        name: 'Beefsteak',
        price: 7.50,
    },
    {
        name: 'Roast beef',
        price: 7.50,
    },
    {
        name: 'Buffalo wings',
        price: 7.50,
    },
    {
        name: 'Lobster',
        price: 7.50,
    },
    {
        name: 'Red caviar',
        price: 7.50,
    },
    {
        name: 'Fillet steak',
        price: 7.50,
    },
    {
        name: 'Beefsteak',
        price: 7.50,
    },
    {
        name: 'Roast beef',
        price: 7.50,
    },
    {
        name: 'Buffalo wings',
        price: 7.50,
    },
    {
        name: 'Lobster',
        price: 7.50,
    },
    {
        name: 'Red caviar',
        price: 7.50,
    },
]

export default function Products()
{
    return <>
        <div className="products-grid border-t border-gray pt-3">
            {products.map((product, i) => (
                <ProductItem key={i} item={product} />
            ))}
        </div>
    </>
}

function ProductItem({item})
{
    return <>
        <div className="product-card group cursor-pointer">
            <div className="text-gray-100 text-xs mb-4 z-10">
                <span className="text-lg block font-semibold text-white mb-1 group-hover:text-black">
                    {item.name}
                </span>
                <span className="font-medium">${item.price}</span>
            </div>
            <div className="flex gap-3 self-end items-center z-10 mt-auto group-hover:text-black">
                <div className="flex items-center leading-none justify-center group-hover:border-black border-gray-100 text-gray-100 border w-6 h-6 px-2 rounded-md">-</div>
                <div>0</div>
                <div className="flex items-center leading-none justify-center group-hover:border-black border-gray-100 text-gray-100 border w-6 h-6 rounded-md">+</div>
            </div>
        </div>
    </>
}