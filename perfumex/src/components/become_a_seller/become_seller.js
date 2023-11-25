import './becomeaseller.css';

export default function BecomeSeller() {
    return (
        <>

            <div className="becomeSellerDiv">
                <br  />

                <div className='boxes'>

                        <div className="leftBox">
                            <h1 className="sellerHeading">Become a seller!</h1>
                            <h3 className='sellerSubHeading'>Would you like to become a seller on perfumex?</h3>
                            <button className='becomeSellerButton'>Let's do this!</button>
                        </div>
                        <div className='rightBox'>
                            <img src="https://plus.unsplash.com/premium_photo-1661774914180-08cc5695c539?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNlbGxlcnxlbnwwfDB8MHx8fDA%3D" className='sellerImage'/>
                        </div>


                </div>
            </div>

        </>
    )
}
