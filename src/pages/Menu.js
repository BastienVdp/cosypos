import Categories from "../components/Categories";
import Checkout from "../components/Checkout";
import Products from "../components/Products";
export default function Menu()
{
    return <>
        <div className="w-full lg:h-screen grid grid-cols-1 lg:grid-cols-menu text-white pt-6">
            {/* left */}
            <div className="lg:overflow-y-scroll lg:pr-3 layout lg:mr-3">
                {/* search */}
                <div className="bg-gray p-2 w-min flex items-center rounded-md">
                    {/* <img src={require('./icons/search.png')} /> */}
                    <input type="text" placeholder="Search" className="bg-gray placeholder:text-gray-100"/>
                </div>
                {/* category */}
                <Categories />
                {/* menus */}
                <Products />
            </div>

            {/* right */}
            <Checkout/>

        </div>
    </>
}