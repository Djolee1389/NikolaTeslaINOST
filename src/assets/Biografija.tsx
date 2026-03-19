import React from "react";

type Props = {
  bioRef: React.RefObject<HTMLDivElement | null>;
};

function Biografija({ bioRef }: Props) {
  return (
    <section>
      <div ref={bioRef}>Biografija</div>
    </section>
  );
}

export default Biografija;
