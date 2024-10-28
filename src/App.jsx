import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NewUserForma from "./components/NewUserForma";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

function App() {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("theme")) {
            dispatch({ type: localStorage.getItem("theme").toUpperCase() });
        }
    }, []);

    useEffect(() => {
        if (!hasLoaded) {
            const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
            savedCart.forEach((item) => {
                dispatch({ type: "ADD_CART", payload: item });
            });
            setHasLoaded(true);
        }
    }, [hasLoaded, dispatch]);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addUser = (user) => {
        if (selectedUser) {
            dispatch({ type: "UPDATE_CART", payload: user });
            setSelectedUser(null);
        } else {
            const newUser = {
                ...user,
                id: Date.now(),
            };
            dispatch({ type: "ADD_CART", payload: newUser });
        }
        setShowModal(false);
    };

    function handleRemove(id) {
        dispatch({ type: "REMOVE_CART", payload: id });
        toast.error("Card successfully removed!");
    }

    function handleUpdateCart(user) {
        setSelectedUser(user);
        setShowModal(true);
    }
    function clearCart() {
        dispatch({ type: "CLEAR_CART" });
        toast.success("All cards cleared successfully!");
    }

    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: "#333",
                        color: "#fff",
                        marginTop: "50px",
                    },
                }}
            />
            <Header />
            <Hero />
            {showModal && (
                <NewUserForma
                    addUser={addUser}
                    setShowModal={setShowModal}
                    selectedUser={selectedUser}
                />
            )}
            <div
                className="bg-black"
                style={{
                    backgroundImage: "url('/buttonbg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {cart.map((value) => (
                        <div
                            key={value.id}
                            className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                        >
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                    {value.firstName} {value.lastName}
                                </h2>
                                <p className="text-gray-600 mt-1">
                                    <strong>Job: </strong> {value.job}
                                </p>
                                <p className="text-gray-600 mt-1">
                                    <strong>Email: </strong>
                                    {value.email || "N/A"}
                                </p>
                                <p className="text-gray-600 mt-1">
                                    <strong>Phone: </strong>
                                    {value.phoneNumber || "N/A"}
                                </p>
                                <div className="flex justify-between mt-4">
                                    <button
                                        onClick={() => handleRemove(value.id)}
                                        className="flex items-center bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300"
                                    >
                                        <FaTrashAlt className="mr-2" />
                                        Remove
                                    </button>
                                    <button
                                        onClick={() => handleUpdateCart(value)}
                                        className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                                    >
                                        <FaEdit className="mr-2" />
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={() => setShowModal(true)}
                className="-rotate-90 font-bold font-sans text-[17px] fixed top-1/2 -left-[46px] bg-blue-500 text-white py-3 px-6 rounded-r-lg shadow-lg hover:bg-blue-600 transition-all duration-300"
            >
                Create Card
            </button>
            <button
                onClick={() => clearCart()}
                className="-rotate-90 font-bold font-sans text-[26px] fixed top-[440px] -left-[12px] bg-red-500 text-white py-3 px-6 rounded-l-lg shadow-lg hover:bg-red-600 transition-all duration-300"
            >
                <MdOutlineClear />
            </button>
        </div>
    );
}

export default App;
