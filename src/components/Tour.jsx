import { useState } from "react";

export const Tour = ({ id, image, def, text, onClick }) => {
  const [fullText, setFullText] = useState(false);

  const readMore = () => {
    setFullText(true);
  };
  const showLess = () => {
    setFullText(false);
  };

  const newText = !fullText ? text?.slice(0, 300) : text;

  return (
    <div className="flex flex-col items-center gap-4 rounded-lg shadow-lg pb-8">
      <img className="bg-cover w-88 h-80" src={image} alt="pic" />
      <h2 className="font-semibold">{def}</h2>
      <div className=" flex flex-col gap-10 w-88 px-6">
        <p className=" text-gray-500">{newText}</p>
        {fullText ? (
          <button onClick={showLess} className="text-green-500 font-bold w-25">
            Show less
          </button>
        ) : (
          <button onClick={readMore} className="text-green-500 font-bold w-25">
            Read more
          </button>
        )}

        <button
          className="border-2 border-green-600 w-full text-green-6006"
          onClick={() => onClick(id)}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};
