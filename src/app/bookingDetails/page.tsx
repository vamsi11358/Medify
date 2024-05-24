"use client";
import { useEffect, useState } from 'react';
import Banner from '../banner';
import NavBar from '../navBar';
import Image from "../../../image 22.png"

const BookingDetails = () => {
    const [bookingDetails, setBookingDetails] = useState<any>(null);

    useEffect(() => {
      const storedBookingDetails = localStorage.getItem('bookingDetails');
      if (storedBookingDetails) {
        setBookingDetails(JSON.parse(storedBookingDetails));
      }
    }, []);
  
    if (!bookingDetails) {
      return (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl">Loading...</h1>
        </div>
      );
    }
  
    const centerInfo = bookingDetails.center; 
  return (
    <>
    <>
    <Banner/>
    <NavBar/>
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-8">
      <div className="border p-4 rounded-lg shadow-lg">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
            <img src={Image.src} alt="hospital icon" className="w-10 h-10" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold">{centerInfo["Hospital Name"]}</h3>
            <p>{centerInfo["Address"]}</p>
            <p>{centerInfo["City"]}, {centerInfo["State"]} {centerInfo["ZIP Code"]}</p>
            <p className="text-green-500">Emergency Services: {centerInfo["Emergency Services"]}</p>
            <p className="text-blue-500">Overall Rating: {centerInfo["Hospital overall rating"]}</p>
            <p className="text-gray-500">Phone: {centerInfo["Phone Number"]}</p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="inline-block px-2 py-1 bg-blue-100 text-blue-500 rounded">
                {centerInfo["Timeliness of care national comparison"]}
              </span>
              <span className="inline-block px-2 py-1 bg-green-100 text-green-500 rounded">
                {centerInfo["Patient experience national comparison"]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    </>
  );
};

export default BookingDetails;
