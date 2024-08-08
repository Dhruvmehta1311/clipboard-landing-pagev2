const Buttons = () => {
  return (
    <div className="flex items-center justify-center gap-4 flex-col sm:flex-row w-full">
      <button className="text-white bg-strongCyan px-8 py-3 rounded-full drop-shadow-cyan-md-hsl w-[90%] sm:w-fit font-semibold hover:opacity-50">
        Download for iOS
      </button>
      <button className="text-white bg-lightBlue px-4 py-3 rounded-full drop-shadow-blue-md-hsl w-[90%] sm:w-fit font-semibold hover:opacity-75">
        Download for MAC
      </button>
    </div>
  );
};

export default Buttons;
