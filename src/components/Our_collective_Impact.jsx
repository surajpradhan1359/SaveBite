export function OurCollectiveImpact() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Our Collective Impact
        </h2>
        
        <p className="text-gray-500 text-sm mb-12">
          Together, students and local partners are making a measurable difference.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-3 text-xl">
              <i class="fa-solid fa-utensils"></i>
            </div>
            <span className="text-2xl font-bold text-gray-900">12,430</span>
            <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase mt-1">
              Meals Rescued
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mb-3 text-xl">
              <i class="fa-solid fa-dollar-sign"></i>
            </div>
            <span className="text-2xl font-bold text-gray-900">$146,980</span>
            <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase mt-1">
              Student Savings
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-3 text-xl">
              <i class="fa-solid fa-leaf"></i>
            </div>
            <span className="text-2xl font-bold text-gray-900">31.2 Tons</span>
            <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase mt-1">
              Co2 Avoided
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-3 text-xl">
                <i class="fa-solid fa-users"></i>
            </div>
            <span className="text-2xl font-bold text-gray-900">450+</span>
            <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase mt-1">
              Partner Shops
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}