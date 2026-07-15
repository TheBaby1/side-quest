import BigBlackButton from "../buttons/BigBlackButton";

const SubmissionSuccessModal = ({ onClick, isDisabled }) => {
    return (
        <>
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg px-4">
                    <div className="flex flex-col gap-4">
                        <span>hello</span>
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