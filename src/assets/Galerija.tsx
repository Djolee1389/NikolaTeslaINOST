import React from "react";
import { useIntl } from "react-intl";
import { gallery } from "../data";

type Props = {
  galerijaRef: React.RefObject<HTMLDivElement | null>;
};

function Galerija({ galerijaRef }: Props) {
  const intl = useIntl();
  return (
    <section>
      <div ref={galerijaRef} className="scroll-link"></div>
      <section>
        <div className="naslov ml-20">
          {intl.formatMessage({ id: "navbar.galerija" })}
        </div>
      </section>
    </section>
  );
}

export default Galerija;
