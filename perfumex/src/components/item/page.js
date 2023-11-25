import './item.css'

export default function Item() {
    return (
        <>
             <div className='item p-3 w-60'>
                        <img src="https://m.media-amazon.com/images/I/515DREionCL._AC_UL480_FMwebp_QL65_.jpg" className='h-52 rounded-sm shadow-2xl'/>
                        <h3 className='text-center' style={{marginTop: "5px"}}>Perfume Item 43</h3>
                        <center><button className="self-center p-2 m-1 rounded-lg" id="addToCartButton" style={{backgroundColor: "black",marginTop: "15px"}}>Add to cart 🛒</button>
                        </center>
                    </div>
        </>
    );
}