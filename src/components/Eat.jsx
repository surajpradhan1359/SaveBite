export  function Eat() {

  return (
    <div className="w-full bg-white font-sans text-gray-800">
      <section className=" mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded">
            FOR STUDENTS
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Eat Like a King,<br />Pay Like a Student.
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold"><i class="fa-solid fa-check"></i></span>
              <p className="text-gray-600">Save up to 70% on fresh, high-quality meals.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold"><i class="fa-solid fa-check"></i></span>
              <p className="text-gray-600">Discover hidden gems and local favorites near campus.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold"><i class="fa-solid fa-check"></i></span>
              <p className="text-gray-600">Reduce your environmental footprint with every bite.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold"></span>
              <p className="text-gray-600">No subscription fees—only pay for what you rescue.</p>
            </li>
          </ul>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-full shadow transition">
            Start Saving Today
          </button>
        </div>
        <div className="flex-1 relative flex justify-center">
          <div className="absolute inset-0 bg-amber-100 rounded-3xl transform rotate-3 scale-95 -z-10"></div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShUTVd9KVche3NdgCf7SdGe21QPjSw4yNrfz0XywGXYw&s=10" alt="Students eating" className="rounded-3xl shadow-xl object-cover w-full max-w-md h-80"/>
        </div>
      </section>

      <section className=" mx-auto px-6 py-16 flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="flex-1 space-y-6">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded">
            FOR BUSINESSES
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Turn Waste into<br />Revenue.
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-amber-600 font-bold"><i class="fa-regular fa-circle-dot"></i></span>
              <p className="text-gray-600">Recoup costs on inventory that would otherwise be tossed.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 font-bold"><i class="fa-regular fa-circle-dot"></i></span>
              <p className="text-gray-600">Get noticed by a whole new audience of local students.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 font-bold"><i class="fa-regular fa-circle-dot"></i></span>
              <p className="text-gray-600">Seamlessly manage surplus items via our simple dashboard.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 font-bold"><i class="fa-regular fa-circle-dot"></i></span>
              <p className="text-gray-600">Showcase your commitment to sustainability and zero waste.</p>
            </li>
          </ul>
          <button className="border-2 border-gray-900 text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white transition">
            List Your Business
          </button>
        </div>

        <div className="flex-1 relative flex justify-center">
          <div className="absolute inset-0 bg-emerald-50 rounded-3xl transform -rotate-3 scale-95 -z-10"></div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_9BE_KA8VIWR3nhwco0_ILtCPf10Af4PgG-ePHJMrjg&s=10" alt="Food" className="rounded-3xl shadow-xl object-cover w-full max-w-md h-80"/>
        </div>
      </section>
    </div>
  );
}