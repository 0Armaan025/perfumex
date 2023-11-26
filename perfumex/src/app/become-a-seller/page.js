"use client";

import Navbar from "@/components/navbar/page";
import RootLayout from "../layout";
import './becomeaseller.css';
import PhoneInputGfg from "@/components/phone_input";


export default function BecomeASeller() {
  return (
    <>
    <RootLayout>
      <main>
        <Navbar/>
        <center>
        <div className="sellerRegistrationForm flex flex-col justify-center align-center m-8 rounded">
          <h2 className="text-5xl mt-8" id="sellerRegistrationHeading"> Seller Registeration. </h2>
          <h4 className="text-xl mt-5"> We are very happy to see you become a new seller on PerfumeX. </h4>
          <div className="sellerForm border-rounded">
          <h5 className="mt-8 text-2xl font-extrabold" style={{fontFamily: "poppins,sans-serif"}}>Please enter business details.</h5>
          <p className="guidelineText text-base">These are important to sell online.</p>
          <br/>
          <label className="labelText mt-16">Please enter your 15 digit GST Number.</label>
          <br/>
          <input type="text" placeholder="Example: 22AAAAA0000A1Z5" className="formField p-2 m-4 align-center border-slate-50 w-80"/>
          <br/>
          <label className="labelText mt-16">Please enter your business name.</label>
          <br/>
          <input type="text" placeholder="Armaan Enterprises etc..." className="formField p-2 m-4 align-center w-80 border-slate-50"/>
          <br/>
          <label className="labelText mt-16">Please enter your business address.</label>
          <br/>
          <input type="address" placeholder="Address line 1" className="formField p-2 m-2 align-center w-80 border-slate-50"/>
          <br/>
          <input type="address" placeholder="Address line 2" className="formField p-2 m-2 align-center w-80 border-slate-50"/>
          <br/>
          <br/>
          <label className="labelText mt-16">Specific business details? (OPTIONAL)</label>
          <br/>
          <input type="email" placeholder="email: businessemail@gmail.com" className="formField p-2 m-2 align-center border-slate-50 w-80"/>
          <br/>
          <input type="phone" placeholder="phone: +917837433000" className="formField p-2 m-2 align-center border-slate-50 w-80"/>
          <br/>
          <br/>
          </div>
          <center>
            <input type="button" className="becomeSellerBtn rounded-xl outline-dotted m-4 w-48 h-12 align-center justify-center" value="Apply!"/>
          </center>
          <br/>
        </div>
        <hr color="slate" className="w-full"/>
        <br/>
        <h2 className="text-5xl font-black mt-8"> Why sell on PerfumeX? </h2>
        </center>
      </main>
    </RootLayout>
    </>
  );
    
}