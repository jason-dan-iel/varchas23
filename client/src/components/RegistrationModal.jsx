import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai"

Modal.setAppElement("#root"); // Set the root element for accessibility

// eslint-disable-next-line react/prop-types
const RegistrationModal = ({ isOpen, onClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="PDF Modal"
            className="fixed inset-0 flex items-center justify-center z-50"
            overlayClassName="fixed inset-0 bg-gray-800 opacity-80"
        >
            <div className="bg-blue-500 opacity-100 p-4 rounded-lg w-full max-w-[540px]">
                <h2 className="text-3xl text-white font-semibold mb-4">
                    Registration Form
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-white text-lg font-medium mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-blue-100 text-gray-900 rounded-lg py-2 px-3 focus:outline-none focus:bg-blue-200"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-3xl text-green-300 hover:text-green-500"
                >
                    <AiOutlineClose />
                </button>
            </div>
        </Modal>
    );
};

export default RegistrationModal;