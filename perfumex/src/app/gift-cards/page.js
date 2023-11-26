import Navbar from "@/components/navbar/page";
import RootLayout from "../layout";
import './giftcards.css';
import Footer from "@/components/footer/page";

export default function GiftCards() {
    return (
        <>
            <RootLayout>
                <main>
                    <Navbar />
                    <center>
                        <div className="giftStoreHeading flex-row justify-center align-center">
                            <img src="https://i.pinimg.com/originals/14/12/58/141258a3d8ac3129bc0e2abb7c3bd78e.gif" height='150px' width='150px' className="m-4 rounded-md mt-7" />
                            <h1 className="text-4xl mt-12 font-semibold" style={{ fontFamily: "Indie Flower, sans-serif;" }}> PerfumeX Gift cards store</h1>

                        </div>
                        <br />
                        <div className="giftCards">
                            <img src="https://i.ibb.co/yn82L0n/New-Project.png" width="40%" height="20%" />
                            <img src="https://i.postimg.cc/VNx8JbCW/New-Project-1.png" width="40%" height="20%" style={{ marginLeft: "20px" }} />

                        </div>
                        <br />
                        <hr className="bg-slate-50 w-full" />
                        <br />
                        <h2 className="text-4xl font-bold align-left mr-96"> Gift Cards for every ocassions on PerfumeX </h2>
                        
                        <br />
                        <div className="createGiftCardDiv mt-8 rounded p-8 mr-60 ml-60">
                        <center>
                        <h4 className="createGiftCardText text-6xl font-light">Create a gift card</h4>
                        </center>
                            <div className="giftReceiverDetails">
                                <br />
                                <label className="labelText mt-16">Please enter receiver's name.</label>
                                <br />
                                <input type="text" placeholder="Armaan" className="formField p-2 m-4 align-center w-80 border-slate-50" />
                                <br />

                                <label className="labelText mt-16">Please enter receiver's email.</label>
                                <br />
                                <input type="text" placeholder="theiremail@gmail.com" className="formField p-2 m-4 align-center w-80 border-slate-50" />
                                <br />

                                <label className="labelText mt-16">Any message to send them? (OPTIONAL).</label>
                                <br />
                                <input type="text" placeholder="Heyy, a gift for ya!" className="formField p-2 m-4 align-center w-80 border-slate-50" />
                                <br />
                                <div className="choiceDiv">
                                <input type="radio" name="choice" value="Email them after clicking the create button?" className="priceRadio" />
                                <label for="price" className="priceLabel ml-2">Email them after clicking create button?</label>
                                <input type="radio" name="choice" value="Email them after clicking the create button?" className="priceRadio ml-8" />
                                <label for="price" className="priceLabel ml-2">Don't email?</label>
                                </div>
                                
                            </div>
                            <br />
                            <div className="pricesDiv">
                                <h4 className="pricesText text-xl font-bold">Choose a price ($)</h4>
                                <div className="prices">
                                    <div className="price">
                                        <input type="radio" name="price" value="10" className="priceRadio" />
                                        <label for="price" className="priceLabel">$10</label>
                                    </div>
                                    <div className="price">
                                        <input type="radio" name="price" value="20" className="priceRadio" />
                                        <label for="price" className="priceLabel">$20</label>
                                    </div>
                                    <div className="price">
                                        <input type="radio" name="price" value="50" className="priceRadio" />
                                        <label for="price" className="priceLabel">$50</label>
                                    </div>
                                    <div className="price">
                                        <input type="radio" name="price" value="80" className="priceRadio" />
                                        <label for="price" className="priceLabel">$80</label>
                                    </div>
                                    <div className="price">
                                        <input type="radio" name="price" value="100" className="priceRadio" />
                                        <label for="price" className="priceLabel">$100</label>
                                    </div>
                                    <div className="price">
                                        <input type="radio" name="price" value="120" className="priceRadio" />
                                        <label for="price" className="priceLabel">$120</label>
                                    </div>
                                    <div className="price">
                                        <input type="radio" name="price" value="custom" className="priceRadio" />
                                        <input type="number" placeholder="custom" className="customNumber ml-2 p-1 h-8 w-20" />
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <br/>
                        <center>
                                    <input type="button" value="Create" className="createGiftCardBtn text-3xl p-3 m-4 rounded-lg"/>
                                    <hr className="bg-slate-50 w-full" />
                                    <br/>
                                    <br/>

                                    <h2 className="text-5xl font-bold align-left mr-96"> Redeem a gift card </h2>
                                    <h4 className="text-2xl font-thin mr-50 mt-8"> It should be something like XA42-4342-8812-ABC3 </h4>
                                    <div className="redeemCodeFields">

                                        <input type="text" placeholder="XA42" className="formField p-2 m-4 align-center w-16 border-slate-50" />
                                        <h1 className="font-bold text-2xl">-</h1>
                                        <input type="text" placeholder="4342" className="formField p-2 m-4 align-center w-16 border-slate-50" />
                                        <h1 className="font-bold text-2xl">-</h1>
                                        <input type="text" placeholder="8812" className="formField p-2 m-4 align-center w-16 border-slate-50" />
                                        <h1 className="font-bold text-2xl">-</h1>
                                        <input type="text" placeholder="ABC3" className="formField p-2 m-4 align-center w-16 border-slate-50" />
                                       
                                    </div>
                                    
                                        <input type="button" value="Redeem" className="redeemGiftCardBtn text-xl p-3 m-1 rounded"/>
                                        <br/><br/><br/><br/>
                                </center>

                                
                    </center>
                    <Footer/>

                </main>
            </RootLayout>
        </>
    );
}