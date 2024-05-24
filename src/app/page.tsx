"use client"
import Image from "next/image";
import Banner from "./banner";
import NavBar from "./navBar";
import Fotter from "./fotter";
import Search from "./Search/page";
import ImageDoc from "../../NicePng_doctor-png_336282 1.png";
import Group1 from "../../Group 10.png";
import Group2 from "../../Group 11.png";
import Group3 from "../../Group 12.png";
import Frame1 from "../../Frame 1.png";
import Frame2 from "../../Frame 2.png";
import Frame3 from "../../Frame 3.png";
import Frame4 from "../../Frame 4.png";
import Frame5 from "../../Frame 5.png";
import Frame6 from "../../Frame 6.png";
import Frame7 from "../../Frame 7.png";
import Frame8 from "../../Frame 8.png";
import TeamImg from "../../section.elementor-section.png";
import Team2 from "../../Group 1000011071.png";
import Element from "../../div.elementor-widget-wrap.png";
import Group from "../../Group 1000011064 (1).png"
import FAQ from "../../Group 1000011072.png";
import About from "../../Group 1000011073.png";

export default function Home() {
  return (
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

    <div className="container mt-40 bg-white">
      <div className="grid grid-cols-3 gap-6 text-center">
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img src={Group1.src} alt="Service 1" className="w-full h-auto" />
        </div>
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img src={Group2.src} alt="Service 2" className="w-full h-auto" />
        </div>
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img src={Group3.src} alt="Service 3" className="w-full h-auto" />
        </div>
      </div>
    </div>

    <div className="container mt-20  px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Find By Specialisation</h2>
      </div>
      <div className="grid grid-cols-4 gap-6 text-center">
        <div className="bg-white shadow-md rounded-md p-6">
          <img
            src={Frame1.src}
            alt="Dentistry"
            className="w-20 h-20 mx-auto mb-4"
          />
          <p className="text-lg font-semibold">Dentistry</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-6">
          <img
            src={Frame2.src}
            alt="Primary Care"
            className="w-20 h-20 mx-auto mb-4"
          />
          <p className="text-lg font-semibold">Primary Care</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-6">
          <img
            src={Frame3.src}
            alt="Cardiology"
            className="w-20 h-20 mx-auto mb-4"
          />
          <p className="text-lg font-semibold">Cardiology</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-6">
          <img
            src={Frame4.src}
            alt="MRI Resonance"
            className="w-20 h-20 mx-auto mb-4"
          />
          <p className="text-lg font-semibold">MRI Resonance</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-6">
          <img
            src={Frame5.src}
            alt="Blood Test"
            className="w-20 h-20 mx-auto mb-4"
          />
          <p className="text-lg font-semibold">Blood Test</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-6">
          <img
            src={Frame6.src}
            alt="Psicologist"
            className="w-20 h-20 mx-auto mb-4"
          />
          <p className="text-lg font-semibold">Psicologist</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-6">
          <img
            src={Frame7.src}
            alt="Laboratory"
            className="w-20 h-20 mx-auto mb-4"
          />
          <p className="text-lg font-semibold">Laboratory</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-6">
          <img
            src={Frame8.src}
            alt="X-Ray"
            className="w-20 h-20 mx-auto mb-4"
          />
          <p className="text-lg font-semibold">X-Ray</p>
        </div>
      </div>
      <div className="text-center mt-10">
        <button
          style={{ background: "#2AA7FF" }}
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          View All
        </button>
      </div>
    </div>
    <div>
      <img
        src={TeamImg.src}
        alt="Laboratory"
        className="w-full h-full mx-auto mb-4"
      />
    </div>
    <div className="px-20">
      <img
        src={Team2.src}
        alt="Laboratory"
        className="w-full h-full mx-auto mb-4"
      />
    </div>
    <div className="px-20">
      <img
        src={Element.src}
        alt="Laboratory"
        className="w-full h-full mx-auto mb-4"
      />
    </div>
    <div className="px-20">
      <img
        src={Group.src}
        alt="Laboratory"
        className="w-full h-full mx-auto mb-4"
      />
    </div>
    <div className="px-20">
      <img
        src={FAQ.src}
        alt="Laboratory"
        className="w-full h-full mx-auto mb-4"
      />
    </div>
    <div className="px-20">
      <img
        src={About.src}
        alt="Laboratory"
        className="w-full h-full mx-auto mb-4"
      />
    </div>
    <Fotter />
  </>
  );
}
