import logo from "../assets/images/logo.svg";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100 w-full">
      <div className="flex justify-between max-w-[1000px] w-[90%] mx-auto py-12 flex-col sm:flex-row gap-8 items-center ">
        <section className="flex flex-col sm:flex-row gap-4 sm:gap-14 text-gray-700 font-medium items-center">
          <section className="flex items-center justify-center">
            <img className="h-12 w-12" src={logo} alt="" />
          </section>
          <section className="grid gap-4 place-items-center">
            <p className="cursor-pointer hover:text-strongCyan">FAQs</p>
            <p className="cursor-pointer hover:text-strongCyan">Contact Us</p>
          </section>
          <section className="grid gap-4 place-items-center">
            <p className="cursor-pointer hover:text-strongCyan">
              Privacy Policy
            </p>
            <p className="cursor-pointer hover:text-strongCyan">Press Kit</p>
          </section>
          <section className="grid gap-4 place-items-center">
            <p className="cursor-pointer hover:text-strongCyan">
              Install Guide
            </p>
          </section>
        </section>
        <section className="flex gap-10 sm:gap-4 items-center">
          {/* <img
            className="h-6 cursor-pointer hover:bg-strongCyan"
            src={fb}
            alt=""
          /> */}
          <FaFacebookSquare className="h-6 cursor-pointer hover:text-strongCyan text-2xl" />
          <FaTwitter className="h-6 cursor-pointer hover:text-strongCyan text-2xl" />
          <FaInstagram className="h-6 cursor-pointer hover:text-strongCyan text-2xl" />

          {/* <img
            className="h-6 cursor-pointer hover:text-strongCyan"
            src={instagram}
            alt=""
          /> */}
          {/* <img
            className="h-6 cursor-pointer hover:bg-strongCyan"
            src={twitter}
            alt=""
          /> */}
        </section>
      </div>
    </div>
  );
};

export default Footer;
