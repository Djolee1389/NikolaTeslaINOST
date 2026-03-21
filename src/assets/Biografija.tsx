import React from "react";

type Props = {
  bioRef: React.RefObject<HTMLDivElement | null>;
};

function Biografija({ bioRef }: Props) {
  return (
    <section>
      <div ref={bioRef} className="scroll-link"></div>
      <section className="">
        <div className="naslov ml-10">Biografija</div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, quod.
        </p>
      </section>
    </section>
  );
}

export default Biografija;
