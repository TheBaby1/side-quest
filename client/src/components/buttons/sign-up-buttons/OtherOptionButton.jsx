const OtherOptionButton = ({ label, onClick }) => {
    return (
        <>
            <button
                className="border border-gray-300 text-black bg-white px-4 py-2 rounded-lg hover:bg-gray-400 cursor-pointer"
                onClick={onClick}
            >
                {label}
            </button>
        </>
    );
}

export default OtherOptionButton;