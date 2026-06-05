import { useState } from "react";

export const Navbar = () => {
    const [btnSatate, setBtnState] = useState(false);
    return (
        <nav className="w-full border-b border-gray-300">
            <div className="py-4 max-w-[1200px] mx-auto flex  items-center justify-between">
                <ul className="flex space-x-2 md:space-x-6 items-center">
                    <li className="cursor-pointer text-3xl font-bold">LOGO</li>
                    <li className="cursor-pointer text-gray-500">Find deals</li>
                    <li className="cursor-pointer text-gray-500">How it works</li>
                    <li className="cursor-pointer text-gray-500">For Partners</li>
                </ul>

                <div className={`flex space-x-0 md:space-x-10 items-center navlink ${btnSatate ? 'navlink_active' : ''}`}>
                    <div className="cursor-pointer text-gray-700 border border-gray-300 rounded-2xl bg-gray-100 px-1 py-0.5 text-center w-[170px]">Cuttack,India</div>
                    <div className="flex space-x-4 items-center flex-col md:flex-row space-y-4 md:space-y-0">
                        <p className="cursor-pointer">Login</p>
                        <button className="gradient-bg text-black px-4 py-2 rounded-xl cursor-pointer">Partner With Us</button>
                    </div>
                    <div 
                        onClick={() => setBtnState(false)}
                        className="cursor-pointer text-gray-700 border border-gray-300 bg-gray-100 px-3 py-2 text-center w-[70px] inline-block md:hidden"
                    >
                        Close
                    </div>
                </div>

                <div
                    onClick={() => setBtnState(!btnSatate)}
                    className="cursor-pointer text-gray-700 border border-gray-300 rounded-2xl bg-gray-100 px-3 py-2 text-center w-[40px] inline-block md:hidden">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
        </nav>
    )
}
