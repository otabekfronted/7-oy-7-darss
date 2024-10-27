import { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [language, setLanguage] = useState("EN");

    // Dark mode toggle
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
    };

    // Language toggle
    const toggleLanguage = () => {
        setLanguage(language === "EN" ? "UZ" : "EN");
    };

    return (
        <div
            className={`px-6 md:px-32 fixed w-full ${
                isDarkMode ? "bg-gray-800" : "bg-white"
            } shadow-md`}
        >
            <div className="container flex justify-between items-center py-4">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img
                        src="./public/logo.svg"
                        alt="Logo"
                        className="w-10 h-10"
                    />
                    <span
                        className={`font-semibold text-3xl ${
                            isDarkMode ? "text-white" : "text-black"
                        }`}
                    >
                        Brave
                    </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-gray-700">
                    <a
                        href="#"
                        className={`hover:text-black font-medium text-xl ${
                            isDarkMode ? "text-white" : "text-gray-700"
                        }`}
                    >
                        Templates
                    </a>
                    <a
                        href="#"
                        className={`hover:text-black font-medium text-xl ${
                            isDarkMode ? "text-white" : "text-gray-700"
                        }`}
                    >
                        Features
                    </a>
                    <a
                        href="#"
                        className={`hover:text-black font-medium text-xl ${
                            isDarkMode ? "text-white" : "text-gray-700"
                        }`}
                    >
                        Pricing
                    </a>
                    <a
                        href="#"
                        className={`hover:text-black font-medium text-xl ${
                            isDarkMode ? "text-white" : "text-gray-700"
                        }`}
                    >
                        Resources
                    </a>
                </nav>

                {/* Mobile Navigation Toggle & Dark/Light Mode */}
                <div className="flex items-center space-x-4">
                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        className="text-lg font-semibold text-blue-500"
                    >
                        {language}
                    </button>

                    {/* Dark Mode Toggle */}
                    <button onClick={toggleDarkMode} className="text-lg">
                        {isDarkMode ? (
                            <FaSun className="text-yellow-400" />
                        ) : (
                            <FaMoon className="text-blue-500" />
                        )}
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-2xl text-gray-700"
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <nav
                    className={`md:hidden p-6 space-y-4 ${
                        isDarkMode
                            ? "bg-gray-800 text-white"
                            : "bg-white text-gray-700"
                    }`}
                >
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
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="w-full mt-4 py-2 bg-blue-500 text-white font-bold rounded-full"
                    >
                        Start Free Trial
                    </button>
                </nav>
            )}
        </div>
    );
}

export default Header;
