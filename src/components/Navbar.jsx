import { useState } from "react";

export const Navbar = () => {
    const [btnSatate, setBtnState] = useState(false);
    return (
        <nav className="w-full border-b border-gray-300 px-4 lg:px-0">
            <div className="py-4 max-w-[1200px] mx-auto flex  items-center justify-between">
                <ul className="flex space-x-2 md:space-x-6 items-center">
                    <li className="cursor-pointer text-3xl font-bold">LOGO</li>
                    <li className="cursor-pointer text-gray-500 hidden md:inline-block">Find deals</li>
                    <li className="cursor-pointer text-gray-500 hidden md:inline-block">How</li>
                    <li className="cursor-pointer text-gray-500 hidden md:inline-block">For Partners benifit</li>
                </ul>
                <div className='md:block hidden'>
                    <div className='flex space-x-0 md:space-x-10 items-center'>
                        <div className="cursor-pointer text-gray-700 border border-gray-300 rounded-2xl bg-gray-100 px-1 py-0.5 text-center w-[170px]">Cuttack,India</div>
                        <div className="flex space-x-4 items-center flex-col md:flex-row space-y-4 md:space-y-0">
                            <p className="cursor-pointer">Login</p>
                            <button className="gradient-bg text-black px-4 py-2 rounded-xl cursor-pointer">Partner With Us</button>
                        </div>
                    </div>
                </div>

                <div
                    onClick={() => setBtnState(true)}
                    className="cursor-pointer text-gray-700 border border-gray-300 rounded-2xl bg-gray-100 px-3 py-2 text-center w-[40px] inline-block md:hidden">
                    <i className="fa-solid fa-bars"></i>
                </div>
                {/* for responsive */}
                <ul className={`navlink_responsive  bg-gray-200 py-4 ${btnSatate ? 'navlink_active' : ''}`}>
                    <li className="my-2 cursor-pointer tracking-wide text-gray-700 text-lg hover:text-blue-500">Find deals</li>
                    <li className="my-2 cursor-pointer tracking-wide text-gray-700 text-lg hover:text-blue-500">How it works</li>
                    <li className="my-2 cursor-pointer tracking-wide text-gray-700 text-lg hover:text-blue-500">For Partners</li>
                    <li className="my-2 cursor-pointer tracking-wide text-gray-700 text-lg hover:text-blue-500 border border-gray-300 rounded-2xl bg-gray-100 px-1 py-0.5 text-center w-[170px]">Cuttack,India</li>
                    <li className="my-2 cursor-pointer tracking-wide text-gray-700 text-lg hover:text-blue-500">Login</li>
                    <li>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl cursor-pointer">Partner With Us</button>
                    </li>
                    <li className="my-4">
                        <button onClick={() => setBtnState(false)} className="text-white cursor-pointer px-4 py-2 bg-blue-500 hover:bg-red-600 rounded-xl">Close</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}