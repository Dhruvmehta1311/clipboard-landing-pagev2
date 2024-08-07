import Buttons from "./Buttons";

const Bottom = () => {
  return (
    <section className="flex flex-col gap-8 max-w-[630px] w-[90%] mx-auto">
      <div className="flex flex-col gap-8">
        <p className="font-baiJamjuree text-2xl font-semibold text-gray-700 text-center">
          Clipboard for iOS and Mac OS
        </p>
        <p className="font-baiJamjuree text-center text-gray-400">
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
        </p>
      </div>
      <Buttons />
    </section>
  );
};

export default Bottom;
