"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image1 from "../../../card_service1.png";
import Image2 from "../../../card_service2.png";
import Image3 from "../../../card_service3.png";
import Image4 from "../../../card_service4.png";
import Image5 from "../../../card_service5.png";
import router, { useRouter } from 'next/router';
import Link from "next/link";
import {useStore} from "../../../store"

export default function Search() {
  const [data, setData] = useState([]);
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(null);
  const [selectedValue, setSelectedValue] = useState("Alabama");
  const [selectedValue1, setSelectedValue1] = useState("");
  const { city, state, setCity, setState } = useStore();
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await axios.get("https://meddata-backend.onrender.com/states");
        const transformedData = res.data.map((state:any) => ({ value: state, label: state }));
        setData(transformedData)
      } catch (err:any) {
        setError(err.message);
      }
    };
   

    fetchApi();
  }, []);

  useEffect(()=>{
    const fetchApi1 = async () => {
        try {
          const res = await axios.get(`https://meddata-backend.onrender.com/cities/${selectedValue}`);
          const transformedData1 = res.data.map((state:any) => ({ value: state, label: state }));
          setCities(transformedData1)
        } catch (err:any) {
          setError(err.message);
        }
      };
      fetchApi1();
  },[selectedValue])

  const handleChange = (e:any) => {
    setSelectedValue(e.target.value);
    console.log(e.target.value)
    setState(e.target.value)
  };
  const handleChange1 = (e:any) => {
    setSelectedValue1(e.target.value);
    setCity(e.target.value)
  };


  if (error) {
    return <div>Error: {error}</div>;
  }   

  return (
    <>
      <div className="bg-white p-6 z-10 rounded-md shadow-md absolute left-1/2 transform -translate-x-1/2 top-3/4 w-3/4">
        <div className="flex justify-between items-center mb-6">
           <select
            value={selectedValue}
            onChange={handleChange}
            className="dropdown-select w-1/3 p-3 border border-gray-300 rounded-md"
          >
            <option value="" disabled>
              Select a State
            </option>
            {data.map((option:any) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <select
            value={selectedValue1}
            onChange={handleChange1}
            className="dropdown-select w-1/3 p-3 border border-gray-300 rounded-md"
          >
            <option value="" disabled>
              Select a City
            </option>
            {cities.map((option:any) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <Link href="/details">
          <span
            style={{ background: "#2AA7FF" }}
            className="inline-flex items-center gap-x-1.5 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Search
          </span>
          </Link>
        </div>
        <div className="grid grid-cols-5 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 mb-2">
              <img src={Image1.src} alt="Doctors" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 mb-2">
              <img src={Image2.src} alt="Labs" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 mb-2">
              <img src={Image3.src} alt="Hospitals" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 mb-2">
              <img src={Image4.src} alt="Medical Store" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 mb-2">
              <img src={Image5.src} alt="Ambulance" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
