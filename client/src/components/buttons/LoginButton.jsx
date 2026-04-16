const LoginButton = ({ onClick }) => {
  return (
    <>
      <button
        className="text-black hover:text-gray-400 cursor-pointer"
        onClick={onClick}
      >
        Login
      </button>
    </>
  );
}

export default LoginButton;