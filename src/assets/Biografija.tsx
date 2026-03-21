import React from "react";

type Props = {
  bioRef: React.RefObject<HTMLDivElement | null>;
};

function Biografija({ bioRef }: Props) {
  return (
    <section>
      <div ref={bioRef} className="scroll-link"></div>
    <section>
      <div className="naslov ml-10">Biografija</div>
    </section>
    </section>
  );
}

export default Biografija;
