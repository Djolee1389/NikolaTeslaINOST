import { useIntl } from "react-intl";
import { gallery } from "../data";
import GalleryImage from "../components/GalleryImage";

function Galerija() {
  const intl = useIntl();

  return (
    <>
      <div id="galerija" className="scroll-link mb-20"></div>
      <section>
        <div className="h-15 md:hidden bg-white w-full text-black flex items-center justify-center font-bold text-xl uppercase tracking-widest">
          {intl.formatMessage({ id: "navbar.galerija" })}
        </div>
        <div className="flex md:items-stretch justify-center gap-0 md:px-10 px-0 w-full">
          <div className=" md:py-0  py-10 w-[70%] h-150 overflow-auto border-solid md:border-t-2 border-b-2 border-white mb-50 galerijaScroll">
            {gallery.map((item, index) => (
              <GalleryImage key={index} item={item} />
            ))}
          </div>
          <div className="naslov md:flex hidden flex-col justify-center relative p-5 bg-white h-150 m-0 text-black uppercase">
            {intl
              .formatMessage({ id: "navbar.galerija" })
              .split("")
              .map((char, index) => {
                return (
                  <div className="text-center" key={index}>
                    {char}
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Galerija;
