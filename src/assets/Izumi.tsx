import React, { useState } from "react";
import { izumi } from "../data";
import { useIntl } from "react-intl";
import useIsVisible from "../components/useInView";

function Izumi() {
  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [leftSide, setLeftSide] = useState(false);
  const [ref, isInView] = useIsVisible({threshold:0.5});
  const intl = useIntl();


  const next = () => {
    setIndex((prev) => (prev + 1) % izumi.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + izumi.length) % izumi.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (window.innerWidth < 768) {
      setTouchStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;

    const deltaX = e.changedTouches[0].clientX - touchStartX;

    if (deltaX > 50) prev();
    else if (deltaX < -50) next();

    setTouchStartX(null);
  };

 const handleClick = (e: React.MouseEvent) => {
  if (window.innerWidth < 768 && !isAnimating) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;

    if (x > rect.width / 2) {
      next();
      setLeftSide(true);
    } else {
      prev();
      setLeftSide(false); 
    }

    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500); 
  }
};

  return (
    <>
      <div id="izumi" className="scroll-link" ></div>

      <section className="flex flex-col items-center py-20 ">
        <div ref={ref} className={`text-left  w-fit md:w-1/2 mb-10 px-5 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700 ease-out`}>
          <h2 className=" font-bold">{intl.formatMessage({id: "izumi.header"})}</h2>
          <p className="max-w-xxl  mt-4  text-sm md:text-base w-80 md:w-100">
            {intl.formatMessage({id: "izumi.text"})}
          </p>
          <p className="md:hidden opacity-50 text-right w-full px-5 mt-10">
            Tap/Swipe
          </p>
        </div>

        <div
          className="relative w-full max-w-[90vw] h-80 md:h-100 flex items-center justify-center overflow-hidden "
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={handleClick}
        >
          {izumi.map((item, i) => {
            const offset = i - index;

            let style = "absolute transition-all duration-500";

            if (offset === 0) {
              style += " md:scale-150 scale-110 z-30";
            } else if (offset === 1) {
              style +=
                " translate-x-[75%] scale-90 opacity-50 z-20 hidden md:block lg:translate-x-[85%]";
            } else if (offset === -1) {
              style +=
                " -translate-x-[75%] scale-90 opacity-50 z-20 hidden md:block lg:-translate-x-[85%]";
            } else {
              style += " opacity-0 scale-75";
            }

            return (
              <img
                key={item.id}
                src={item.img}
                alt={intl.formatMessage({ id: item.nameId })}
                className={
                  style +
                  ` ${isAnimating ? 'animate-reveal' : ''} rounded-lg shadow-lg max-w-[60vw] md:max-w-[30vw] lg:max-w-[20vw]`
                }
              />
            );
          })}

          {index !== 0 && (
            <button
              onClick={prev}
              className="hidden md:block absolute z-1000 left-0 lg:left-25 bg-white w-10 h-10 rounded-full opacity-70 hover:opacity-100 transition-(--transition)"
            />
          )}
          {index !== izumi.length - 1 && (
            <button
              onClick={next}
              className="hidden md:block absolute z-1000 right-0 lg:right-25 bg-white w-10 h-10 rounded-full opacity-70 hover:opacity-100 transition-(--transition)"
            />
          )}
        </div>

        <div className="text-center mt-6 max-w-xl px-4">
          <div className="text-white flex justify-center space-x-2 mb-4">
            {izumi.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  i === index ? "bg-white" : "bg-(--subtext)"
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <div className={` overflow-hidden`}>
             <h3 className={`text-xl font-bold ${isAnimating ? (leftSide ? "scrollLeft" : "scrollRight") : ""}`}>{intl.formatMessage({id: izumi[index].nameId})}</h3>
          <p className={`${isAnimating ? (leftSide ? "scrollLeft" : "scrollRight") : ""} text-(--subtext) pb-3`}>{intl.formatMessage({id: "izumiPage.year"})}: {izumi[index].year}</p>
          <p className={`mt-2 h-20 w-90  ${isAnimating ? (leftSide ? "scrollLeft" : "scrollRight") : ""}`}>{intl.formatMessage({id: izumi[index].descId})}</p>
          </div>
         
        </div>
      </section>
    </>
  );
}

export default Izumi;
