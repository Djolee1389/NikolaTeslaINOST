import { TimeLine } from "../components/Timeline";
import { useIntl } from "react-intl";

function Biografija() {
  const intl = useIntl();
  return (
    <section>
      <div id="biografija" className="scroll-link"></div>
      <section>
        <div className="flex flex-col items-center">
          <div className={`text-left  w-fit md:w-1/2 mb-10 px-5 `}>
            <h2 className="font-bold max-w-xxl w-80 md:w-100">
              {intl.formatMessage({ id: "navbar.biografija" })}
            </h2>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="md:w-2/3 py-5">
            <TimeLine />
          </div>
        </div>
        <button className="bg-transparent absolute cursor-pointer left-[10%] md:left-[20%] md:right-20 px-3 py-2 w-30 md:w-40 border border-white text-white hover:scale-110 md:py-3 md:px-5 transition-all duration-300 ease-in-out">
          <a
            href="https://sr.wikipedia.org/sr-ec/%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0_%D0%A2%D0%B5%D1%81%D0%BB%D0%B0"
            target="_"
          >
            {intl.formatMessage({ id: "learnMore.button" })}
          </a>
        </button>
      </section>
    </section>
  );
}

export default Biografija;
