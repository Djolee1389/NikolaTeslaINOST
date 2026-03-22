import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { timelineElements } from "../data";
import useIsVisible from "./useInView";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
};

const Reveal = ({ children }: RevealProps) => {
  const [ref, isVisible] = useIsVisible({threshold:0.7});

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      {children}
    </div>
  );
};

export const TimeLine = () => {
  return (
    <>
      <Timeline >
        {timelineElements.map((item, i) => (
          <Reveal key={item.title}>
            <TimelineItem className="h-60 md:h-50">
              <TimelineOppositeContent sx={{ maxWidth: "100px" }}>
                <div className="flex flex-col items-end">
                  <div className=" w-20 text-center">{item.title}</div>
                  <div className=" w-20 text-center text-(--subtext)">
                    {item.year}
                  </div>
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator className="mr-5 ">
                <TimelineDot variant="outlined" />
                {i !== timelineElements.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent
                className="h-4/5 md:h-2/3 border-b-2 border-(--subtext) "
              >
                {item.content}
              </TimelineContent>
            </TimelineItem>
          </Reveal>
        ))}
      </Timeline>
    </>
  );
};
