export default function Orders()
{
    return <>
        <div className="w-full text-white pt-6 lg:pr-3">
            {/* status */}
            <div className="flex gap-2 flex-wrap md:flex-nowrap">
                <div className="card w-full flex items-center gap-3">
                    <span className="bg-white text-black rounded-full w-6 h-6 flex justify-center items-center">
                        5
                    </span>
                    New
                </div>
                <div className="card w-full flex items-center gap-3">
                    <span className="bg-white text-black rounded-full w-6 h-6 flex justify-center items-center">
                        5
                    </span>
                    Cancelled
                </div>
                <div className="card w-full flex items-center gap-3">
                    <span className="bg-white text-black rounded-full w-6 h-6 flex justify-center items-center">
                        5
                    </span>
                    Process
                </div>
                <div className="card w-full flex items-center gap-3">
                    <span className="bg-white text-black rounded-full w-6 h-6 flex justify-center items-center">
                        5
                    </span>
                    Complete
                </div>
            </div>
        </div>
    </>
}