import { Link } from "react-router";

export function Footer() {
  return (
    <div>
    <footer className="bg-white border-t border-gray-200 px-4 py-16 text-xs text-gray-600 font-sans w-full">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        <div>
          <div className="flex items-center gap-2 font-bold text-gray-900 mb-3">
            <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-[10px]">S</div>
            <span>SaveBite</span>
          </div>
          <p className="leading-relaxed text-gray-500 mb-3">
            Connecting students and local food sellers to rescue unsold food at deep discounts. Join the movement to end food waste.
          </p>
          <div className="flex gap-3 text-gray-400">
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-3">For Students</h4>
          <div className="flex flex-col gap-2 text-gray-500">
            <a href="#" className="hover:underline">Find Deals</a>
            <a href="#" className="hover:underline">How It Works</a>
            <a href="#" className="hover:underline">Rewards Program</a>
            <a href="#" className="hover:underline">FAQs</a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-3">For Partners</h4>
          <div className="flex flex-col gap-2 text-gray-500">
            <a href="#" className="hover:underline">Partner with us</a>
            <a href="#" className="hover:underline">Success Stories</a>
            <a href="#" className="hover:underline">Partner Dashboard</a>
            <a href="#" className="hover:underline">Resources</a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-3">Company</h4>
          <div className="flex flex-col gap-2 text-gray-500">
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Sustainability Impact</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>

      </div>

      <div className="max-w-[1200px] mx-auto border-t border-gray-100 pt-4 flex justify-between text-gray-400">
        <div>© 2026 SaveBite Inc. Built with love for the planet.</div>
        <div className="flex gap-4">
          <span>English (US)</span>
          <span>USD</span>
        </div>
      </div>
    </footer>
    </div>
  );
}