import Hero from "./Hero";
import Navbar from "../components/Navbar";
import Biografija from "./Biografija";
import Izumi from "./Izumi";
import Zanimljivosti from "./Zanimljivosti";
import Galerija from "./Galerija";

function App({
  setLocale: _setLocale,
}: {
  setLocale: (lang: "sr" | "en") => void;
}) {
  return (
    <>
      <Navbar setLocale={_setLocale} />

      <Hero />
      <div className=" z-1 bg-(--black) absolute w-full">
        <Biografija />
        <Izumi />
        <Zanimljivosti />
        <Galerija />
      </div>
    </>
  );
}

export default App;
