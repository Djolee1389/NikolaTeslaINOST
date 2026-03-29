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
import { useIntl } from "react-intl";

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
  const intl = useIntl();

  return (
    <>
      <Timeline >
        {timelineElements.map((item, i) => (
          <Reveal key={intl.formatMessage({ id: item.titleId })}>
            <TimelineItem className="h-50">
              <TimelineOppositeContent sx={{ maxWidth: "100px" }}>
                <div className="flex flex-col items-end">
                  <div className=" w-20 text-center ">{intl.formatMessage({ id: item.titleId })}</div>
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
                className="h-4/5 md:h-2/3 border-b-2 border-(--subtext) timelineContent"
              >
                {intl.formatMessage({ id: item.contentId })}
              </TimelineContent>
            </TimelineItem>
          </Reveal>
        ))}
      </Timeline>
    </>
  );
};
