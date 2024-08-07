/* eslint-disable react/prop-types */
const UpperText = ({ reusableTextOne }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold text-3xl text-gray-700">
        {reusableTextOne.title}
      </h2>
      <p className="text-gray-400">{reusableTextOne.text}</p>
    </div>
  );
};

export default UpperText;
