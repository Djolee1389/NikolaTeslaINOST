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
    console.log(newR);
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
        <div className="w-3/4 md:w-1/2 flex flex-col gap-5">
          <button className="border-2 p-2 w-30 md:w-40" onClick={handleClick}>
            KLIKNI Me
          </button>
          <div className="w-full h-50 border-2 px-10 py-7">
            <h3>{funFacts[r]?.title}</h3>
            <p>{funFacts[r]?.text}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Zanimljivosti;
