import { useState } from "react"
import { Link } from "react-router"

export const Signup = () => {

  const [data, setData] = useState({
    fullname:"",
    email: "",
    password: "",
    location:""
  });
  const handleChange =(e)=>{
    const {name ,value} = e.target;
    setData((prevData)=>({
      ...prevData,
      [name]:value
    }))
  }
  const handleSignup= (e)=>{
    e.preventDefault();
    console.log("Signup Data:",data);
  };

  //api call to get address from lat and long
  const getAddressFromCoordinates = async (latitude, longitude) => {
    try {
      const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
      const addressData = await response.json();
      console.log("Address Data:", addressData);
      const { city, principalSubdivision, countryName } = addressData;//destructuring the address data
      setData((prevData) =>{
        return {
          ...prevData,
          location: `${city}, ${principalSubdivision}, ${countryName}`
        }
      } );
    }catch (error) {
      console.error("Error fetching address:", error);
    }
  }

  //handle current location
  const successCallback = (position) => {
    const { latitude, longitude } = position.coords;
    getAddressFromCoordinates(latitude, longitude);
    // You can use the latitude and longitude to fetch the address or perform any other action
  }
  const errorCallback = (error) => {
    console.error("Error getting location:", error);
  }
  const handleCurrentLocation = (e) =>{
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }


  return (
   <div className="max-w-[1200px] mx-auto">
      <form className="flex flex-col gap-4 w-[400px] mx-auto my-10 p-3 border border-gray-300 rounded-lg shadow-md">
         <div>
          <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
          <input
            type="text"
            id="fullname"
            onChange={handleChange}
            name="fullname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input
            type="email"
            id="email"
            onChange={handleChange}
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com" />
        </div>
        
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="password" />
        </div>
         <div>
          <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span><i class="fa-solid fa-location-dot me-1"></i></span>Location</label>
          
          <input 
          id="location"
          name="location"
          onChange={handleChange}
          value={data.location}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button className="mt-2 text-sm text-blue-500 hover:underline cursor-pointer" onClick={handleCurrentLocation}>Use Current Location</button>
        </div>
         <div>
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            Already have an account? <span className="text-blue-500 hover:underline cursor-pointer">
              <Link to="/login">login</Link>
            </span>
          </p>
        </div>
        <button 
        onClick={handleSignup}
        type="submit" className="text-white cursor-pointer w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Signup</button>
      </form>
   </div>
  )
}
