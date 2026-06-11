export const Card = ({ obj }) => {
    return (
        <div className="rounded-xl shadow-2xl card">
            <div className="rounded-xl mb-4 relative">
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-3 z-10 rounded-full">Hot Deal</span>
                <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs font-bold py-1 px-3 z-10 rounded-full">{obj.discountPercentage}% OFF</span>
                <span className="absolute bottom-2 left-2 bg-gray-800 text-white text-xs font-bold py-1 px-3 z-10 rounded-full">{obj.remainingTime}</span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDytN390rTw0EZ7YsNsVrAldNV06DSL33OqQ&s" alt="Dish Image" className="w-full h-[300px] object-cover rounded-t-xl" />
            </div>
            <div className="p-4">
                <p className="text-gray-600 text-lg mb-2"><span><i className="fa-solid fa-location-dot mr-4"></i></span>{obj.restaurantName}</p>
                <h3 className="text-3xl font-bold mb-2">{obj.dishName}</h3>
                <p className="text-gray-600 mb-4 text-lg mb-2">Penne pasta tossed in a fiery tomato sauce with garlic, chili flakes, and fresh parsley.</p>
                <div className="flex items-center justify-between mt-8">
                    <div>
                        <span className="text-2xl font-bold">$12.99</span>
                    </div>
                    <button className="bg-gray-200 text-gray-800 border border-gray-300 hover:bg-gray-300 hover:text-gray-900 font-bold py-2 px-4 rounded-full">
                        Reserve Now
                    </button>
                </div>
            </div>
        </div>
    )
}
