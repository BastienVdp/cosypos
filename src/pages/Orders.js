const orders = [
    {
        id: 93875,
        customer: "Tomas Miller",
        date: "07.02",
        total: 13.26
    },
    {
        id: 93875,
        customer: "Tomas Miller",
        date: "07.02",
        total: 13.26
    },
    {
        id: 93875,
        customer: "Tomas Miller",
        date: "07.02",
        total: 13.26
    },
]

export default function Orders()
{
    return <>
        <div className="w-full text-white pt-6 lg:pr-3">
            {/* status */}
            <div className="flex gap-2 flex-wrap lg:flex-nowrap">
                <div className="card w-full flex items-center gap-3">
                    <span className="bg-white text-black rounded-full w-6 h-6 flex justify-center items-center">
                        5
                    </span>
                    New
                </div>
                <div className="card w-full flex items-center gap-3 bg-pastel-red">
                    <span className="bg-white text-black rounded-full w-6 h-6 flex justify-center items-center">
                        5
                    </span>
                    Cancelled
                </div>
                <div className="card w-full flex items-center gap-3 bg-pastel-blue">
                    <span className="bg-white text-black rounded-full w-6 h-6 flex justify-center items-center">
                        5
                    </span>
                    Process
                </div>
                <div className="card w-full flex items-center gap-3 bg-pastel-green">
                    <span className="bg-white text-black rounded-full w-6 h-6 flex justify-center items-center">
                        5
                    </span>
                    Complete
                </div>
            </div>

            <div className="mt-6">
                <h1 className="text-lg mb-3">New</h1>

                <div className="grid grid-cols-2 gap-3 pb-3">
                    {orders.map((order, index) => (
                        <div className="card flex justify-between gap-3">
                            <div className="w-full">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2">
                                        <div className="leading-10 text-center text-xs w-10 h-10 bg-gray-150 rounded-full text-white">
                                            07.02
                                        </div>
                                        <div className="flex flex-col justify-between">
                                            <b>Tomas Miller</b>
                                            <span className="block text-xs text-gray-100">commande régulièrement</span>
                                        </div>
                                    </div>
                                    <span className="text-gray-100 text-xs self-start">
                                        #93875
                                    </span>
                                </div>
                                <div className="mt-5 flex justify-between">
                                    Total
                                    <b>$13.26</b>
                                </div>
                            </div>
                            <div className="bg-gray-150 rounded-lg px-2 flex items-center">
                                +
                            </div>
                        </div>
                    ))}
                    
                    
                </div>
            </div>
        </div>
    </>
}