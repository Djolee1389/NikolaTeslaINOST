import { brojIzuma } from "../data";
import useIsVisible from "./useInView";
import { useEffect, useState } from "react";
import { useIntl } from "react-intl";

export const BrojIzuma = () => {
  const [ref, isInView] = useIsVisible();
  const [counts, setCounts] = useState<number[]>(brojIzuma.map(() => 0));
  const intl = useIntl();

  useEffect(() => {
    if (!isInView) return;

    const duration = 1200;
    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;

      const newCounts = brojIzuma.map((item) => {
        const end = item.title;
        return Math.min(Math.floor((progress / duration) * end), end);
      });

      setCounts(newCounts);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="w-full h-full text-black flex justify-around items-center"
    >
      {brojIzuma.map((item, i) => (
        <div
          key={i}
          className="w-content h-full flex items-center justify-center flex-col"
        >
          <span className="text-md md:text-2xl lg:text-3xl font-bold">
            {counts[i]}
            {i === 0 && "+"}
          </span>

          <p className="text-sm text-center md:text-md lg:text-lg text-(--subtext)">
            {intl.formatMessage({ id: item.textId })}
          </p>
        </div>
      ))}
    </div>
  );
};