import React from "react";

type Props = {
  factsRef: React.RefObject<HTMLDivElement | null>;
};

function Zanimljivosti({ factsRef }: Props) {
  return (
    <section>
      <div ref={factsRef}>Zanimljivosti</div>
    </section>
  );
}

export default Zanimljivosti;
