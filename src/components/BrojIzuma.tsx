import { brojIzuma } from "../data";
import useIsVisible from "../useInView";
import { useEffect, useState } from "react";

export const BrojIzuma = () => {
    const [ref, isInView] = useIsVisible(); 
     const [counts, setCounts] = useState<number[]>(
  brojIzuma.map(() => 0)
);

 useEffect(() => {
  if (!isInView) return;

  const duration = 1500;
  let startTime: number | null = null;

  const animate = (time: number) => {
    if (!startTime) startTime = time;
    const progress = time - startTime;

    const newCounts = brojIzuma.map((item) => {
      const end : number = item.title ; 

      return Math.min(
        Math.floor((progress / duration) * end),
        end
      );
    });

    setCounts(newCounts);

    if (progress < duration) {
      requestAnimationFrame(animate);
    }
    
  };

  requestAnimationFrame(animate);
}, [isInView]);

    return ( 
    <>
      <div ref={ref} className="w-full h-full text-black flex justify-around items-center">
        {brojIzuma.map((item, i) => (
          <div
            key={i}
            className=" w-content h-full  flex items-center justify-center flex-col"
          >
            <span className=" text-md md:text-2xl lg:text-3xl font-bold">
              {counts[i]} {i === 0 &&  "+ "}
            </span>
            <p className="text-sm text-center md:text-md lg:text-lg text-(--subtext)">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </>
    )
  ;
};
