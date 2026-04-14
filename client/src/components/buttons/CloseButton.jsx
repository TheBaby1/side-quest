const CloseButton = ({ onClick }) => {
    return (
        <>
            <button
                className="bg-white text-black px-4 py-4 rounded-full hover:bg-gray-400 cursor-pointer"
                onClick={onClick}
            >
                x
            </button>        
        </>
    );
}

export default CloseButton;