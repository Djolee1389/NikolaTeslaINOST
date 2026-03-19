import React from "react";

type Props = {
  izumiRef: React.RefObject<HTMLDivElement | null>;
};

function Izumi({ izumiRef }: Props) {
  return (
    <section>
      <div ref={izumiRef}>Izumi</div>
    </section>
  );
}

export default Izumi;
