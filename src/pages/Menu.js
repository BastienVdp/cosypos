export default function Menu()
{
    return <>
        <div className="w-full grid grid-cols-menu">
            {/* left */}
            <div>
                {/* search */}
                <div className="bg-gray p-2 w-min flex items-center rounded-md">
                    {/* <img src={require('./icons/search.png')} /> */}
                    <input type="text" placeholder="Search" className="bg-gray placeholder:text-gray-100"/>
                </div>
                {/* category */}
                <div></div>
                {/* menus */}
                <div></div>
            </div>

            {/* right */}
            <div></div>

        </div>
    </>
}