import { useState } from "react";
import { BrojIzuma } from "../components/BrojIzuma";
import { useIntl } from "react-intl";
import { funFacts } from "../data";

function Zanimljivosti() {
  const intl = useIntl();
  const [r, setR] = useState(0);
  const handleClick = () => {
    let newR;
    do {
      newR = Math.floor(Math.random() * funFacts.length);
    } while (newR === r);
    setR(newR);
  };

  return (
    <>
      <div id="zanimljivosti" className="scroll-link bg-white my-20">
        <BrojIzuma />
      </div>
      <section className="flex flex-col items-center py-20 ">
        <div className={`text-left  w-fit md:w-1/2 mb-10 px-5 `}>
          <h2 className="font-bold">
            {intl.formatMessage({ id: "navbar.zanimljivosti" })}
          </h2>
          <p className="max-w-xxl  mt-4  text-sm md:text-base w-80 md:w-100">
            {intl.formatMessage({ id: "zanimljivosti.text" })}
          </p>
        </div>
        <div className="mx-6 md:w-1/2 flex flex-col items-end gap-5">
          <button
            className="border-2 cursor-pointer px-4 py-2 w-fit  hover:scale-110 transition-all duration-300 ease-in-out mr-5"
            onClick={handleClick}
          >
            {intl.formatMessage({ id: "zanimljivosti.button" })}
          </button>
          <div className="w-full h-70 border-2 px-6 py-4 md:px-10 md:py-7">
            <h3 className="font-bold mb-4">
              {intl.formatMessage({
                id: "zanimljivosti." + funFacts[r]?.title + ".title",
              })}
            </h3>
            <p>
              {intl.formatMessage({
                id: "zanimljivosti." + funFacts[r]?.title + ".text",
              })}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Zanimljivosti;
