const Button = ({
  buttonLabel,
  buttonBackgroundColor,
}: {
  buttonLabel: string;
  buttonBackgroundColor: string;
}) => {
  return (
    <button
      className={`bg-${buttonBackgroundColor}-500 text-white px-4 py-2 rounded-lg`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
