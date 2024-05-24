"use client"
import Banner from "../banner"
import NavBar from "../navBar"
import ImageDoc from "../../../NicePng_doctor-png_336282 1.png";
import Search from "../Search/page";
import { useEffect, useState } from "react";
import MedicalCenterCard from "../card";
import axios from "axios";
import { useStore } from "../../../store";
interface MedicalCenter {
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
  }
export default function Details(){
    const [medicalCenters, setMedicalCenters] = useState<MedicalCenter[]>([]);
    console.log(medicalCenters,'medicalCenters')
    const { city, state, setCity, setState } = useStore();

    const fetchData = async (city: string, state: string) => {
        try {
            const response = await axios.get(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
            setMedicalCenters(response.data);
        } catch (error) {
            console.error("Error fetching medical centers:", error);
        }
    };

    useEffect(() => {
        if (city && state) {
            fetchData(city, state);
        }
    }, [city, state]);
    return(
        <>
        
        <Banner />
       <NavBar />
       <div className="container mx-auto py-12 relative">
      <div className="flex justify-between items-center bg-white p-6 rounded-md shadow-md relative">
        <div className="w-1/2 ml-5 bg-white">
          <h1 className="text-3xl font-bold mb-4">
            Skip the travel! Find Online
          </h1>
          <span className="text-gray-900 text-5xl font-bold mb-4">
            Medical{" "}
          </span>
          <span className="text-blue-500 text-5xl font-bold mb-4">
            Centers
          </span>
          <p className="text-gray-600 mb-6">
            Connect instantly with a 24x7 specialist or choose to video visit
            a particular doctor.
          </p>
          <button
            style={{ background: "#2AA7FF" }}
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Find Centers
          </button>
        </div>
        <div className="w-1/2">
          <img src={ImageDoc.src} alt="Doctors" className="w-full h-auto" />
        </div>
      </div>
      <Search />
    </div>
    <div className="container mx-auto p-4 mt-20">
      {medicalCenters.map((center, index) => (
        <div key={center["Provider ID"]}>
          {index === 1 && <div className="mb-4 bg-blue-100 text-center py-2"></div>}
          <MedicalCenterCard center={center} />
        </div>
      ))}
    </div>
    
        </>
    )
}