import Item from '../item/page';
import './startwithshopping.css';
export default function StartWithShopping() {
    return (
        <>
            <div className="startWithShoppingDiv flex-col justify-center align-center">
                <h4 className="text-3xl dark:text-white mx-4 my-4" id="shoppingHeader" style={{fontWeight: "bold"}}>Kickstart your shopping with PerfumeX!</h4>
                <div className="itemsDiv flex-row jutify-center align-center p-3 mx-2 my-3 rounded " style={{backgroundColor: "#171616"}}>

                    
                   <Item/>
                   <Item/>
                   <Item/>
                   <Item/>
                   <Item/>
                   
                           
                   
                </div>
            </div>

        </>
    );
}