import CloseButton from "../buttons/CloseButton";
import CancelButton from "../buttons/CancelButton";
import ConfirmButton from "../buttons/ConfirmButton";

const SignUpModal = ({ isOpen, onClose }) => {
    return(
        <>
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-black font-semibold">Join Our Community</h2>
                        <CloseButton/>
                    </div>

                    <div className="mb-6">
                        <h3>
                            fields here
                        </h3>
                    </div>

                    <div className="flex justify-between items-center mb-6">
                        <CancelButton/>
                        <ConfirmButton/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUpModal;