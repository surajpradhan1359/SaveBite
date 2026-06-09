
export function Division1() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            How SaveBite Works
          </h2>
          <p className="text-gray-500 text-sm">
            Three simple steps to delicious savings and a healthier planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-500 text-xl font-bold">j</span>
            </div>
            <h3 className="text-gray-900 font-semibold text-lg mb-2">
              Browse Deals
            </h3>
            <p className="text-gray-500 text-sm max-w-xs">
              Discover surplus food from local spots at up to 70% off.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
              <span className="text-orange-500 text-xl font-bold">j</span>
            </div>
            <h3 className="text-gray-900 font-semibold text-lg mb-2">
              Reserve & Pay
            </h3>
            <p className="text-gray-500 text-sm max-w-xs">
              Secure your items through the app before they sell out.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
              <span className="text-emerald-500 text-xl font-bold">j</span>
            </div>
            <h3 className="text-gray-900 font-semibold text-lg mb-2">
              Pickup & Enjoy
            </h3>
            <p className="text-gray-500 text-sm max-w-xs">
              Head to the store during the pickup window and grab your bite.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}