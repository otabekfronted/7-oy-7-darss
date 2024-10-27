function Hero() {
    return (
        <div className="bg-blue-50 py-10 min-h-screen flex flex-col justify-center">
            <div className="text-center max-w-[852px] mx-auto">
                <p className="text-sm text-gray-500">Contact Us</p>
                <h1 className="text-4xl font-bold">
                    Say <span className="text-blue-500">Hello!</span> We’re
                    always here to help.
                </h1>
                <p className="mt-4 text-gray-600">
                    Interested in learning more about SmartMoving? Give us a
                    call or send an email and one of our <br /> team members
                    will be happy to assist you.
                </p>
            </div>

            <div className="mt-8 flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6 justify-center">
                <div className="flex items-center space-x-4 bg-white shadow-md p-6 rounded-lg">
                    <div className="text-blue-500">
                        {/* Phone icon */}
                        <img src="./public/phone.svg" alt="" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">CALL US</p>
                        <p className="font-bold text-lg">+1 (214) 960 4130</p>
                    </div>
                </div>

                <div className="flex items-center space-x-4 bg-white shadow-md p-6 rounded-lg">
                    <div className="text-blue-500">
                        {/* Email icon */}
                        <img src="./public/email.svg" alt="" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Email Us</p>
                        <p className="font-bold text-lg">hello@aiinfo.com</p>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex justify-center">
                <div className="flex items-center space-x-4 bg-white shadow-md p-6 rounded-lg">
                    <div className="text-blue-500">
                        {/* Location icon */}
                        <img src="./public/location.svg" alt="" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">HEADQUARTERS</p>
                        <p className="font-bold text-lg">
                            12720 Hillcrest Road Suite 980, Dallas, TX 75230
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
