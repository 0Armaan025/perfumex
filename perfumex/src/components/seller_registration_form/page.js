// SellerRegistrationForm.js
import RootLayout from "@/app/layout";
import FormInputField from "../form_input_field/page";

export default function SellerRegistrationForm() {
  const handleInputChange = (value) => {
    console.log(`Input value changed to: ${value}`);
    // You can perform additional actions with the input value here
  };

  return (
    <>
      <RootLayout>
        <main>
          <h2>Welcome, new seller! 🚀</h2>
          <h3>We are happy to see new sellers on PerfumeX!</h3>
         
        </main>
      </RootLayout>
    </>
  );
}
