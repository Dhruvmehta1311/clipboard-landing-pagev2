import headerImg from "../assets/images/bg-header-desktop.png";
import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="relative flex items-center justify-center pt-28">
      <img className="w-full absolute top-0" src={headerImg} alt="" />
      <div className="flex flex-col justify-center items-center max-w-[500px] w-[90%] gap-6">
        <img src={logo} alt="" />
        <p className="text-center">A history of everything you copy</p>
        <p className="text-center">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <button className="text-white bg-strongCyan px-4 py-2 rounded-full drop-shadow-cyan-md-hsl">
            Download for iOS
          </button>
          <button className="text-white bg-lightBlue px-4 py-2 rounded-full drop-shadow-blue-md-hsl">
            Download for MAC
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
