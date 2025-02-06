import heartPintFlower from "/images/heart-pint-flower.svg";
import simleyFaceWineGlass from "/images/smiley-face-wine-glass.svg";

const GeneralInfo = () => {
  return (
    <div className="w-[90%] max-w-[600px] mx-auto">
      {/* Top Section: Image Left, Text Right (or centered on small screens) */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-20 p-10 text-center md:text-right">
        {/* Image on the left (centers on mobile) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={heartPintFlower}
            alt="Collection illustration of a blue heart, a pint Glass and a purple flower"
            className="w-40"
          />
        </div>

        {/* Text on the right (centers on mobile) */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <h3 className="text-3xl font-bold souvenir">
            Embrace the unexpected
          </h3>
          <p className="mt-4 karla">
            Spin the Wheel is a simple spin, a new place to explore, and a
            chance to enjoy a pint in a pub you might not have thought of
            before. It’s about stepping out of the routine and embracing the
            unexpected.
          </p>
        </div>
      </div>

      {/* Middle Section: Always Centered */}
      <div className="text-center mt-4 p-10">
        <p className="karla">
          Aberdeen has lots to offer. So explore the hidden gems, the cozy
          corners, and the vibrant places where stories are waiting to be made.
        </p>
      </div>

      {/* Bottom Section: Text Left, Image Right (or centered on small screens) */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-20 p-10 text-center md:text-left">
        {/* Text on the left (centers on mobile) */}
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-bold souvenir">The best way to play</h3>
          <p className="mt-4 karla">
            Play how you want of course... but we suggest going to wherever it
            lands first. Or at least play best of three!
          </p>
        </div>

        {/* Image on the right (centers on mobile) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src={simleyFaceWineGlass}
            alt="Collection illustration of a blue heart, a pint Glass and a purple flower"
            className="w-40"
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
