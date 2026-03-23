import React from "react";
import { TimeLine } from "../components/Timeline";
import { useIntl } from "react-intl";

type Props = {
  bioRef: React.RefObject<HTMLDivElement | null>;
};

function Biografija({ bioRef }: Props) {
  const intl = useIntl()
  return (
    <section>
      <div ref={bioRef} className="scroll-link"></div>
      <section>
        <div className="naslov ml-10">{intl.formatMessage({id:"navbar.biografija"})}</div>
        <div className="flex justify-center items-center">
          <div className="md:w-2/3 py-10">
            <TimeLine></TimeLine>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Biografija;
