export function ReadyToRescue() {
  return (
    <div className="bg-[#121a16] text-white rounded-3xl py-16 px-6 text-center max-w-4xl mx-auto my-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to rescue your next meal?
      </h2>
      
      <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
        Join thousands of students and hundreds of businesses making a difference.
        Fresh food, huge discounts, zero waste, it's a win-win-win.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
        <button className="bg-[#22c55e] hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-full w-full sm:w-auto transition-colors">
          Download the App
        </button>
        <button className="border border-white hover:bg-white hover:text-black font-semibold px-6 py-3 rounded-full w-full sm:w-auto transition-colors">
          Partner with Us
        </button>
      </div>
      
      <div className="flex justify-center items-center gap-4 opacity-70">
        <div className="h-8 w-24 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTicze3x75dpo_av5avqNEeGAfXwAi39nl4c1_AYhERoQDYJkMQdpvBChg&s=10" alt="App Store" className="h-6"/>
        </div>
        <div className="h-8 w-24 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400">
          <img src="https://png.pngtree.com/png-clipart/20230916/original/pngtree-google-play-store-vector-png-image_12256666.png" alt="Google Play" className="h-6"/>
        </div>
      </div>
    </div>
  );
}