import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

function Header() {
    return (
        <div className="px-6 md:px-32 fixed w-full bg-white shadow-md dark:bg-gray-800">
            <div className="container flex justify-between items-center py-4">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img
                        src="./public/logo.svg"
                        alt="Logo"
                        className="w-10 h-10"
                    />
                    <span className="font-semibold text-3xl text-black dark:text-white">
                        Brave
                    </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-gray-700 dark:text-white">
                    <a
                        href="#"
                        className="hover:text-black font-medium text-xl"
                    >
                        Templates
                    </a>
                    <a
                        href="#"
                        className="hover:text-black font-medium text-xl"
                    >
                        Features
                    </a>
                    <a
                        href="#"
                        className="hover:text-black font-medium text-xl"
                    >
                        Pricing
                    </a>
                    <a
                        href="#"
                        className="hover:text-black font-medium text-xl"
                    >
                        Resources
                    </a>
                </nav>

                {/* Language & Dark Mode Toggle */}
                <div className="flex items-center space-x-4">
                    {/* Language Toggle */}
                    <button className="text-lg font-semibold text-blue-500">
                        EN
                    </button>

                    {/* Dark Mode Toggle */}
                    <button className="text-lg">
                        <FaMoon className="text-blue-500" />
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden text-2xl text-gray-700">
                        <FaBars />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <nav className="md:hidden p-6 space-y-4 bg-white text-gray-700 dark:bg-gray-800 dark:text-white">
                <a href="#" className="block font-medium text-xl">
                    Templates
                </a>
                <a href="#" className="block font-medium text-xl">
                    Features
                </a>
                <a href="#" className="block font-medium text-xl">
                    Pricing
                </a>
                <a href="#" className="block font-medium text-xl">
                    Resources
                </a>
                <button className="w-full mt-4 py-2 bg-blue-500 text-white font-bold rounded-full">
                    Start Free Trial
                </button>
            </nav>
        </div>
    );
}

export default Header;
