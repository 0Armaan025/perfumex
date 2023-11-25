// page.js

import RootLayout from './layout';
import Navbar from '@/components/navbar/page';
import Footer from '@/components/footer/page';
import BecomeSeller from '@/components/become_a_seller/become_seller';
import StartWithShopping from '@/components/start_with_shopping/start_with_shopping';

export default function Home() {
  return (
    <RootLayout>
      <main>
        <Navbar/>
        
        <BecomeSeller/>
        <StartWithShopping/>
        <Footer/>
      </main>
    </RootLayout>
  );
}
