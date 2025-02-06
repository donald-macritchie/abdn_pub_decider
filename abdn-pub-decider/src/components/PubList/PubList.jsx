import { useState } from "react";
import pubs from "../../data/pubs.js"; // Import pub list

import blueBottle from "/images/blue-bottle.svg";

const PubList = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Convert the object to an array and sort by the pub name
  const pubArray = Object.values(pubs).sort((a, b) => {
    // Sorting by name in alphabetical order (case-insensitive)
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="w-[80%] max-w-[600px] mx-auto mt-10 pt-6 pb-20 text-center">
      {/* Image */}
      <div className="flex justify-center mb-4">
        <img src={blueBottle} alt="Pub Illustration" className="w-32 h-32" />
      </div>

      {/* Title & Description */}
      <div>
        <h1 className="text-2xl font-bold souvenir">Can’t see your local?</h1>
        <p className="mt-2 text-lg karla">
          At ABDN Pub Decider, no pub is left behind.
        </p>
        <p className="mt-2 text-lg karla">
          If your favourite place is missing, just get in touch!
        </p>
      </div>

      <div className="mt-6">
        <a
          href="https://fineday.studio/contact"
          className="bg-[#FFFCC5] souvenir font-bold px-4 py-2 border-2 border-black rounded-lg shadow-md hover:bg-[#f4da42] transition-colors"
          target="_blank"
        >
          Contact
        </a>
      </div>

      <div className="mt-10">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-[#FFFCC5] souvenir font-bold px-4 py-2 border-2 border-black rounded-lg shadow-md hover:bg-[#f4da42] transition-colors"
        >
          {isOpen ? "Hide List" : "View List"}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 p-4 rounded-lg bg-[#FFFCC5] border-2 border-black shadow-md">
          <ul className="text-center space-y-2 karla">
            {pubArray.map((pub, index) => (
              <li
                key={index}
                className="py-2 px-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
              >
                {pub.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PubList;
