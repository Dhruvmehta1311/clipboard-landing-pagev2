import imageComputer from "../assets/images/image-computer.png";
import imageDevices from "../assets/images/image-devices.png";
import UpperText from "./UpperText";

const features = [
  {
    title: "Quick Search",
    description:
      "Easily search your snippets by content, category, web address, application, and more.",
  },
  {
    title: "iCloud Sync",
    description: "Instantly saves and syncs snippets across all your devices.",
  },
  {
    title: "Complete History",
    description:
      "Retrieve any snippets from the first moment you started using the app.",
  },
];

const reusableText = [
  {
    title: "Keep track of your snippets",
    text: "Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.",
  },
  {
    title: "Access Clipboard anywhere",
    text: "Whether you’re on the go, or at your computer, you can access all your Clipboard  snippets in a few simple clicks.",
  },
  {
    title: "Supercharge your workflow",
    text: "We've got the tools to boost your productivity.",
  },
];

const Content = () => {
  return (
    <div>
      <section className="max-w-[590px] w-[95%] mx-auto text-center  flex flex-col gap-4">
        <UpperText reusableTextOne={reusableText[0]} />
      </section>
      <section className="pt-10 flex flex-col lg:flex-row">
        <div>
          <img
            className="max-w-full w-[90%] mx-auto"
            src={imageComputer}
            alt=""
          />
        </div>
        <div className="max-w-[400px] pt-20 w-[90%] lg:mx-auto pl-10  flex  flex-col gap-16">
          {features.map((feature) => (
            <div className="flex flex-col gap-4" key={feature.title}>
              <h3 className="text-xl font-semibold text-gray-700 text-center sm:text-left">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-center sm:text-left">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-[690px] w-[95%] mx-auto text-center pt-20 flex flex-col gap-10">
        <UpperText reusableTextOne={reusableText[1]} />
        <img className="max-w-full w-[90%] mx-auto" src={imageDevices} alt="" />
        <UpperText reusableTextOne={reusableText[2]} />
      </section>
    </div>
  );
};

export default Content;
