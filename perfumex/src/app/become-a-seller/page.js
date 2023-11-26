"use client";

import Navbar from "@/components/navbar/page";
import RootLayout from "../layout";
import './becomeaseller.css';
import Footer from "@/components/footer/page";


export default function BecomeASeller() {
  return (
    <>
    
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
          <input type="phone" placeholder="phone: +91XXXXXXXXXX" className="formField p-2 m-2 align-center border-slate-50 w-80"/>
          <br/>
          <br/>
          </div>
          <center>
            <input type="button" className="becomeSellerBtn rounded-xl outline-dotted m-4 w-72 h-12 align-center justify-center" value="Register and continue! ->"/>
          </center>
          <br/>
        </div>
        <hr color="slate" className="w-full"/>
        <br/>
        <h2 className="text-5xl font-black mt-8"> Why sell on PerfumeX? </h2>
        <div className="featuresRow flex-row justify-center align-center m-8 p-2">
            <div className="feature w-72 p-4">
              <img src="https://img1a.flixcart.com/fk-sp-static/images/Onboarding_logo_Truck.svg"/>
              <h3 className="featureHeading text-2xl font-semibold mt-2">Sell Across India</h3>
              <p className="featureText w-52 text-sm mt-2 font-normal">Reach over 50 crore+ customers across 27000+ pincodes.</p>
            </div>
            <div className="feature w-72 p-4">
              <img src="https://img1a.flixcart.com/fk-sp-static/images/Onboarding_logo_Percent.svg"/>
              <h3 className="featureHeading text-2xl font-semibold mt-2">Higher profits</h3>
              <p className="featureText w-52 text-sm mt-2 font-normal">With 0% commission* , you take 100% profits with you.</p>
            </div>
            <div className="feature w-72 p-4">
              <img src="https://img1a.flixcart.com/fk-sp-static/images/Onboarding_logo_Account.svg"/>
              <h3 className="featureHeading text-2xl font-semibold mt-2">Account Management</h3>
              <p className="featureText w-52 text-sm mt-2 font-normal">Our Dedicated managers will help your business on PefumeX.</p>
            </div>
            <div className="feature w-72 p-4">
              <img src="https://img1a.flixcart.com/fk-sp-static/images/Onboarding_logo_Charges.svg"/>
              <h3 className="featureHeading text-2xl font-semibold mt-2">Lower Return Charges</h3>
              <p className="featureText w-52 text-sm mt-2 font-normal">With our flat and low return charges, ship your products stress-free.</p>
            </div>
          </div>
          <div className="featuresRow flex-row justify-center align-center m-8 p-2">
            <div className="feature w-72 p-4">
              <img src="https://img1a.flixcart.com/fk-sp-static/images/Onboarding_logo_Calculator.svg"/>
              <h3 className="featureHeading text-2xl font-semibold mt-2">Simple Pricing Calculator</h3>
              <p className="featureText w-52 text-sm mt-2 font-normal">Use our simple pricing calculator to decide the best and competitive selling price for your product.</p>
            </div>
            <div className="feature w-72 p-4">
              <img src="https://img1a.flixcart.com/fk-sp-static/images/Onboarding_logo_Support.svg"/>
              <h3 className="featureHeading text-2xl font-semibold mt-2">24x7 Seller Support</h3>
              <p className="featureText w-52 text-sm mt-2 font-normal">All your queries and issues are answered by our dedicated Seller Support Team.</p>
            </div>
            <div className="feature w-72 p-4">
              <img src="https://img1a.flixcart.com/fk-sp-static/images/Onboarding_logo_Payments.svg"/>
              <h3 className="featureHeading text-2xl font-semibold mt-2">Fast & Regular Payments</h3>
              <p className="featureText w-52 text-sm mt-2 font-normal">Get payments as fast as 7-10 days from the date of dispatch.</p>
            </div>
            <div className="feature w-72 p-4">
              <img src="https://img1a.flixcart.com/fk-sp-static/images/Onboarding_logo_Mobile.svg"/>
              <h3 className="featureHeading text-2xl font-semibold mt-2">Business on the go</h3>
              <p className="featureText w-52 text-sm mt-2 font-normal">Download our Flipkart Seller App to manage your business anywhere, anytime.</p>
            </div>
          </div>
        </center>
        
      </main>
    
    <Footer/>
    </>
  );
    
}