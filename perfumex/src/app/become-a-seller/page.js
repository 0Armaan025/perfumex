import Navbar from "@/components/navbar/page";
import RootLayout from "../layout";
import SellerRegistrationForm from "@/components/seller_registration_form/page";

export default function BecomeASeller() {
  return (
    <>
    <RootLayout>
      <main>
        <Navbar/>
        
      <SellerRegistrationForm/>
      </main>
    </RootLayout>
    </>
  );
    
}