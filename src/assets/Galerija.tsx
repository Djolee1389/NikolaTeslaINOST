import React from "react";

type Props = {
  galerijaRef: React.RefObject<HTMLDivElement | null>;
};

function Galerija({ galerijaRef }: Props) {
  return (
    <section>
      <div ref={galerijaRef} className="scroll-link"></div>
      <section>
        <div className="naslov ml-20">Galerija</div>
      </section>
    </section>
  );
}

export default Galerija;
