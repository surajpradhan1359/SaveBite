
export const Division3 = () => {
    return (
        <div className="text-center p-10 font-sans">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Browse by Category</h2>
            <div className="flex justify-center gap-6">
                <div className="flex flex-col items-center">
                    <div className="w-[60px] h-[60px] rounded-full bg-[#ff9307] flex items-center justify-center text-2xl text-white">
                      <i class="fa-solid fa-utensils"></i>  
                    </div>
                    <p className="text-xs mt-2">Restaurants</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-[60px] h-[60px] rounded-full bg-[#da18a6] flex items-center justify-center text-2xl text-white">
                       <i class="fa-solid fa-cake-candles"></i> 
                    </div>
                    <p className="text-xs mt-2">Bakeries</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-[60px] h-[60px] rounded-full bg-[#5c3707] flex items-center justify-center text-2xl text-white">
                    <i class="fa-solid fa-mug-hot"></i>
                    </div>
                    <p className="text-xs mt-2">Cafes</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-[60px] h-[60px] rounded-full bg-[#3CB371] flex items-center justify-center text-2xl text-white">
                        <i class="fa-solid fa-basket-shopping"></i>
                    </div>
                    <p className="text-xs mt-2">Groceries</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-[60px] h-[60px] rounded-full bg-[#1E90FF] flex items-center justify-center text-2xl text-white">
                        <i className="fa-solid fa-arrow-trend-down"></i>
                    </div>
                    <p className="text-xs mt-2">Combos</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-[60px] h-[60px] rounded-full bg-[#FFD700] flex items-center justify-center text-2xl text-white">
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <p className="text-xs mt-2">Favorites</p>
                </div>
            </div>
        </div>
    )
}