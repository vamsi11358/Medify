import Link from 'next/link';
import React, { useState } from 'react';
import Image from "../../image 22.png";

interface MedicalCenterProps {
  center: {
    "Provider ID": string;
    "Hospital Name": string;
    "Address": string;
    "City": string;
    "State": string;
    "ZIP Code": number;
    "County Name": string;
    "Phone Number": number;
    "Hospital Type": string;
    "Hospital Ownership": string;
    "Emergency Services": string;
    "Meets criteria for meaningful use of EHRs": string;
    "Hospital overall rating": number;
    "Hospital overall rating footnote": string;
    "Mortality national comparison": string;
    "Mortality national comparison footnote": string;
    "Safety of care national comparison": string;
    "Safety of care national comparison footnote": string;
    "Readmission national comparison": string;
    "Readmission national comparison footnote": string;
    "Patient experience national comparison": string;
    "Patient experience national comparison footnote": string;
    "Effectiveness of care national comparison": string;
    "Effectiveness of care national comparison footnote": string;
    "Timeliness of care national comparison": string;
    "Timeliness of care national comparison footnote": string;
    "Efficient use of medical imaging national comparison": string;
    "Efficient use of medical imaging national comparison footnote": string;
  };
}

const MedicalCenterCard: React.FC<MedicalCenterProps> = ({ center }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null); // State to store selected time

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleBooking = (time: string) => {
    setSelectedTime(time); // Set selected time
  };

  const handleConfirmBooking = () => {
    if (selectedTime) {
      const bookingDetails = {
        center,
        time: selectedTime,
      };
      localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    }
  }; 
  
  
  



  return (
    <div className="border p-4 rounded-lg shadow-lg mb-4">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
          <img src={Image.src} alt="hospital icon" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold">{center["Hospital Name"]}</h3>
          <p>{center.Address}</p>
          <p>{center.City}, {center.State} {center["ZIP Code"]}</p>
          <p className="text-green-500">Emergency Services: {center["Emergency Services"]}</p>
          <p className="text-blue-500">Overall Rating: {center["Hospital overall rating"]}</p>
          <p className="text-gray-500">Phone: {center["Phone Number"]}</p>
          <button
            onClick={toggleExpand}
            style={{ background: "#2AA7FF" }}
            type="button"
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            {isExpanded ? "Hide Details" : "Book FREE Center Visit"}
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className="mt-4 bg-white p-4 rounded shadow">
          <div className="text-center">
            <p className="text-lg font-bold mb-2">Available Slots</p>
            <div className="flex justify-around">
              <div>
                {/* Today slots */}
                <button className="px-2 py-1 border rounded" onClick={() => handleBooking('11:30 AM')}>11:30 AM</button>
                {/* Tomorrow slots */}
                <button className="px-2 py-1 border rounded" onClick={() => handleBooking('12:00 PM')}>12:00 PM</button>
                {/* Fri, 5 May slots */}
                <button className="px-2 py-1 border rounded" onClick={() => handleBooking('02:00 PM')}>02:00 PM</button>
              </div>
            </div>
            <Link href="/bookingDetails">
            <button onClick={handleConfirmBooking}>Confirm Booking</button> 
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicalCenterCard;
