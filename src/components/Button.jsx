export const Button = ({ content = "I am a button", onClick = () => {} }) => {
    return (
        <button
            onClick={onClick}
            className="bg-teal-600 text-white px-4 py-2 mx-2 rounded-md font-bold hover:bg-teal-500"
        >
            {content}
        </button>
    );
};
