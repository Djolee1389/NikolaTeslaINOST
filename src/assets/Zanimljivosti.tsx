import React from "react";

type Props = {
  factsRef: React.RefObject<HTMLDivElement | null>;
};

function Zanimljivosti({ factsRef }: Props) {
  return (
    <section>
      <div ref={factsRef} className="naslov">Zanimljivosti</div>
    </section>
  );
}

export default Zanimljivosti;
