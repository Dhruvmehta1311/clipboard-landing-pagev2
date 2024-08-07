import googleLogo from "../assets/images/logo-google.png";
import ibmLogo from "../assets/images/logo-ibm.png";
import microsoftLogo from "../assets/images/logo-microsoft.png";
import hpLogo from "../assets/images/logo-hp.png";
import vectorLogo from "../assets/images/logo-vector-graphics.png";

const companyLogos = [
  {
    img: googleLogo,
  },
  {
    img: ibmLogo,
  },
  {
    img: microsoftLogo,
  },
  {
    img: hpLogo,
  },
  {
    img: vectorLogo,
  },
];

const CompanysLogo = () => {
  return (
    <div className=" max-w-[1500px] w-[65%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5  place-items-center gap-12">
      {companyLogos.map((companyLogo) => (
        <img
          className="w-[120px]"
          key={companyLogo.img}
          src={companyLogo.img}
          alt=""
        />
      ))}
    </div>
  );
};

export default CompanysLogo;
