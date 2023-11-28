import RootLayout from "../layout";
import './landing-page.css';

export default function LandingPage() {
    return (
        <>
            <RootLayout>
                <main>
                    {/* we would need two boxes like chatgpt's landing page screen , yep */}

                    <div className="boxes">
                        <div className="leftBox">
                            <h2 className="landingPageHeading font-semibold m-6">PerfumeX</h2>
                            <h3 className="landingPageSubHeading ml-16 mt-32 "> Want a perfume? </h3>
                            <h4 className="landingPageSubSubHeading mt-0">Welcome to PerfumeX</h4>
                        </div>
                        <div className="rightBox flex-col justify-center align-center">
                            <h2 className="getStartedHeading mt-16 text-3xl font-semibold " style={{fontFamily: "Inter, sans-serif"}}> Get started </h2>
                            <br/>
                            <div className="loginButtons">
                                <button className="landingLoginBtn">Log In</button>
                                
                                <button className="landingRegisterBtn">Sign up</button>
                                
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                
                                
                            </div>
                            <div className="brandingFooter mt-16">
                            <img src="https://i.ibb.co/BKMNvPH/logo.jpg" height="60px" width="60px"/>
                            <h5>PerfumeX</h5>
                            </div>

                            <div className="endingFooter">
                                <h6>Terms of Use</h6>
                                <h6> | </h6>
                                <h6>Privacy Policy</h6>
                                </div>
                        </div>
                    </div>
                </main>
            </RootLayout>
        </>
    );
}