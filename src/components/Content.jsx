import imageComputer from "../assets/images/image-computer.png";

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

const Content = () => {
  return (
    <div>
      <section className="max-w-[590px] w-[95%] mx-auto text-center pt-20 flex flex-col gap-4">
        <h2 className="font-semibold text-2xl text-gray-700">
          Keep track of your snippets
        </h2>
        <p className="text-gray-400">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </section>
      <section className="pt-10 flex flex-col lg:flex-row">
        <img src={imageComputer} alt="" />
        <div className="max-w-[400px] pt-20 w-[90%] mx-auto  flex  flex-col gap-16">
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
    </div>
  );
};

export default Content;
