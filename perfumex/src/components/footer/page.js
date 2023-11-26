import Link from "next/link";

export default function Footer() {
    return (
        <>


            <footer className="bg-black rounded-lg shadow">
                <div className="w-full max-w-screen-xl mx-auto md:py-8 p-4">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src="https://i.ibb.co/BKMNvPH/logo.jpg" className="h-8" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PerfumeX</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <Link href="/become-a-seller" className="hover:underline me-4 md:me-6">Sell on PerfumeX</Link>
                            </li>
                            <li>
                                <Link href="/gift-cards" className="hover:underline me-4 md:me-6">Giftcards</Link>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Advertise Your Products</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Amazon helpline</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" className="hover:underline">PerfumeX™</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </>
    );
}