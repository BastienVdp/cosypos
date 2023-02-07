const categories = [
    {
        items: 13,
        label: "Breakfast",
        icon: 'icon',
        color: '#CFDDDB'
    },
    {
        items: 8,
        label: "Soups",
        icon: 'icon',
        color: '#E4CDEE',
    },
    {
        items: 10,
        label: "Pasta",
        icon: 'icon',
        color: '#C2DBE9',
    },
    {
        items: 15,
        label: "Sushi",
        icon: 'icon',
        color: '#F0C8CF'
    },
    {
        items: 11,
        label: "Main course",
        icon: 'icon',
        color: '#FAC2D9'

    },
    {
        items: 9,
        label: "Desserts",
        icon: 'icon',
        color: '#F0C8CF'
    },
    {
        items: 11,
        label: "Drinks",
        icon: 'icon',
        color: '#CFDDDB'
    },
    {
        items: 12,
        label: "Alcohol",
        icon: 'icon',
        color: '#F0C8CF'
    },
]

export default function Categories()
{
    return <>
        <div className="products-grid mt-6 mb-4">
            {categories.map((category, i) => (
                <CategoryItem key={i} item={category} />
            ))}
        </div>
    </>
}

function CategoryItem({item}) 
{
    return <>
        <div className={`flex flex-col p-3 rounded-lg bg-pastel-red`}>
            <span className="block mb-3">{item.icon}</span>
            
            <div className="text-gray-100 text-sm font-normal">
                <span className="font-bold text-black block">{item.label}</span>
                {item.items} items
            </div>
        </div>
    </>
}