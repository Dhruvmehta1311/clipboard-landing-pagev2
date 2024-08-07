import iconBlacklist from "../assets/images/icon-blacklist.svg";
import iconText from "../assets/images/icon-text.svg";
import iconPreview from "../assets/images/icon-preview.svg";

const previews = [
  {
    img: iconBlacklist,
    title: "Create blacklists",
    content:
      "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
  },
  {
    img: iconText,
    title: "Plain Text Snippets",
    content:
      "Remove unwanted formatting from copied text for a consistent look.",
  },
  {
    img: iconPreview,
    title: "Sneak preview",
    content: "Quick preview of all snippets on your Clipboard for easy access.",
  },
];

const Preview = () => {
  return (
    <div className="max-w-[890px] w-[90%] mx-auto flex flex-col sm:flex-row gap-10 items-center">
      {previews.map((preview) => (
        <div
          key={preview.title}
          className="flex flex-col items-center justify-center gap-6 text-center"
        >
          <img src={preview.img} alt="" />
          <h2 className="text-gray-700 font-semibold text-xl">
            {preview.title}
          </h2>
          <p className="text-gray-400">{preview.content}</p>
        </div>
      ))}

      {/* <div className="flex flex-col items-center gap-6 text-center">
        <img className="h-10 w-10" src={iconBlacklist} alt="" />
        <h2 className="font-semibold text-xl">Create blacklists</h2>
        <p>
          Ensure sensitive information never makes its way to your clipboard by
          excluding certain sources.
        </p>
      </div>
      <div className="flex flex-col items-center gap-6 text-center"> 
      <img className="h-10 w-10" src={iconBlacklist} alt="" />
      <h2 className="font-semibold text-xl">Create blacklists</h2>
      <p>
        Ensure sensitive information never makes its way to your clipboard by
        excluding certain sources.
      </p>
      </div>*/}
    </div>
  );
};

export default Preview;
