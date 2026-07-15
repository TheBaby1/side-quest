import BigBlackButton from "../buttons/BigBlackButton";

const SubmissionSuccessModal = ({ onClick, isDisabled, isOpen }) => {
    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg px-8 py-6">
                    <div className="flex flex-col gap-4 mb-4">
                        <span className="text-zinc-950 font-semibold text-lg">Message sent!</span>
                        <span className="text-sm font-medium text-gray-700"
                        >
                            Thanks for reaching out. We'll get back to you shortly.
                        </span>
                    </div>

                    <div className="flex justify-center">
                        <BigBlackButton
                            label='Close'
                            onClick={onClick}
                            isDisabled={isDisabled}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SubmissionSuccessModal;