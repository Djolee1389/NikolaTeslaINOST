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

export const TimeLine = () => {
  return (
    <>
      <Timeline>
        {timelineElements.map((item, i) => (
          <TimelineItem key={item.title} className="h-50 ">
            <TimelineOppositeContent sx={{ maxWidth: "100px" }}>
              <div className="flex flex-col items-end">
                <div className=" w-20 text-center">{item.title}</div>
                <div className=" w-20 text-center text-(--subtext)">
                  {item.year}
                </div>
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator className="mr-5">
              <TimelineDot variant="outlined" />
              {i !== timelineElements.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent className="h-3/4 border-b-2  ">
              {item.content}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
};
