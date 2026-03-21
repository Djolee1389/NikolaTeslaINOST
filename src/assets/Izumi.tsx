import React, { useState } from "react";
import { izumi } from "../data";

type Props = {
  izumiRef: React.RefObject<HTMLDivElement | null>;
};

function Izumi({ izumiRef }: Props) {
  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

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
    if (window.innerWidth < 768) {
      const x = e.nativeEvent.offsetX;
      if (x > window.innerWidth / 2) next();
      else prev();
    }
  };

  return (
    <>
      <div ref={izumiRef} className="scroll-link" />

      <section className="flex flex-col items-center py-10 bg-green-800">
        <div className="text-center mb-6">
          <h2 className=" font-bold">Izumi</h2>
          <p className="max-w-md mx-auto mt-4 text-sm md:text-base">
            Nikola Tesla razvio je brojne inovacije u oblasti električne
            energije, elektromagnetizma i bežičnog prenosa energije.
          </p>
          <p className="md:hidden opacity-50 text-right w-full px-5 mt-2">
            Tap/Swipe
          </p>
        </div>

        <div
          className="relative w-full max-w-[70vw] h-90 flex items-center justify-center overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={handleClick}
        >
          {izumi.map((item, i) => {
            const offset = i - index;

            let style = "absolute transition-all duration-500";

            if (offset === 0) {
              style += " scale-110 z-30";
            } else if (offset === 1) {
              style +=
                " translate-x-[60%] scale-90 opacity-70 z-20 hidden md:block";
            } else if (offset === -1) {
              style +=
                " -translate-x-[60%] scale-90 opacity-70 z-20 hidden md:block";
            } else {
              style += " opacity-0 scale-75";
            }

            return (
              <img
                key={item.id}
                src={item.img}
                alt={item.name}
                className={style + " rounded-lg shadow-lg max-w-100"}
              />
            );
          })}

          <button
            onClick={prev}
            className="hidden md:block absolute z-1000 left-0 bg-white w-10 h-10 rounded-full"
          />
          <button
            onClick={next}
            className="hidden md:block absolute z-1000 right-0 bg-white w-10 h-10 rounded-full"
          />
        </div>

        <div className="text-center mt-6 max-w-xl px-4">
          <h3 className="text-xl font-bold">{izumi[index].name}</h3>
          <p className="text-(--subtext)">Godina: {izumi[index].year}</p>
          <p className="mt-2">{izumi[index].desc}</p>
        </div>
      </section>
    </>
  );
}

export default Izumi;
