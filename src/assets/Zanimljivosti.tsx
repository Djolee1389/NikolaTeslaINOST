import React from "react";
import { BrojIzuma } from "../components/BrojIzuma";

type Props = {
  factsRef: React.RefObject<HTMLDivElement | null>;
};

function Zanimljivosti({ factsRef }: Props) {
  return (
    <>
      <div ref={factsRef} className="scroll-link bg-white my-20">
        <BrojIzuma/>
      </div>
      <section>
        <div className="naslov ml-20">Zanimljivosti</div>
      </section>
    </>
  );
}

export default Zanimljivosti;
