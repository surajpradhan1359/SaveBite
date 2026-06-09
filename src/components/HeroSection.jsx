export const HeroSection = () => {
    return (
        <div className="grid grid-cols-2 py-14  bg-gradient-to-r from-white to-green-50">
            {/* Hero Section Text */}
            <div className="flex flex-col items-start space-y-2">
                <p className="font-bold text-green-500 bg-green-100 border border-green-200 px-2 py-1 rounded-2xl">Resucing 12k+ meal every month</p>
                <h1 className="text-6xl font-bold">Great Food.</h1>
                <h1 className="text-6xl font-bold bg-gradient-to-r from-green-500 to-orange-500 bg-clip-text text-transparent">Tiny Prices.</h1>
                <h1 className="text-6xl font-bold">Zero Waste.</h1>
                <p className="text-gray-600 text-xl">Join the movement today.Save your wallet and planet by resucing delicious and surplus food from your local restaurants.</p>
                <div className="flex items-center space-x-4 mt-4 shadow-2xl py-2 px-3  rounded-xl">
                    <p><i className="fa-solid fa-magnifying-glass"></i></p>
                    <div>
                        <input type="text" placeholder="what are you looking for?" className=" px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>
                    <div><span><i className="fa-solid fa-location-dot me-1"></i></span>Near Me</div>
                    <div>
                        <button className=" bg-gradient-to-r from-green-500 to-orange-500 text-black px-4 py-2 rounded-xl cursor-pointer">Find Deals</button>
                    </div>
                </div>
                <div className="mt-3">
                    <button className="bg-black hover:bg-white text-white hover:text-black px-4 py-3 rounded-3xl cursor-pointer">Find Deals Near Me</button>
                    <button className="bg-white hover:bg-black border border-gray-300 ms-2 text-black hover:text-white px-4 py-3 rounded-3xl cursor-pointer">Partner With Us</button>
                </div>
            </div>
            {/* Hero Image Section */}
            <div className=""></div>
        </div>
    )
}
