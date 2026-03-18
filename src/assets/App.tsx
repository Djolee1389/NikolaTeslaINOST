import { useRef } from "react";

import Hero from "./Hero";
import Navbar from "../components/Navbar";
import Biografija from "./Biografija";
import Izumi from "./Izumi";
import Zanimljivosti from "./Zanimljivosti";
import Galerija from "./Galerija";

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const izumiRef = useRef<HTMLDivElement>(null);
  const factsRef = useRef<HTMLDivElement>(null);
  const galerijaRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar
        heroRef={heroRef}
        bioRef={bioRef}
        izumiRef={izumiRef}
        factsRef={factsRef}
        galerijaRef={galerijaRef}
      />
      <Hero heroRef={heroRef} />
      <div className="mainSection">
        <Biografija bioRef={bioRef} />
        <Izumi izumiRef={izumiRef} />
        <Zanimljivosti factsRef={factsRef} />
        <Galerija galerijaRef={galerijaRef} />
      </div>
      <div className="h-100 w-100 background-red "></div>
    </>
  );
}

export default App;
