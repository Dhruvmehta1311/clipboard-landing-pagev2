const Buttons = () => {
  return (
    <div className="flex items-center justify-center gap-4 flex-col sm:flex-row w-full">
      <button className="text-white bg-strongCyan px-4 py-3 rounded-full drop-shadow-cyan-md-hsl w-[90%] sm:w-fit font-semibold">
        Download for iOS
      </button>
      <button className="text-white bg-lightBlue px-4 py-3 rounded-full drop-shadow-cyan-md-hsl w-[90%] sm:w-fit font-semibold">
        Download for MAC
      </button>
    </div>
  );
};

export default Buttons;
