import React from "react";
import { TimeLine } from "../components/Timeline";

type Props = {
  bioRef: React.RefObject<HTMLDivElement | null>;
};

function Biografija({ bioRef }: Props) {
  return (
    <section>
      <div ref={bioRef} className="scroll-link"></div>
      <section>
        <div className="naslov ml-10">Biografija</div>
        <div className="flex justify-center items-center">
          <div className="md:w-1/2 py-10">
            <TimeLine></TimeLine>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Biografija;
