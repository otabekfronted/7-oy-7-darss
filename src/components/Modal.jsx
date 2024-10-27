const Modal = ({ children, setShowModal }) => {
    return (
        <div className="z-20 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-2 right-2 text-gray-600"
                >
                    X
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
