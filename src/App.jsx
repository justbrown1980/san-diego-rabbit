import React from "react";

import popularDestinations from "./data/popularDestinations";
import DestinationCard from "./components/DestinationCard";

export default function App() {
  return (
    <div>
      <div className="bg-white">
      <header className="container grid mx-auto lg:grid-cols-5">
       <div className="lg:col-span-1">LOGO</div>
       <nav className="lg:col-span-3">
         <div className="grid border-b border-gray-200 lg:grid-cols-4">
           <input type="search" name="search" id="search" placeholder="Search your keyword here..." className="m-2 text-sm font-light text-gray-300 outline-none lg:col-span-3 font-body"/>
           <div className="flex justify-end lg:col-span-1">
            <a href="#" className="mr-2 btn btn--primary">login</a>
            <a href="#" className="btn btn--secondary">volunteer</a>
           </div>
         </div>
         <nav>
          <ul className="flex items-center justify-between mt-4 text-sm font-semibold uppercase">
            <li className="pb-4 transition duration-200 ease-in-out border-b-4 border-transparent hover:cursor-pointer hover:border-brand-light group"><a href="#" className="group-hover:text-brand-light">home</a></li>
            <li className="pb-4 transition duration-200 ease-in-out border-b-4 border-transparent hover:cursor-pointer hover:border-brand-light group"><a href="#" className="group-hover:text-brand-light">about us</a></li>
            <li className="pb-4 transition duration-200 ease-in-out border-b-4 border-transparent hover:cursor-pointer hover:border-brand-light group"><a href="#" className="group-hover:text-brand-light">adoption</a></li>
            <li className="pb-4 transition duration-200 ease-in-out border-b-4 border-transparent hover:cursor-pointer hover:border-brand-light group"><a href="#" className="group-hover:text-brand-light">rabbit care</a></li>
            <li className="pb-4 transition duration-200 ease-in-out border-b-4 border-transparent hover:cursor-pointer hover:border-brand-light group"><a href="#" className="group-hover:text-brand-light">services</a></li>
            <li className="pb-4 transition duration-200 ease-in-out border-b-4 border-transparent hover:cursor-pointer hover:border-brand-light group"><a href="#" className="group-hover:text-brand-light">volunteer</a></li>
          </ul>
         </nav>
       </nav>
       <div className="lg:col-span-1">DONATE</div>
      </header>
      </div>

    </div>
  );
}
