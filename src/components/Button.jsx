export const Button = ({ content = "I am a button", onClick = () => {} }) => {
    return (
        <button
            onClick={onClick}
            className="bg-teal-700 px-4 py-2 mx-2 rounded-md"
        >
            {content}
        </button>
    );
};
