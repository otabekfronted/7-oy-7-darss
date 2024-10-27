import { useEffect, useState } from "react";
import Modal from "./Modal";
import { toast } from "react-hot-toast";

function NewUserForma({ addUser, setShowModal, selectedUser }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [job, setJob] = useState("");
    const cardCreate = () => toast.success("Successfully Create Card!");

    useEffect(() => {
        if (selectedUser) {
            setFirstName(selectedUser.firstName);
            setLastName(selectedUser.lastName);
            setJob(selectedUser.job);
            setJob(selectedUser.email);
            setPhoneNumber(selectedUser.phoneNumber);
        } else {
            setFirstName("");
            setLastName("");
            setJob("");
        }
    }, [selectedUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            id: selectedUser ? selectedUser.id : Date.now(),
            firstName,
            lastName,
            job,
            email,
            phoneNumber,
        };
        addUser(user);
        setShowModal(false);
    };

    return (
        <Modal setShowModal={setShowModal}>
            <form onSubmit={handleSubmit}>
                <h2 className="text-xl mb-4">
                    {selectedUser ? "Update User" : "Create User"}
                </h2>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    required
                    className="border p-2 mb-4 w-full"
                />
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    required
                    className="border p-2 mb-4 w-full"
                />
                <input
                    type="text"
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                    placeholder="Job"
                    required
                    className="border p-2 mb-4 w-full"
                />
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="border p-2 mb-4 w-full"
                />
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Phone Number"
                    required
                    className="border p-2 mb-4 w-full"
                />

                <div className="flex justify-between">
                    <button
                        onClick={() => cardCreate()}
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded"
                    >
                        {selectedUser ? "Update" : "Create"}
                    </button>
                    <button
                        onClick={() => {
                            setShowModal(false);
                        }}
                        className="bg-red-500 text-white py-2 px-4 rounded"
                    >
                        Close
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export default NewUserForma;
