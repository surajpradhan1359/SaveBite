import { Card } from "./Card.jsx";
import { featureDeals } from "../../data.js";

export const FeaturesDeals = () => {
    return (
        <div className="my-10">
            <div className="text-4xl font-bold mb-4">Featured Deals Near Me</div>
            <div className="flex items-center justify-between mb-6">
                <div className="text-gray-600 font-bold tracking-wide text-xl">Fresh surples waiting for you!</div>
                <div>
                    <button className="bg-gray-200 mr-4 hover:bg-gray-400 text-gray-800 font-bold py-2 px-5 rounded-r-full rounded-l-full">
                        <span className="mr-2"><i className="fa-solid fa-filter"></i></span>Filter</button>
                    <button className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-5 rounded-r-full rounded-l-full">NearBy</button>
                    <button className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-5 rounded-r-full rounded-l-full">Newest</button>
                </div>
            </div>
            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featureDeals.map((elm,index)=>{
                    return <Card key={index} obj={elm} />
                })}
            </div>
        </div>
    )
}   
